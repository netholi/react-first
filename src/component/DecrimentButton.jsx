import useCount from "../hooks/useCount.js";

export default function DecrimentButt() {
  const { count, setCount } = useCount();
  return (
    <>
      <button onClick={() => setCount(count - 1)}> - </button>
    </>
  );
}
