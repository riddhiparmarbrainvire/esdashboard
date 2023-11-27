import React from "react";
import ButtonFilter from "./ButtonFilter";
import { Column, Columns, MainDivWrapper } from "@/styles/dashboard.styles";
import Graph from "./Graph";
import Products from "./Products";
import LayoutA from "./LayoutA";
import Header from "./Header";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
// } from "chart.js";
// import { Line } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top" as const,
//     },
//     title: {
//       display: true,
//       text: "Chart.js Line Chart",
//     },
//   },
// };

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 2",
//       data: [33, 33, 22, 11, 44, 56, 67, 5, , 3, 2, 22, 2, 2, 2, 22, 22],
//       borderColor: "rgb(53, 162, 235)",
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// };

const Dashboard = () => {
  return (
    <>
      <Header />
      <MainDivWrapper>
        <ButtonFilter />
        <Graph />
        <Products />
      </MainDivWrapper>

      {/* <Line options={options} data={data} />; */}
    </>
  );
};

export default Dashboard;
