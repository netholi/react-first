import { useContext } from "react";
import CountContext from "../contexts/CountContext.js";

export default function Counter() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> + </button>
      <p> count : {count} </p>
    </div>
  );
}
