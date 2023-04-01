import { useState, useEffect } from "react";
function getLocalStorage(key) {
  let localInputValue = localStorage.getItem(key);
  if (localInputValue) {
    return localInputValue;
  }
  return "";
}
export default function useLocalStorage(key) {
  const [value, setValue] = useState(() => {
    return getLocalStorage(key);
  });
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);
  return [value, setValue];
}
