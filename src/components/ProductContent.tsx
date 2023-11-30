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
      <ProductHeading>
        {props.productTabHeading}
        <Link
          href={
            props.productTabHeading === "Top Products"
              ? "/topProducts"
              : props.productTabHeading === "Top Posts"
              ? "/topProducts"
              : props.productTabHeading === "Top Stores"
              ? "/topProducts"
              : ""
          }
        >
          {props.icon}
        </Link>
      </ProductHeading>

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
                ? " topStories"
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
