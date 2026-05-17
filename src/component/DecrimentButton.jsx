import { useContext } from "react";
import { CountContext } from "../App";

export default function DecrimentButt() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count - 1)}> - </button>
    </div>
  );
}
