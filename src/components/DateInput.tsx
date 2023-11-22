import { DateInputField } from "@/styles/dashboard.styles";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

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
        <DateInputField
          selected={yesterdaysSelectedDate}
          placeholderText={placeholder}
          onChange={(date) => setYesterdaysSelectedDate(date)}
          dateFormat="MM/dd"
        />
      )}

      {option === "thisWeek" && (
        <DateInputField
          selected={startWeekDate}
          placeholderText={placeholder}
          onChange={handleDateChange}
          startDate={startWeekDate}
          endDate={endWeekDate}
          selectsRange
          dateFormat="MM/dd"
        />
      )}
      <p>{formatDateWithOrdinal(yesterdaysSelectedDate)}</p>
    </div>
  );
};

export default DateInput;
