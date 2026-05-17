import { useContext } from "react";
import { CountContext } from "../App";
import DecrimentButt from "./DecrimentButton";

export default function Card() {
  const { count } = useContext(CountContext);
  return (
    <div>
      <h3> Card counter : {count} </h3>
      <p>Decrement : {<DecrimentButt />} </p>
    </div>
  );
}
