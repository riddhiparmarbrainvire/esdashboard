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
  max-height: 39vh;
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
`;

export const Column = styled.div<ColumnProps>`
  flex: ${({ size }) => size};
  flex-direction: ${({ flexDirection }) => flexDirection};
  margin-top: ${({ marginTop }) => marginTop + `px`};
  margin-left: ${({ marginLeft }) => marginLeft + `px`};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 50vh;
`;

export const ProductHeading = styled.p`
  font-size: 22px;
  padding: 20px;
  line-height: 26.5px;
  border-bottom: 0.8px solid #efefef;
`;

export const ProductContentDiv = styled.div`
  padding: 17px 0px 17px 0px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
