import Card from "./component/Card";
import indianStates from "./component/States";
export default function App() {
  return (
    <>
      <h1>hello states </h1>
      {indianStates.map((item) => (
        <Card key={item.state} data={item} />
      ))}
    </>
  );
}
