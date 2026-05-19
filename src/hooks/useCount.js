import CountContext from "../contexts/CountContext";
import { useContext } from "react";

export default function useCount() {
  return useContext(CountContext);
}
