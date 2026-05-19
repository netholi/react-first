import DecrimentButt from "./DecrimentButton";
import useCount from "../hooks/useCount";

export default function Card() {
  const { count } = useCount();
  return (
    <div>
      <h3> Card counter : {count} </h3>
      <p>Decrement : {<DecrimentButt />} </p>
    </div>
  );
}
