import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handle = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handle}>Increment</button>
    </div>
  );
};

export default Counter;
