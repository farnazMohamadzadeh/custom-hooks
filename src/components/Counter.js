import React from "react";
import { Button } from "react-bootstrap";
import useCounter from "../hooks/useCounter";

export const Counter = () => {
  const [count, addHandler, minusHandler] = useCounter(0);

  return (
    <div className="center">
      <p>{count}</p>

      <Button
        variant="primary"
        style={{ marginRight: "10px" }}
        onClick={addHandler}
      >
        ADD
      </Button>

      <Button variant="warning" onClick={minusHandler}>
        MINUS
      </Button>
    </div>
  );
};
