import React, { useState } from "react";
import ButtonFilter from "./ButtonFilter";
import { MainDivWrapper } from "@/styles/dashboard.styles";
import Graph from "./Graph";
import Products from "./Products";
import Header from "./Header";
import MobileNavbar from "./MobileNavbar";

const Dashboard = () => {
  const [dataForB, setDataForB] = useState([]);

  const sendDataToB = (data: any) => {
    setDataForB(data);
  };

  return (
    <>
      <Header />
      <MobileNavbar />
      <MainDivWrapper>
        <ButtonFilter sendDataToB={sendDataToB} />
        <Graph receivedData={dataForB} />
        <Products />
      </MainDivWrapper>
    </>
  );
};

export default Dashboard;
