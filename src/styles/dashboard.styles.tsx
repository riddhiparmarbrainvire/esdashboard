import styled from "styled-components";
import DatePicker from "react-datepicker";

type ColumnProps = {
  size?: number;
  sizeSm?: number;
  sizeMd?: number;
  sizeLg?: number;
  sizeXl?: number;
  flex?: string;
  flexDirection?: string;
  marginTop?: number;
  marginLeft?: number;
};

export const MainContentWrapper = styled.div`
  max-height: 42vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 1px;
    background: #f1f1f1;
  }
`;

export const Wrapper = styled.div`
  background-color: #8daef2;
`;
export const MainDivWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 100vh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-bottom: 15px;
  flex-wrap: nowrap;
  overflow-x: auto;

  @media (max-width: 992px) {
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }

  @media (max-width: 576px) {
    justify-content: flex-start;
  }
`;

export const Button = styled.button`
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

export const DateInputField = styled(DatePicker)`
  border-radius: 50px;
  border: 1px solid #efefef;
  cursor: pointer;
  font-size: 14px;
  padding: 10px 36px;
  background-color: #fff;
  color: #4e4949;
  margin: 5px;
  width: 185px;

  &:focus {
    border: none;
    outline: none;
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const DashboardHeader = styled.div`
  height: 70px;
`;

export const GraphWrapper = styled.div`
  height: 220px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-bottom: 18px;
`;

export const Columns = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding-bottom: 8%;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    padding: 5% 0 5% 0;
  }

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    padding: 5% 0 5% 0;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 5% 0 5% 0;
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    padding: 5% 0 5% 0;
  }
`;

export const Column = styled.div<ColumnProps>`
  flex: ${({ size }) => size};
  flex-direction: ${({ flexDirection }) => flexDirection};
  margin-left: ${({ marginLeft }) => marginLeft + `px`};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 57vh;

  .topProducts {
    background-color: red;
  }

  @media (max-width: 576px) {
    flex: ${({ sizeSm }) => sizeSm};
    border-radius: 0px;
  }

  @media (max-width: 768px) {
    flex: ${({ sizeMd }) => sizeMd};
    border-radius: 0px;
  }

  @media (max-width: 992px) {
    flex: ${({ sizeLg }) => sizeLg};
    border-radius: 0px;
  }

  @media (max-width: 1200px) {
    flex: ${({ sizeXl }) => sizeXl};
    border-radius: 0px;
  }
`;

export const ProductHeading = styled.p`
  font-size: 22px;
  padding: 20px;
  line-height: 26.5px;
  border-bottom: 0.8px solid #efefef;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductContentDiv = styled.div`
  padding: 9px 0px 9px 0px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid #efefef;

  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const ProductInnerContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  span {
    margin-left: 10px;
    font-size: 18px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const WidthDiv = styled.div`
  width: 50%;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const NumberDiv = styled.div`
  background-color: rgba(244, 240, 236, 1);
  font-size: 13px;
  padding: 2.09px, 4.17px, 2.09px, 4.17px;
  border-radius: 2.78px;
  gap: 5.58px;
`;

export const ProductDetailsDiv = styled.div`
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: right;
  }
`;
