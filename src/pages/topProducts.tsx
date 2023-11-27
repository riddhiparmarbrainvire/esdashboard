import { Button, DetailPageWrapper } from "@/styles/dashboard.styles";
import React, { ReactElement } from "react";
import topProductsData from "../../TopProductData.json";
import ProductContent from "@/components/ProductContent";
import LayoutA from "@/components/LayoutA";
import Tabs from "@/components/Tabs";
import topPostsData from "../../TopPostsData.json";
import topStoresData from "../../TopStoresData.json";

interface MyComponentProps {
  productTabHeading: string;
  topProductsData: Product[];
  getLayout?: any;
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

const TopProducts = () => { 
  const tabs = ["Top Products", "Top Posts", "Top Stores"];

  return (
    <DetailPageWrapper>
      <Tabs tabs={tabs} defaultTab={"Top Products"}>
        {(activeTab) => (
          <div>
            {activeTab === "Top Products" && (
              <>
                <ProductContent
                  topProductsData={topProductsData}
                  productTabHeading="Top Products"
                  height={65}
                />
              </>
            )}
            {activeTab === "Top Posts" && (
              <>
                <ProductContent
                  topProductsData={topPostsData}
                  productTabHeading="Top Posts"
                  height={65}
                />
              </>
            )}
            {activeTab === "Top Stores" && (
              <>
                <ProductContent
                  topProductsData={topStoresData}
                  productTabHeading="Top Stores"
                  height={65}
                />
              </>
            )}
          </div>
        )}
      </Tabs>
    </DetailPageWrapper>
  );
};

TopProducts.getLayout = function getLayout(page: ReactElement) {
  return <LayoutA isLeft={true}>{page}</LayoutA>;
};
export default TopProducts;
