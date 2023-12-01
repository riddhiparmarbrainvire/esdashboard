import React, { useState } from "react";
import ButtonFilter from "./ButtonFilter";
import { Column, Columns, MainDivWrapper } from "@/styles/dashboard.styles";
import Graph from "./Graph";
import Products from "./Products";
import Header from "./Header";

const Dashboard = () => {
  const [dataForB, setDataForB] = useState([]);

  const sendDataToB = (data: any) => {
    setDataForB(data);
  };

  return (
    <>
      <Header />
      <MainDivWrapper>
        <ButtonFilter sendDataToB={sendDataToB} />
        <Graph receivedData={dataForB} />
        <Products />
      </MainDivWrapper>
    </>
  );
};

export default Dashboard;
