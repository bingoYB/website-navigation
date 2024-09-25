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

  const [state, setState] = useState<T>(options?.defaultValue);

  useEffect(() => {
    const storedState = localStorage.getItem(key);

    if (storedState) {
      setState(deserializer(storedState));
    } else if (options?.defaultValue) {
      setState(options.defaultValue);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    
    if(state === options.defaultValue){
      return;
    }

    if (typeof state === "object") {
      localStorage.setItem(key, serializer(state));
    } else {
      localStorage.setItem(key, state as string);
    }
  }, [key, serializer, state]);

  return [state, setState];
}
