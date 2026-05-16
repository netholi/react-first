import { useRef, useState } from "react";

export default function App() {
  const txtRef = useRef();
  const [age, setAge] = useState("");
  return (
    <div>
      <input ref={txtRef} type="text" placeholder="Enter a name" />
      <button
        onClick={async () => {
          const text = txtRef.current.value;
          console.log(`api.agify.io/?name=${text}`);
          const response = await fetch(`https://api.agify.io/?name=${text}`);
          const msg = await response.json();
          console.log(msg.age);
          setAge(msg.age);
        }}
      >
        Get age
      </button>
      <p> you age is : {age} </p>
    </div>
  );
}

{
  /*
    viwsa"  - add quote to a word
  sd" - delete quote around word
  sr"{ - replace quote with {

wadsfsd lksdjlfkd ld ldsfjlfl  lajsdf 
    */
}
