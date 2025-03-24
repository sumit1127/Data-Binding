import Counter from "./oneWayBinding/Counter";
import ParentComponent from "./oneWayBinding/ParentComponent";
import TwoWayBinding from "./twoWayBinding/TwoWayBinding";

const App = () => {
  return (
    <div>
      <ParentComponent />
      <Counter />
      <TwoWayBinding />
    </div>
  );
};

export default App;
