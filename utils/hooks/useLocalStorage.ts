import { useEffect, useState } from "react";

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

  const defaultValue = deserializer(
    typeof window === "undefined" ? null : localStorage.getItem(key)
  );
  const [state, setState] = useState<T>(options?.defaultValue);

  useEffect(() => {
    setState(defaultValue || options?.defaultValue);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    localStorage.setItem(key, serializer(state));
  }, [key, serializer, state]);

  return [state, setState];
}
