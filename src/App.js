// useContext uses
import { createContext, useState } from "react";
import Counter from "./Counter";
export const Context = createContext();
const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <Context.Provider value={{ count, increase, decrease }}>
        <Counter />
      </Context.Provider>
    </div>
  );
};
export default App;
