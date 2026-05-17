import { useContext } from "react";
import CountContext from "../contexts/CountContext.js";

export default function DecrimentButt() {
  const { count, setCount } = useContext(CountContext);
  return (
    <>
      <button onClick={() => setCount(count - 1)}> - </button>
    </>
  );
}
