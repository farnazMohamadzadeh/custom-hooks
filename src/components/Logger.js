import React from "react";
import useLogger from "./hooks/useLogger";

export const Logger = () => {
  const [value, setValue] = useLogger("");
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
