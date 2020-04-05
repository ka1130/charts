import React from "react";
import data from "./data";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
  VictoryLine
} from "victory";

console.log(data);
const navy = "rgb(23, 52, 76)";

const BarCharts = () => (
  <div className="barCharts">
    <VictoryChart
      animate={{ duration: 500 }}
      height={15 * (data.length - 1)}
      minDomain={{ y: 0 }}
      maxDomain={{ y: 100 }}
    >
      <VictoryAxis style={{ tickLabels: { fontSize: 7 } }} offsetY={46} />
      <VictoryAxis
        dependentAxis
        style={{ tickLabels: { fontSize: 7 } }}
        tickFormat={y => y + "%"}
        tickCount={10}
        offsetY={46}
      />

      <VictoryBar
        className="victoryBarWrapper"
        horizontal
        barWidth={8}
        style={{
          data: {
            fill: navy
          }
        }}
        labels={d => d.datum.yName}
        data={data.reverse()}
        labelComponent={<VictoryLabel style={{ fontSize: 5 }} />}
        x="group"
        y="rate"
      />
      <VictoryLine
        labelComponent={
          <VictoryLabel style={{ fontSize: 8, color: "blue" }} text="80%" />
        }
        y={() => 80}
        style={{
          data: { stroke: "blue", strokeWidth: 1, strokeDasharray: "2, 2" }
        }}
      />
    </VictoryChart>
  </div>
);

export default BarCharts;
