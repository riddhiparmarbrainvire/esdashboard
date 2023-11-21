import styled from "styled-components";

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
  justify-content: center;
`;

export const Button = styled.button`
  border-radius: 50px;
  border: 1px solid #efefef;
  cursor: pointer;
  font-size: 14px;
  padding: 10px 36px;
  background-color: #fff;
  color: #dddddd;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
