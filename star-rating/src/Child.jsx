import { useState } from "react";

const Child = ({ onRender }) => {
  const [data, setData] = useState(null);

  const onClick = () => {
    onRender(data);
  };
  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <br />
      <button onClick={onClick}>Child Btn </button>
    </div>
  );
};

export default Child;
