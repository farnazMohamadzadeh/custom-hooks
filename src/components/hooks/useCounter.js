import { useState } from "react";
export default function useCounter(init) {
  const [count, setCount] = useState(init);

  const addHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const minusHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return [count, addHandler, minusHandler];
}
