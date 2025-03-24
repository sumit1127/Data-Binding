import { useState } from "react";

const TwoWayBinding = () => {
  const [text, setText] = useState("");

  function handleText(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <p>{text}</p>
    </div>
  );
};

export default TwoWayBinding;
