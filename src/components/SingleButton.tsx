import { Button } from "@/styles/dashboard.styles";
import React from "react";

interface MyComponentProps {
  text: string;
  onClick?: any;
}

const SingleButton = (prop: MyComponentProps) => {
  return <Button onClick={prop.onClick}>{prop.text}</Button>;
};

export default SingleButton;
