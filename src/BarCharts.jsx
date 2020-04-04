import React from "react";
import data from "./data";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

const tickValues = Array.from(Array(data.length).keys());
const tickFormat = data.map(el => `Q-${el["quarter"]}`);

const BarCharts = () => (
  <div className="barCharts">
    <h2>BarCharts</h2>
    <VictoryChart>
      <VictoryAxis tickValues={tickValues} tickFormat={tickFormat} />
      <VictoryBar
        className="victoryBarWrapper"
        data={data}
        x="quarter"
        y="earnings"
      />
    </VictoryChart>
  </div>
);

export default BarCharts;
