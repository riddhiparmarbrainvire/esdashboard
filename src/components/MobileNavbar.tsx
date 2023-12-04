import React from "react";
import styled from "styled-components";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/router";
import Link from "next/link";

export const MobileNav = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  justify-content: space-between;

  h4 {
    font-size: 19px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
  }

  @media (min-width: 576px) {
    display: none;
  }
`;

const MobileNavbar = (props: any) => {
  const router = useRouter();

  console.log(router.route, "r");

  return (
    <MobileNav>
      <Link href={"/"}>
        <MdOutlineArrowBackIosNew style={{ fontSize: "20px" }} />
      </Link>
      {props.mobileNavBarHeading === "Top Products" ? (
        <h4>Top Products</h4>
      ) : props.mobileNavBarHeading === "Top Posts" ? (
        <h4>Top Posts</h4>
      ) : props.mobileNavBarHeading === "Top Stores" ? (
        <h4>Top Stores</h4>
      ) : (
        <h4>My Dashboard</h4>
      )}

      <Link href={"/"}>
        <RxCross2 style={{ fontSize: "20px" }} />
      </Link>
    </MobileNav>
  );
};

export default MobileNavbar;
