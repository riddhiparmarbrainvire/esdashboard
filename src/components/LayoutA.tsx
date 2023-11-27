import React from "react";
import ButtonFilter from "./ButtonFilter";
import { Button, TabButtonWrapper } from "@/styles/dashboard.styles";
import Header from "./Header";
import { IoIosArrowBack } from "react-icons/io";
import TabButtons from "./TabButtons";

const LayoutA = ({ children, isLeft }: any) => {
  return (
    <div>
      <Header />
      <TabButtonWrapper className="text-class-layout">
        <div className="buttons-in-detail-page-of-products">
          <IoIosArrowBack />
        </div>
        {isLeft && <TabButtons />}

        <ButtonFilter />
      </TabButtonWrapper>
      <main>{children}</main>
      {/* hhhh */}
    </div>
  );
};

export default LayoutA;
