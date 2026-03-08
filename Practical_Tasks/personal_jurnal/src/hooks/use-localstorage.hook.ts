import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
): [T | undefined, (newData: T) => void] {
  const [data, setData] = useState<T | undefined>(() => {
    const stored = localStorage.getItem(key);
    if (!stored) {
      return undefined;
    }
    try {
      return JSON.parse(stored) as T;
    } catch {
      return undefined;
    }
  });

  useEffect(() => {
    if (data !== undefined) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }, [key, data]);

  const saveData = (newData: T) => {
    setData(newData);
  };

  return [data, saveData];
}
