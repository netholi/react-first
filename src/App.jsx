import { useEffect, useState } from "react";

export default function App() {
  const data = {
    Kerala: "Thiruvananthapuram",
    Karnataka: "Bengaluru",
    Tamilnadu: "Chenni",
  };

  const [selectedState, setSelectedState] = useState("Kerala");

  return (
    <>
      <select onChange={(e) => setSelectedState(e.target.value)}>
        <option value="Kerala"> Kerala </option>
        <option value="Karnataka"> Karnataka </option>
        <option value="Tamilnadu"> Tamilnadu </option>
      </select>

      <p>
        {" "}
        Selected state is : {selectedState} capital is : {data[selectedState]}
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
