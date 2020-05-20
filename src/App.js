import React from "react";
// import BarCharts from "./BarCharts";
import Nav from "./Nav";
import AltNav from "./AltNav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <div className="chartWrapper">
        <BarCharts />
      </div> */}
      <div>
        <AltNav />
      </div>
    </div>
  );
}

export default App;
