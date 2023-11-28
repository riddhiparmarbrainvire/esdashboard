import { Column, Columns, ProductHeading } from "@/styles/dashboard.styles";
import React from "react";
import ProductContent from "./ProductContent";
import topProductsData from "../../TopProductData.json";
import topPostsData from "../../TopPostsData.json";
import topStoresData from "../../TopStoresData.json";
import { IoIosArrowForward } from "react-icons/io";

const Products = () => {
  return (
    <div>
      <Columns>
        <Column
          size={4}
          sizeMd={12}
          sizeLg={12}
          sizeSm={12}
          flex={"flex"}
          flexDirection={"column"}
        >
          <ProductContent
            icon={<IoIosArrowForward />}
            productTabHeading="Top Products"
            topProductsData={topProductsData}
          />
        </Column>
        <Column
          size={4}
          sizeMd={12}
          sizeLg={12}
          sizeSm={12}
          flex={"flex"}
          flexDirection={"column"}
          marginLeft={15}
          marginTop={5}
        >
          <ProductContent
            icon={<IoIosArrowForward />}
            productTabHeading="Top Posts"
            topProductsData={topPostsData}
          />
        </Column>
        <Column
          size={4}
          sizeMd={12}
          sizeLg={12}
          sizeSm={12}
          flex={"flex"}
          flexDirection={"column"}
          marginLeft={15}
          marginTop={5}
        >
          <ProductContent
            icon={<IoIosArrowForward />}
            productTabHeading="Top Stores"
            topProductsData={topStoresData}
          />
        </Column>
      </Columns>
    </div>
  );
};

export default Products;
