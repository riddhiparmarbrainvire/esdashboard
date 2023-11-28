import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import { SlArrowLeft } from "react-icons/sl";
import ButtonFilter from "./ButtonFilter";
import Link from "next/link";
import { ChildrenWrapper, TabWrapper } from "@/styles/dashboard.styles";

type TabButtonProps = {
  isActive: boolean;
};

const TabButton = styled.button<TabButtonProps>`
  border-radius: 50px;
  border: ${(props) =>
    props.isActive ? "1px solid #000" : "1px solid #efefef"};
  cursor: pointer;
  font-size: 14px;
  width: auto;
  background-color: #fff;
  color: ${(props) => (props.isActive ? "#000" : "#4e4949")};
  margin: 5px;
  white-space: nowrap;
  padding: 10px;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

const TabButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 12px;
`;

const ArrowDiv = styled.div`
  padding-left: 20px;
  padding-right: 30px;
`;

type TabsProps = {
  tabs: string[];
  defaultTab: string;
  children: (activeTab: string) => ReactNode;
};

const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab, children }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tab: string) => {
    console.log("Clicked tab:", tab);
    setActiveTab(tab);
  };

  return (
    <>
      <TabWrapper>
        <TabButtonWrapper>
          <ArrowDiv>
            <Link href="/">
              <SlArrowLeft />
            </Link>
          </ArrowDiv>
          {tabs.map((tab) => (
            <TabButton
              key={tab}
              isActive={activeTab === tab}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </TabButton>
          ))}
        </TabButtonWrapper>

        <ButtonFilter />
      </TabWrapper>
      <ChildrenWrapper>{children(activeTab)}</ChildrenWrapper>
    </>
  );
};

export default Tabs;
