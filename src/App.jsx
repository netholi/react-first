import { useEffect, useState } from "react";

export default function App() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    document.title = `count :${count}`;
  }, [count]);

  return (
    <div>
      <p> {count} </p>
      <button onClick={() => setcount(count + 1)}> Increment </button>
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
