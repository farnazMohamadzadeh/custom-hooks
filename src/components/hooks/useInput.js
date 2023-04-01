import { useState } from "react";

export default function useInput(init) {
  const [value, setValue] = useState(init);
  const resetValue = () => {
    setValue("");
  };
  let binding = {
    value: value,
    onChange: (e) => setValue(e.target.value),
  };
  return [value, resetValue, binding];
}
