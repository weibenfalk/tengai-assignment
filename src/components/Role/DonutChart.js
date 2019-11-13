import React from "react";
import ReactMinimalPieChart from "react-minimal-pie-chart";
// Gradient
import { donutGradient } from "../../helpers";
// Styles
import { StyledDonutChart, StyledPercentOverlay } from './styles/DonutChartStyles';

const DonutChart = ({ data }) => (
  <StyledDonutChart>
    <StyledPercentOverlay>
      <span>50%</span>
    </StyledPercentOverlay>
    <ReactMinimalPieChart
      animate={true}
      animationDuration={1500}
      animationEasing="ease-out"
      cx={50}
      cy={50}
      injectSvg={donutGradient}
      data={data}
      lengthAngle={360}
      lineWidth={20}
      paddingAngle={4}
      radius={50}
      startAngle={270}
    />
  </StyledDonutChart>
);

export default DonutChart;
