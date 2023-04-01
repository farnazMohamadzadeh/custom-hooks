import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";

export const LocalStorage = () => {
  const [value, setValue] = useLocalStorage("input-value");
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
