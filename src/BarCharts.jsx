import React from "react";
import data from "./data";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

const BarCharts = () => (
  <div className="barCharts">
    <VictoryChart animate={{ duration: 500 }} height={20 * (data.length - 1)}>
      <VictoryAxis
        style={{ tickLabels: { fontSize: 7 } }}
        dependentAxis
        tickFormat={x => `${x}%`}
      />
      <VictoryAxis
        // tickValues={tickValues}
        // tickFormat={x => `${x}%`}
        invertAxis
        style={{ tickLabels: { fontSize: 3 } }}
      />
      <VictoryBar
        className="victoryBarWrapper"
        horizontal
        barWidth={4}
        style={{
          data: {
            fill: "rgb(23, 52, 76)"
          }
        }}
        data={data}
        x="group"
        y="rate"
      />
    </VictoryChart>
  </div>
);

export default BarCharts;
