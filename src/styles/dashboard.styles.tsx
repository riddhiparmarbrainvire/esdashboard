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

interface MainContentWrapperProps {
  height?: any;
}

export const MainContentWrapper = styled.div<MainContentWrapperProps>`
  max-height: ${({ height }) => (height ? height + `vh` : "50vh")};
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
  height: 130vh;
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
  width: auto;
  background-color: #fff;
  color: #4e4949;
  margin: 5px;
  white-space: nowrap;
  padding: 10px;

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
  background-color: #fff;
  color: #4e4949;
  margin-right: 12px;
  padding: 10px;

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
  height: 64vh;
  min-width: 31%;

  @media (max-width: 576px) {
    flex: ${({ sizeSm }) => sizeSm};
    border-radius: 0px;
    margin-left: 0;
    margin-top: ${({ marginTop }) => marginTop + `%`};
  }

  @media (max-width: 768px) {
    flex: ${({ sizeMd }) => sizeMd};
    border-radius: 0px;
    margin-left: 0;
    margin-top: ${({ marginTop }) => marginTop + `%`};
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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid #efefef;

  &.topProducts {
    padding: 5px 14px 5px 14px;
  }

  &.topPosts {
    padding: 5px 14px 5px 14px;
  }

  &.topStories {
    padding: 19px 0;
  }

  /* p {
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  } */
`;

export const ProductInnerContent = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 6px;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(58, 58, 58, 1);
  }
`;

export const WidthDiv = styled.div`
  width: 50%;

  p {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const NumberDiv = styled.div`
  background-color: rgba(244, 240, 236, 1);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #3a3a3a;
  padding: 0.3rem 0;
  white-space: nowrap;
`;

export const ProductDetailsDiv = styled.div`
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: right;
    font-weight: 500;
  }

  span {
    font-size: 12px;
  }
`;

export const TabButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DetailPageWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 75%;
  height: 76.5vh;
`;

export const ChildrenWrapper = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  flex-wrap: nowrap;
  overflow-x: auto;
  margin-bottom: 15px;

  &::-webkit-scrollbar {
    height: 5px;
    border-radius: 5px;
    background-color: lightgray;
  }

  /* @media (max-width: 992px) {
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }

  @media (max-width: 576px) {
    justify-content: flex-start;
  } */
`;
