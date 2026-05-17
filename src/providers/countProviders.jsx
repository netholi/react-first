import CountContext from "../contexts/CountContext";
import { useState } from "react";

export default function CountProvider({ children }) {
  const [count, setCount] = useState(1);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}
