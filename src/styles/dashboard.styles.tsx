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

export const Wrapper = styled.div`
  background-color: #8daef2;
`;
export const MainDivWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 145vh;
`;

interface ButtonContainerProps {
  scroll?: boolean;
}

export const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-bottom: 15px;
  overflow-x: ${({ scroll }) => (scroll ? "auto" : "")};

  @media (max-width: 992px) {
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }

  @media (max-width: 576px) {
    justify-content: flex-start;
  }

  @media (min-width: 576px) {
    flex-wrap: nowrap;
    overflow-x: auto;
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
    border-radius: 50px;
    border: 1px solid #efefef;
    outline: none;
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const DashboardHeader = styled.div`
  height: 70px;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const GraphWrapper = styled.div`
  height: auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-bottom: 18px;
  border-radius: 5px;
`;

export const GraphHeading = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  padding: 2% 4% 4% 4%;
`;

export const GraphData = styled.div`
  padding: 4% 4% 2% 4%;
  font-size: 42px;
  font-weight: 500;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: left;
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
  height: 60vh;
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
    margin-left: 0;
  }

  @media (max-width: 1200px) {
    flex: ${({ sizeXl }) => sizeXl};
    border-radius: 0px;
  }
`;

interface ProductHeadingProps {
  screen?: boolean;
}

export const ProductHeading = styled.p<ProductHeadingProps>`
  font-size: 22px;
  padding: 20px;
  line-height: 26.5px;
  border-bottom: 0.8px solid #efefef;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 576px) {
    display: ${({ screen }) => (screen ? `none` : "block")};
    padding: 20px 10%;
  }
`;

export const ForWebScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
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

  &::-webkit-scrollbar {
    height: 1px;
    border-radius: 5px;
    background-color: lightgray;
  }

  @media (max-width: 768px) {
    overflow-x: auto;
    margin-bottom: 15px;

    &::-webkit-scrollbar {
      height: 5px;
      border-radius: 5px;
      background-color: lightgray;
    }
  }

  @media (max-width: 576px) {
    overflow-x: auto;
    margin-bottom: 15px;

    &::-webkit-scrollbar {
      height: 5px;
      border-radius: 5px;
      background-color: lightgray;
    }
  }
`;

export const MainProductDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0px 5px 15px;
  border-bottom: 1px solid #efefef;

  &.topProducts {
    padding: 5px 0px 5px 15px;
  }

  &.topPosts {
    padding: 5px 0px 5px 15px;
  }

  &.topStores {
    padding: 17px 0;
  }
`;

interface ScrollWrapperProps {
  height?: boolean;
}

export const ScrollWrapper = styled.div<ScrollWrapperProps>`
  max-height: ${({ height }) => (height ? `60vh` : "48vh")};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 1px;
    background: #f1f1f1;
  }

  @media (max-width: 576px) {
    max-height: ${({ height }) => (height ? `80vh` : "48vh")};

    &::-webkit-scrollbar {
      width: 1px;
      background: #f1f1f1;
    }
  }
`;

interface ImageDivProps {
  width?: boolean;
}

export const ImageDiv = styled.div<ImageDivProps>`
  width: ${({ width }) => (width ? `7%` : "15%")};
  margin-right: 2px;

  @media (max-width: 576px) {
    width: 40px;
  }
`;

export const ProductNameDiv = styled.div<ImageDivProps>`
  width: ${({ width }) => (width ? `100%` : "60%")};

  @media (max-width: 768px) {
    width: ${({ width }) => (width ? `60%` : "60%")};
  }

  @media (max-width: 576px) {
    width: ${({ width }) => (width ? `60%` : "60%")};
  }

  span {
    background-color: rgba(244, 240, 236, 1);
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 3px;
    border-radius: 5px;
    color: #3a3a3a;
    white-space: nowrap;
    margin-right: 5px;
  }
`;

export const PriceDetailDiv = styled.div<ImageDivProps>`
  width: ${({ width }) => (width ? `13%` : "17%")};

  @media (max-width: 768px) {
    width: ${({ width }) => (width ? `13%` : "20%")};
  }

  @media (max-width: 576px) {
    width: ${({ width }) => (width ? `22%` : "20%")};
  }

  span {
    font-size: 10px;
  }
`;

export const ProductNameText = styled.p`
  font-size: 12px;
  line-height: 21px;
  letter-spacing: 0em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProductTypeText = styled.p`
  font-size: 10px;
  line-height: 21px;
  letter-spacing: 0em;
`;

export const SekText = styled.p`
  font-size: 12px;
  line-height: 21px;
  letter-spacing: 0em;
`;

export const CvrPercentageText = styled.span`
  font-size: 10px;
  line-height: 21px;
  letter-spacing: 0em;
`;
