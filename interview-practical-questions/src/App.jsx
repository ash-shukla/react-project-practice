import { useState } from "react";
import "./App.css";
import BarChart from "./BarChart";
import CHART_DATA from "./data";
import Sidebar from "./tree-structure/Sidebar";
import Shape from "./interactive-shape/Shape";
import DataTable from "./dataTable/DataTable";

function App() {
  const [showChart, setShowChart] = useState(false);
  return (
    <>
      {/* Bar Chart Component */}
      {/* <main className="container">
      <button onClick={() => setShowChart((prev) => !prev)}>
        Toggle Chart
      </button>
      <br />
      {showChart ? <BarChart data={CHART_DATA} /> : null}
    </main> */}
      {/* ------------------------------------------------------------ */}
      {/* Collapsible Tree Component */}
      {/* <Sidebar /> */}
      {/* ---------------------------------------------------------- */}
      {/* Interactive Shape */}
      {/* <Shape /> */}
      {/* ---------------------------------------------------------- */}
      {/* Data Table */}
      <DataTable />
    </>
  );
}

export default App;
