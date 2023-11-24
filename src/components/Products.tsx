import { Column, Columns, ProductHeading } from "@/styles/dashboard.styles";
import React from "react";
import ProductContent from "./ProductContent";
import topProductsData from "../../TopProductData.json";
import topPostsData from "../../TopPostsData.json";
import topStoresData from "../../TopStoresData.json";

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
          marginTop={10}
        >
          <ProductContent
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
          marginTop={10}
          marginLeft={15}
        >
          <ProductContent
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
          marginTop={10}
          marginLeft={15}
        >
          <ProductContent
            productTabHeading="Top Stores"
            topProductsData={topStoresData}
          />
        </Column>
      </Columns>
    </div>
  );
};

export default Products;
