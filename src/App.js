import React from "react";
import BarCharts from "./BarCharts";
import Nav from "./Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="chartWrapper">
        <BarCharts />
      </div>
    </div>
  );
}

export default App;
