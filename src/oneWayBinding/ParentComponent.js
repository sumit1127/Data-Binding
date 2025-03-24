import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const message = "This msg from Parent component";
  return (
    <div>
      <ChildComponent message={message} />
    </div>
  );
};

export default ParentComponent;
