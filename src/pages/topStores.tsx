import { Button, DetailPageWrapper } from "@/styles/dashboard.styles";
import React, { ReactElement } from "react";
import topProductsData from "../../TopProductData.json";
import ProductContent from "@/components/ProductContent";
import Tabs from "@/components/Tabs";
import topPostsData from "../../TopPostsData.json";
import topStoresData from "../../TopStoresData.json";
import ButtonFilter from "@/components/ButtonFilter";
import Header from "@/components/Header";
import MobileNavbar from "@/components/MobileNavbar";

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

const TopStores = () => {
  const tabs = ["Top Products", "Top Posts", "Top Stores"];

  return (
    <>
      <Header />
      <MobileNavbar mobileNavBarHeading={"Top Stores"} />
      <DetailPageWrapper>
        <Tabs tabs={tabs} defaultTab={"Top Stores"}>
          {(activeTab) => (
            <div>
              {activeTab === "Top Products" && (
                <>
                  <ProductContent
                    topProductsData={topProductsData}
                    productTabHeading="Top Products"
                    height={true}
                    border={2}
                    width={true}
                    screen={true}
                  />
                </>
              )}
              {activeTab === "Top Posts" && (
                <>
                  <ProductContent
                    topProductsData={topPostsData}
                    productTabHeading="Top Posts"
                    height={true}
                    width={true}
                    screen={true}
                  />
                </>
              )}
              {activeTab === "Top Stores" && (
                <>
                  <ProductContent
                    topProductsData={topStoresData}
                    productTabHeading="Top Stores"
                    height={true}
                    width={true}
                    screen={true}
                  />
                </>
              )}
            </div>
          )}
        </Tabs>
      </DetailPageWrapper>
    </>
  );
};

export default TopStores;
