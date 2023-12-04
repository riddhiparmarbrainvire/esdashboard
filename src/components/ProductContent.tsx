import {
  ProductHeading,
  MainProductDiv,
  ImageDiv,
  ProductNameDiv,
  PriceDetailDiv,
  SekText,
  CvrPercentageText,
  ProductNameText,
  ProductTypeText,
  ScrollWrapper,
  ForWebScreen,
} from "@/styles/dashboard.styles";
import Image from "next/image";
import React from "react";
import image from "../../public/productimg/curvsoftcurvlong.svg";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { myFont2 } from "@/pages/_app";

interface MyComponentProps {
  productTabHeading?: string;
  icon?: any;
  topProductsData: Product[];
  height?: any;
  border?: any;
  width?: boolean;
  screen?: boolean;
  flex?: any;
}

interface Product {
  id?: number;
  name?: string;
  image?: string;
  price?: number;
  type?: string;
  percent?: number;
  cvrPercent?: number;
}

const ProductContent: React.FC<MyComponentProps> = (props) => {
  return (
    <>
      <ForWebScreen>
        <ProductHeading screen={props.screen}>
          {props.productTabHeading}
        </ProductHeading>
        <div style={{ marginRight: "10%" }}>
          <Link
            href={
              props.productTabHeading === "Top Products"
                ? "/topProducts"
                : props.productTabHeading === "Top Posts"
                ? "/topPosts"
                : props.productTabHeading === "Top Stores"
                ? "/topStores"
                : ""
            }
          >
            {props.icon}
          </Link>
        </div>
      </ForWebScreen>

      <ScrollWrapper height={props.height}>
        {props.topProductsData.map((topProduct) => (
          <MainProductDiv
            key={topProduct.id}
            className={
              props.productTabHeading === "Top Products"
                ? "topProducts"
                : props.productTabHeading === "Top Posts"
                ? "topPosts"
                : props.productTabHeading === "Top Stores"
                ? " topStores"
                : ""
            }
          >
            <ImageDiv width={props.width}>
              {props.productTabHeading === "Top Stores" ? (
                ""
              ) : (
                <Image
                  src={image}
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              )}
            </ImageDiv>
            <ProductNameDiv width={props.width}>
              <ProductNameText>{topProduct.name}</ProductNameText>
              <div style={{ display: "flex", alignItems: "center" }}>
                {props.productTabHeading === "Top Products" ? (
                  <>
                    <span>{topProduct.percent}%</span>
                  </>
                ) : (
                  ""
                )}

                <ProductTypeText>{topProduct.type}</ProductTypeText>
              </div>
            </ProductNameDiv>
            <PriceDetailDiv width={props.width}>
              <SekText>SEK {topProduct.price}</SekText>
              {props.productTabHeading === "Top Products" ? (
                <CvrPercentageText>
                  CVR {topProduct.cvrPercent}%
                </CvrPercentageText>
              ) : (
                ""
              )}
            </PriceDetailDiv>
          </MainProductDiv>
        ))}
      </ScrollWrapper>
    </>
  );
};

export default ProductContent;
