import React from "react";
import data from "./data";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from "victory";

const tickValues = Array.from(Array(data.length).keys());

const BarCharts = () => (
  <div className="barCharts">
    <VictoryChart animate={{ duration: 500 }}>
      <VictoryAxis dependentAxis />
      <VictoryAxis
        invertAxis
        tickValues={tickValues}
        tickFormat={x => `Q${x + 1}`}
        style={{ tickLabels: { fontSize: 3 } }}
      />
      <VictoryBar
        className="victoryBarWrapper"
        horizontal
        // padding={{ left: 20, right: 60 }}
        barWidth={2}
        data={data}
        x="quarter"
        y="earnings"
      />
    </VictoryChart>
  </div>
);

export default BarCharts;
