import {
  NumberDiv,
  ProductContentDiv,
  ProductInnerContent,
  ProductDetailsDiv,
  MainContentWrapper,
  ProductHeading,
} from "@/styles/dashboard.styles";
import Image from "next/image";
import React from "react";
import image from "../../public/productimg/curvsoftcurvlong.svg";

interface MyComponentProps {
  productTabHeading: string;
  topProductsData: Product[];
}

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  type: string;
  percent: number;
  cvrPercent: number;
}

interface ProductDetails {
  data: Product[];
}

const ProductContent: React.FC<MyComponentProps> = (props) => {
  return (
    <>
      <ProductHeading>{props.productTabHeading}</ProductHeading>
      <MainContentWrapper>
        {props.topProductsData.map((topProduct) => (
          <ProductContentDiv key={topProduct.id}>
            <Image
              src={image}
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <div>
              <p>{topProduct.name}</p>
              <ProductInnerContent>
                <NumberDiv>{topProduct.percent}%</NumberDiv>
                <span>{topProduct.type}</span>
              </ProductInnerContent>
            </div>
            <ProductDetailsDiv>
              <p>SEK {topProduct.price}</p>
              <span>CVR {topProduct.cvrPercent}% </span>
            </ProductDetailsDiv>
          </ProductContentDiv>
        ))}
      </MainContentWrapper>
    </>
  );
};

export default ProductContent;
