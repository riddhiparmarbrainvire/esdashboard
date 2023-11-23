import { Column, Columns, ProductHeading } from "@/styles/dashboard.styles";
import React from "react";
import ProductContent from "./ProductContent";
import topProductsData from "../../TopProductData.json";

const Products = () => {
  return (
    <div>
      <Columns>
        <Column size={4} flex={"flex"} flexDirection={"column"} marginTop={10}>
          <ProductContent
            productTabHeading="Top Products"
            topProductsData={topProductsData}
          />
        </Column>
        <Column
          size={4}
          flex={"flex"}
          flexDirection={"column"}
          marginTop={10}
          marginLeft={15}
        >
          <ProductHeading>Top Posts</ProductHeading>
        </Column>
        <Column
          size={4}
          flex={"flex"}
          flexDirection={"column"}
          marginTop={10}
          marginLeft={15}
        >
          <ProductHeading>Top Stores</ProductHeading>
        </Column>
      </Columns>
    </div>
  );
};

export default Products;
