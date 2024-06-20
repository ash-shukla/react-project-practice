import { useState } from "react";
import "./App.css";
import BarChart from "./BarChart";
import CHART_DATA from "./data";

function App() {
  const [showChart, setShowChart] = useState(false);
  return (
    <main className="container">
      <button onClick={() => setShowChart((prev) => !prev)}>
        Toggle Chart
      </button>
      <br />
      {showChart ? <BarChart data={CHART_DATA} /> : null}
    </main>
  );
}

export default App;
