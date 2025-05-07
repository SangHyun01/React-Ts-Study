import { useEffect, useState } from "react";

function useLocalstorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  // todos 변경될 때마다 localstorage 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalstorage;
