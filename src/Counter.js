import { useContext } from "react";
import { Context } from "./App";
export default function Counter() {
  const { count, increase, decrease } = useContext(Context);

  return (
    <>
      <button onClick={decrease}>Decrement</button>
      {count}
      <button onClick={increase}>Increment</button>
    </>
  );
}
