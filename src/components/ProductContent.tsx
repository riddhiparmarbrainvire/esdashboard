import {
  NumberDiv,
  ProductContentDiv,
  ProductInnerContent,
  ProductDetailsDiv,
  MainContentWrapper,
  ProductHeading,
  WidthDiv,
} from "@/styles/dashboard.styles";
import Image from "next/image";
import React from "react";
import image from "../../public/productimg/curvsoftcurvlong.svg";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

interface MyComponentProps {
  productTabHeading?: string;
  icon?: any;
  topProductsData: Product[];
  height?: any;
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
              ? "/topPosts"
              : props.productTabHeading === "Top Stores"
              ? "/topStories"
              : ""
          }
        >
          {props.icon}
        </Link>
      </ProductHeading>

      <MainContentWrapper
        className="height-for-detail-page"
        height={props.height}
      >
        {props.topProductsData.map((topProduct) => (
          <ProductContentDiv
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
            {props.productTabHeading === "Top Stores" ? (
              ""
            ) : (
              <Image
                src={image}
                width={50}
                height={50}
                alt="Picture of the author"
              />
            )}

            <WidthDiv>
              <p>{topProduct.name}</p>
              <ProductInnerContent>
                {props.productTabHeading === "Top Products" ? (
                  <NumberDiv>{topProduct.percent}%</NumberDiv>
                ) : (
                  ""
                )}

                <span>{topProduct.type}</span>
              </ProductInnerContent>
            </WidthDiv>

            <ProductDetailsDiv>
              <p>SEK {topProduct.price}</p>
              {props.productTabHeading === "Top Products" ? (
                <span>CVR {topProduct.cvrPercent}% </span>
              ) : (
                ""
              )}
            </ProductDetailsDiv>
          </ProductContentDiv>
        ))}
      </MainContentWrapper>
    </>
  );
};

export default ProductContent;
