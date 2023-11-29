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
  height: 130vh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-bottom: 15px;

  @media (max-width: 992px) {
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }

  @media (max-width: 576px) {
    justify-content: flex-start;
  }

  @media (min-width: 1200px) {
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  /* @media (min-width: 1449px) {
    flex-wrap: nowrap;
    overflow-x: auto;
  } */

  @media (min-width: 1449px) and (max-width: 320px) {
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
  padding: 24px 26px 20px 33px;
  line-height: 26.5px;
  border-bottom: 0.8px solid #efefef;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--Strawford-Bold);
`;

export const ProductContentDiv = styled.div`
  display: flex;
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
`;

export const ProductInnerContent = styled.span`
  display: flex;
  align-items: center;
  margin-top: 4%;

  span {
    margin-left: 6px;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(58, 58, 58, 1);
    font-family: var(--Strawford-Bold);
  }

  &.topStories {
    span {
      display: none;
    }
  }
`;

export const ImageContentDiv = styled.div`
  display: flex;
`;

export const FlexDiv = styled.div`
  display: flex;
`;

export const WidthDiv = styled.div`
  width: 50%;

  p {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* font-family: var(--Strawford-Bold); */
    font-family: "StrawfordBold";
  }
`;

export const NumberDiv = styled.div`
  background-color: rgba(244, 240, 236, 1);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #3a3a3a;
  padding: 1% 1%;
  white-space: nowrap;
`;

export const ProductDetailsDiv = styled.div`
  p {
    font-size: 12px;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: right;
    font-family: "StrawfordBoldItalic";
    /* font-family: var(--Strawford-Bold); */
    /* font-weight: bold; */
  }

  span {
    font-size: 10px;
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

// product css new
interface MainContentWrapperProps {
  height?: any;
}

export const MainContentWrapper = styled.div<MainContentWrapperProps>`
  max-height: ${({ height }) => (height ? height + `vh` : "51vh")};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 1px;
    background: #f1f1f1;
  }
`;

// export const ProductContainer = styled.div`
//   /* border: 2px dotted green; */
// `;

// export const ImageAndProductNameDiv = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export const ImageDiv = styled.div`
//   margin-right: 10px;
// `;

// export const AboutProduct = styled.div`
//   span {
//     font-family: Strawford;
//     font-size: 12px;
//     font-weight: 400;
//     line-height: 14px;
//     letter-spacing: 0em;
//     text-align: left;
//   }
// `;

// export const PercentageDiv = styled.div`
//   display: flex;
//   align-items: center;

//   span {
//     background: rgba(244, 240, 236, 1);
//     border-radius: 5px;
//     padding: 3px;
//     margin-right: 6px;
//   }
// `;

// export const PriceDetails = styled.div`
//   p {
//     font-family: Strawford;
//     font-size: 14px;
//     font-weight: 500;
//     line-height: 21px;
//     letter-spacing: 0em;
//     text-align: left;
//   }

//   span {
//     font-family: Strawford;
//     font-size: 12px;
//     font-weight: 400;
//     line-height: 14px;
//     letter-spacing: 0em;
//     text-align: left;
//   }
// `;

// export const ProductDetailsDiv = styled.div`
//   width: 50%;

//   p {
//     font-family: Strawford;
//     font-size: 14px;
//     font-weight: 500;
//     line-height: 21px;
//     letter-spacing: 0em;
//     text-align: left;
//   }
// `;

// export const FlexWrapperDiv = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 5px 20px 5px 20px;
//   border-bottom: 1px solid #efefef;
// `;
// product css end
