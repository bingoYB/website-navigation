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
  const [state, setState] = useState<T>(defaultValue || options?.defaultValue);

  useEffect(() => {
    setState(defaultValue || options?.defaultValue);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if(typeof state === "object"){
      localStorage.setItem(key, serializer(state));
    }else {
      localStorage.setItem(key, state as string);
    }
  }, [key, serializer, state]);

  return [state, setState];
}