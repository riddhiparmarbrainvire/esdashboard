import { Button } from "@/styles/button.styles";
import React from "react";

interface MyComponentProps {
  text: string;
}

const SingleButton = (prop: MyComponentProps) => {
  return <Button>{prop.text}</Button>;
};

export default SingleButton;
