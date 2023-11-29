import {
  // AboutProduct,
  FlexDiv,
  // FlexWrapperDiv,
  // ImageAndProductNameDiv,
  ImageContentDiv,
  // ImageDiv,
  // MainContentWrapper,
  NumberDiv,
  // PercentageDiv,
  // PriceDetails,
  // ProductContainer,
  ProductContentDiv,
  ProductDetailsDiv,
  // NumberDiv,
  // ProductContentDiv,
  // ProductInnerContent,
  // ProductDetailsDiv,
  MainContentWrapper,
  ProductHeading,
  ProductInnerContent,
  WidthDiv,
  // WidthDiv,
  // ImageContentDiv,
  // FlexDiv,
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
            <FlexDiv>
              <ImageContentDiv>
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
                  <p className={`${myFont2.className}`}>{topProduct.name}</p>
                  <ProductInnerContent>
                    {props.productTabHeading === "Top Products" ? (
                      <NumberDiv>
                        {topProduct.percent}
                        {"%" ? "%" : "SEK / Click"}
                      </NumberDiv>
                    ) : (
                      ""
                    )}

                    <span>{topProduct.type}</span>
                  </ProductInnerContent>
                </WidthDiv>
              </ImageContentDiv>

              <ProductDetailsDiv>
                <p>SEK {topProduct.price}</p>
                {props.productTabHeading === "Top Products" ? (
                  <span>CVR {topProduct.cvrPercent}%</span>
                ) : (
                  ""
                )}
              </ProductDetailsDiv>
            </FlexDiv>
          </ProductContentDiv>
        ))}
      </MainContentWrapper>

      {/* <MainContentWrapper>
        {props.topProductsData.map((topProduct) => (
          <ProductContainer
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
            <FlexWrapperDiv>
              <ImageAndProductNameDiv>
                <ImageDiv>
                  <Image
                    src={image}
                    width={40}
                    height={40}
                    alt="Picture of the author"
                  />
                </ImageDiv>

                <ProductDetailsDiv>
                  <p>{topProduct.name}</p>
                  <AboutProduct>
                    <PercentageDiv>
                      {props.productTabHeading === "Top Products" ? (
                        <span>
                          {topProduct.percent}
                          {"%" ? "%" : "SEK / Click"}
                        </span>
                      ) : (
                        ""
                      )}

                      <p>{topProduct.type}</p>
                    </PercentageDiv>
                  </AboutProduct>
                </ProductDetailsDiv>
              </ImageAndProductNameDiv>
              <PriceDetails className="test-p">
                <p>SEK {topProduct.price}</p>
                {props.productTabHeading === "Top Products" ? (
                  <span>CVR {topProduct.cvrPercent}%</span>
                ) : (
                  ""
                )}
              </PriceDetails>
            </FlexWrapperDiv>
          </ProductContainer>
        ))}
      </MainContentWrapper> */}
    </>
  );
};

export default ProductContent;
