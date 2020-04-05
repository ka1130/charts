import React from "react";
import data from "./data";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

console.log(data);

const BarCharts = () => (
  <div className="barCharts">
    <VictoryChart
      animate={{ duration: 500 }}
      height={15 * (data.length - 1)}
      // domain={[0, 10]}
    >
      <VictoryAxis
        style={{ tickLabels: { fontSize: 7 } }}
        // invertAxis
        // axisValue={d => d}
        // orientation="bottom"
      />
      <VictoryAxis
        // tickValues={tickValues}
        dependentAxis
        style={{ tickLabels: { fontSize: 7 } }}
        tickFormat={y => y}
      />

      <VictoryBar
        className="victoryBarWrapper"
        horizontal
        barWidth={8}
        style={{
          data: {
            fill: "rgb(23, 52, 76)"
          }
        }}
        labels={d => d.datum.yName}
        data={data.reverse()}
        x="group"
        y="rate"
      />
    </VictoryChart>
  </div>
);

export default BarCharts;
