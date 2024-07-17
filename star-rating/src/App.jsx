import { useState } from "react";
import "./App.css";
import Child from "./Child";
import Todo from "./Todo";
// import StarComponent from "./StarComponent";

function App() {
  const [pData, setPData] = useState();
  const onRender = (data) => {
    console.log(data);
    setPData(data);
  };
  return (
    <>
      {/* <StarComponent /> */}
      {/* <Todo /> */}
      <div>
        <Child onRender={onRender} />
        <br />
        This is rendered on Parent Component::{pData}
      </div>
    </>
  );
}

export default App;
