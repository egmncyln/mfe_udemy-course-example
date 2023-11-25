import { useEffect, useState } from "react";
import { Button } from "./components/Button";

export const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
      <Button>Button</Button>
    </>
  );
};
