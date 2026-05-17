import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> + </button>
      <p> count : {count} </p>
    </div>
  );
}
