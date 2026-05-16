import { useRef, useState } from "react";

export default function App() {
  const txtRef = useRef();
  const [txt, setTxt] = useState("");
  return (
    <div>
      <input ref={txtRef} type="text" />
      <button
        onClick={() => {
          console.log(txtRef.current.value);
          setTxt(txtRef.current.value);
        }}
      >
        {" "}
        getText{" "}
      </button>
      <p> input text = {txt} </p>
    </div>
  );
}

{
  /*
    viwsa"  - add quote to a word
  sd" - delete quote around word
  sr"{ - replace quote with {


    */
}
