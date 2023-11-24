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

interface MyComponentProps {
  productTabHeading: string;
  topProductsData: Product[];
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
        {props.productTabHeading} <IoIosArrowForward />
      </ProductHeading>

      <MainContentWrapper>
        {props.topProductsData.map((topProduct) => (
          <ProductContentDiv key={topProduct.id}>
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
