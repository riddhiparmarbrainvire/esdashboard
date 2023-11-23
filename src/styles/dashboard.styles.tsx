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

export const ButtonContainer = styled.div`
  background-color: #8daef2;
  /* display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 80%;
  margin: auto; */

  margin-left: auto;
  margin-right: auto;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: right;
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

export const Header = styled.div`
  border: 2px solid red;
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
  border: 1px solid red;
  margin: 2px
`;
