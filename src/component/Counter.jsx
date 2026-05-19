import useCount from "../hooks/useCount.js";

export default function Counter() {
  const { count, setCount } = useCount();
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> + </button>
      <p> count : {count} </p>
    </div>
  );
}
