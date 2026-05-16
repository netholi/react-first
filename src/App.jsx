import { useEffect, useState } from "react";

export default function App() {
  const data = {
    Kerala: "Thiruvananthapuram",
    Karnataka: "Bengaluru",
    Tamilnadu: "Chenni",
  };

  const [selectedState, setSelectedState] = useState("Kerala");
  const [selectedCapital, setSelectedCapital] = useState("Thiruvananthapuram");

  const selectState = (e) => {
    setSelectedState(e.target.value);
  };
  const changeCapital = () => {
    setSelectedCapital(data[selectedState]);
  };
  useEffect(changeCapital, [selectedState]);

  return (
    <>
      <select onChange={selectState}>
        <option value="Kerala"> Kerala </option>
        <option value="Karnataka"> Karnataka </option>
        <option value="Tamilnadu"> Tamilnadu </option>
      </select>

      <p>
        {" "}
        Selected state is : {selectedState} capital is : {selectedCapital}
      </p>
    </>
  );
}

{
  /*
    viwsa"  - add quote to a word
  sd" - delete quote around word
  sr"{ - replace quote with {


    */
}
