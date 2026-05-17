import Card from "./component/Card";
import Counter from "./component/Counter";
import { createContext, useState } from "react";

export const CountContext = createContext();
export default function App() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Counter />
        <Card />
        <Card />
      </CountContext.Provider>
    </div>
  );
}
