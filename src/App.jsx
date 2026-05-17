import Card from "./component/Card";
import Counter from "./component/Counter";
import CountProvider from "./providers/countProviders";

export default function App() {
  return (
    <div>
      <CountProvider>
        <Counter />
        <Card />
        <Card />
      </CountProvider>
    </div>
  );
}
