import "./card.css";

import { NumericFormat } from "react-number-format";

export default function Card({ data }) {
  const formatIndianCurrency = (number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "decimal", // or 'currency' for $ or ₹
      currency: "USD", // optional: specify currency symbol
      maximumFractionDigits: 0,
    }).format(number);
  };

  console.log(data);
  return (
    <div className="stateCard">
      <h3>{data.state}</h3>
      <h5> Capital: {data.capital}</h5>
      <h5>Population: {formatIndianCurrency(data.population)}</h5>
    </div>
  );
}

/*
  *
  
      <NumericFormat
        value={data.population}
        displayType="text"
        thousandSeparator={true}
      />
  
  
  
  *
  
  
  
export default function Card() {
  const [counter, setCounter] = useState(0);
  function IncCount() {
    setCounter((Count) => Count + 1);
  }
  return (
    <>
      <h3>
        <p>This is a card </p>
        <p>{counter}</p>
        <button onClick={IncCount}> click </button>
      </h3>
    </>
  );
}
*/
