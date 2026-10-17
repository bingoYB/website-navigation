import { useEffect, useRef, useState } from "react";

interface Options<T> {
  defaultValue?: T | (() => T);
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
}

export function useLocalStorageState<T>(
  key: string,
  options: Options<T> = {}
): [T?, ((value?: T | ((previousState: T) => T)) => void)?] {
  const { serializer = JSON.stringify, deserializer = JSON.parse } = options;

  const [state, setState] = useState<T>(options.defaultValue);
  const defaultValue = useRef(state);
  const [loadedKey, setLoadedKey] = useState<string>();

  useEffect(() => {
    let value = defaultValue.current;
    try {
      const storedValue = window.localStorage.getItem(key);
      if (storedValue !== null) {
        try {
          value = deserializer(storedValue) ?? defaultValue.current;
        } catch {
          // Earlier versions stored string values without JSON encoding.
          if (typeof value === "string") value = storedValue as unknown as T;
        }
      }
    } catch {
      // Keep the default when browser storage is unavailable.
    }
    setState(() => value);
    setLoadedKey(key);
  }, [key, deserializer]);

  useEffect(() => {
    if (typeof window === "undefined" || loadedKey !== key) {
      return;
    }

    try {
      if (state === undefined) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, serializer(state));
      }
    } catch {
      // The state remains usable when storage is blocked or full.
    }
  }, [key, serializer, state, loadedKey]);

  return [state, setState];
}
