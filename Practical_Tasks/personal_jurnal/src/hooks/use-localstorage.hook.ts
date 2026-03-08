import { useEffect, useState } from "react";

export function useLocalStorage(key) {
  const [data, setData] = useState();

  useEffect(() => {
    const ref = JSON.parse(localStorage.getItem("key") || "null");
    if (ref) {
      setData(ref);
    }
  }, []);

  const saveData = (newData) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return [data, saveData];
}
