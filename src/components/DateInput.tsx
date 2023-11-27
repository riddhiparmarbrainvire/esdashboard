import { DateInputField } from "@/styles/dashboard.styles";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const Wrapper = styled.div`
  .react-datepicker {
    box-shadow: 3px 2px 11px rgb(0 0 0 / 30%);
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range {
    background-color: #34554a;
    color: #fff;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    background-color: #34554a;
    color: #fff;
    border-radius: 20px;
  }

  .react-datepicker__week--selected {
    background-color: #34554a;
    border-radius: 20px;
    color: #fff;
  }

  .react-datepicker__week--keyboard-selected {
    background-color: #34554a;
    border-radius: 20px;
    color: #fff;
  }
`;

const DateInput = ({
  placeholder,
  selectedDateRange,
}: {
  placeholder: string;
  selectedDateRange: { start: Date | null; end: Date | null };
}) => {
  return (
    <div>
      <DateInputField
        selected={selectedDateRange.start}
        placeholderText={placeholder}
        onChange={(date) => console.log(date)}
        startDate={selectedDateRange.start}
        endDate={selectedDateRange.end}
        selectsRange
        dateFormat="d MMM"
      />
    </div>
  );
};

export default DateInput;
