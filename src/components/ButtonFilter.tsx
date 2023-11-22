import React, { useState } from "react";
import SingleButton from "./SingleButton";
import DateInput from "./DateInput";
import { ButtonContainer } from "@/styles/dashboard.styles";

const ButtonFilter = () => {
  const [yesterdaysSelectedDate, setYesterdaysSelectedDate] =
    useState<Date | null>(null);
  const [startWeekDate, setStartWeekDate] = useState<Date | null>(null);
  const [endWeekDate, setEndWeekDate] = useState<Date | null>(null);
  const [option, setOption] = useState<string | null>(null);

  const handleButtonClick = (option: string) => {
    const currentDate = new Date();

    switch (option) {
      case "yesterday":
        var yesterday = new Date(Date.now() - 864e5);
        setYesterdaysSelectedDate(yesterday);
        setOption(option);
        break;
      case "thisWeek":
        // Calculate the start of the current week (Sunday)
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

        // Calculate the end of the current week (Saturday)
        const endOfWeek = new Date(currentDate);
        endOfWeek.setDate(currentDate.getDate() + (6 - currentDate.getDay()));

        // Update startWeekDate and endWeekDate state variables
        setStartWeekDate(startOfWeek);
        setEndWeekDate(endOfWeek);
        setOption(option);
        break;
      case "lastWeek":
        // Logic to calculate start and end dates of the last week
        // Update startWeekDate and endWeekDate state variables
        break;
      case "lastMonth":
        // Logic to calculate start and end dates of the last month
        // Update startWeekDate and endWeekDate state variables
        break;
      default:
        break;
    }
  };

  const handleDateChange = (dates: [Date | null, Date | null] | null) => {
    if (dates) {
      setStartWeekDate(dates[0]);
      setEndWeekDate(dates[1]);
    }
  };

  return (
    <ButtonContainer>
      <SingleButton
        text="This week"
        onClick={() => handleButtonClick("thisWeek")}
      />
      <SingleButton
        text="Yesterday"
        onClick={() => handleButtonClick("yesterday")}
      />
      <SingleButton text="Last week" />
      <SingleButton text="Last month" />
      <DateInput
        startWeekDate={startWeekDate}
        endWeekDate={endWeekDate}
        yesterdaysSelectedDate={yesterdaysSelectedDate}
        setYesterdaysSelectedDate={setYesterdaysSelectedDate}
        setStartWeekDate={setStartWeekDate}
        setEndWeekDate={setEndWeekDate}
        placeholder="Select Date"
        option={option}
        handleDateChange={handleDateChange}
      />
    </ButtonContainer>
  );
};

export default ButtonFilter;
