import React from "react";
import SingleButton from "./SingleButton";
import { ButtonContainer } from "@/styles/button.styles";

const ButtonFilter = () => {
  return (
    <ButtonContainer>
      <SingleButton text="This week" />
      <SingleButton text="Yesterday" />
      <SingleButton text="Last week" />
      <SingleButton text="Last month" />
    </ButtonContainer>
  );
};

export default ButtonFilter;
