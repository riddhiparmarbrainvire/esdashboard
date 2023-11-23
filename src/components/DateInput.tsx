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
}: any) => {
  const formatDateWithOrdinal = (date: Date | null): string => {
    if (!date) {
      return "";
    }

    const day = date.getDate();
    // console.log(day, "day"); 21
    const month = date.toLocaleString("default", { month: "short" });
    // console.log(month, "month"); Nov
    const suffix = (day: number): string => {
      if (day >= 11 && day <= 13) {
        return "th";
      }
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${suffix(day)} ${month}`;
  };

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
      <p>{formatDateWithOrdinal(yesterdaysSelectedDate)}</p>
    </div>
  );
};

export default DateInput;
