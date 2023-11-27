import { Button } from "@/styles/dashboard.styles";
import React, { useState, ReactNode } from "react";
import styled from "styled-components";

const TabsContainer = styled.div`
  margin-bottom: 20px;
`;

interface TabButtonProps {
  isActive: boolean;
}

const TabButton = styled.button<TabButtonProps>`
  border-radius: 50px;
  border: 1px solid #efefef;
  cursor: pointer;
  font-size: 14px;
  padding: 10px 36px;
  background-color: #fff;
  color: #4e4949;
  margin: 5px;
  white-space: nowrap;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

interface TabsProps {
  tabs: string[];
  defaultTab: string;
  children: (activeTab: string) => ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab, children }) => {
  const [activeTab, setActiveTab] = useState("Top Products");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          isActive={activeTab === tab}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </TabButton>
      ))}
      <div>{children(activeTab)}</div>
    </TabsContainer>
  );
};

export default Tabs;
