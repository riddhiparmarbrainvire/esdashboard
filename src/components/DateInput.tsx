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
  yesterdaysSelectedDate,
  setYesterdaysSelectedDate,
  placeholder,
  startWeekDate,
  endWeekDate,
  setStartWeekDate,
  setEndWeekDate,
  option,
  handleDateChange,
  endLastWeekDate,
  startLastWeekDate,
  setStartLastWeekDate,
  setEndLastWeekDate,
  startLastWMonthDate,
  endLastMonthDate,
}: any) => {
  return (
    <div>
      {option === "yesterday" && (
        <Wrapper>
          <DateInputField
            selected={yesterdaysSelectedDate}
            placeholderText={placeholder}
            onChange={(date) => setYesterdaysSelectedDate(date)}
            dateFormat="d MMM"
          />
        </Wrapper>
      )}

      {option === "thisWeek" && (
        <Wrapper>
          <DateInputField
            selected={startWeekDate}
            placeholderText={placeholder}
            onChange={handleDateChange}
            startDate={startWeekDate}
            endDate={endWeekDate}
            selectsRange
            dateFormat="d MMM"
          />
        </Wrapper>
      )}

      {option === "lastWeek" && (
        <Wrapper>
          <DateInputField
            selected={startLastWeekDate}
            placeholderText={placeholder}
            onChange={handleDateChange}
            startDate={startLastWeekDate}
            endDate={endLastWeekDate}
            selectsRange
            dateFormat="d MMM"
          />
        </Wrapper>
      )}

      {option === "lastMonth" && (
        <Wrapper>
          <DateInputField
            selected={startLastWMonthDate}
            placeholderText={placeholder}
            onChange={handleDateChange}
            startDate={startLastWMonthDate}
            endDate={endLastMonthDate}
            selectsRange
            dateFormat="d MMM"
          />
        </Wrapper>
      )}
    </div>
  );
};

export default DateInput;
