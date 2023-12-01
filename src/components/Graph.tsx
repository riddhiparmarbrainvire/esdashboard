import {
  GraphData,
  GraphHeading,
  GraphWrapper,
} from "@/styles/dashboard.styles";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import JsonDataForDate from "../../data.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = ({ receivedData }: any) => {
  console.log(receivedData, receivedData, "receivedDatareceivedData");
  const options = {
    scales: { x: { display: false }, y: { display: false } },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const formatReceivedDates = ({ start, end }: any) => {
    const formatSingleDate = (date: any) => {
      const dateObj = new Date(date);
      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(1, "0");
      const day = String(dateObj.getDate()).padStart(1, "0");
      return `${year}-${month}-${day}`;
    };

    const formattedStartDate = start ? formatSingleDate(start) : null;
    const formattedEndDate = end ? formatSingleDate(end) : null;
    console.log(formattedStartDate, formattedEndDate, "formated");
    return { formattedStartDate, formattedEndDate };
  };

  formatReceivedDates(receivedData);

  const transformedData = JsonDataForDate.map((data) => ({
    x: data.date,
    y: data.earnings,
  }));

  console.log(transformedData, "transformedData");

  const filteredData = receivedData
    ? transformedData.filter((d) => d.x === receivedData)
    : transformedData;

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 2",
        data: [
          1, 23, 4, 2, 33, 55, 67, 12, 3, 5, 9, 8, 78, 67, 98, 3, 6, 78, 5, 4,
        ],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "rgb(255, 99, 132)",
        pointRadius: 0,
      },
    ],
  };

  return (
    <GraphWrapper>
      <GraphHeading>Earnings</GraphHeading>
      <Line options={options} data={data} width={"700"} height={"80"} />
      <GraphData>SEK 2,582</GraphData>
    </GraphWrapper>
  );
};

export default Graph;
