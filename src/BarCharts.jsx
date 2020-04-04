import React from "react";
import data from "./data";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

const tickValues = Array.from(Array(data.length).keys());

const BarCharts = () => (
  <div className="barCharts">
    <h2>BarCharts</h2>
    <VictoryChart>
      <VictoryAxis dependentAxis />
      <VictoryAxis tickValues={tickValues} tickFormat={x => `Q-${x}`} />
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
