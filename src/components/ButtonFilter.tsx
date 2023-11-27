import React, { useState } from "react";
import SingleButton from "./SingleButton";
import DateInput from "./DateInput";
import { ButtonContainer } from "@/styles/dashboard.styles";

const ButtonFilter = () => {
  // const [yesterdaysSelectedDate, setYesterdaysSelectedDate] =
  //   useState<Date | null>(null);
  // const [startWeekDate, setStartWeekDate] = useState<Date | null>(null);
  // const [endWeekDate, setEndWeekDate] = useState<Date | null>(null);
  // const [startLastWeekDate, setStartLastWeekDate] = useState<Date | null>(null);
  // const [endLastWeekDate, setEndLastWeekDate] = useState<Date | null>(null);
  // const [startLastWMonthDate, setStartLastMonthDate] = useState<Date | null>(
  //   null
  // );
  // const [endLastMonthDate, setEndLastMonthDate] = useState<Date | null>(null);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedDateRange, setSelectedDateRange] = useState<{
    start: Date | null;
    end: Date | null;
  }>({ start: null, end: null });

  const [option, setOption] = useState<string | null>(null);

  const handleButtonClick = (option: string) => {
    const currentDate = new Date();

    switch (option) {
      case "yesterday":
        var yesterday = new Date(Date.now() - 864e5);

        setSelectedDateRange({
          start: yesterday,
          end: yesterday,
        });
        setOption(option);
        break;
      case "thisWeek":
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

        const endOfWeek = new Date(currentDate);
        endOfWeek.setDate(currentDate.getDate() + (6 - currentDate.getDay()));

        setSelectedDateRange({ start: startOfWeek, end: endOfWeek });
        setOption(option);
        break;
      case "lastWeek":
        const startOfLastWeek = new Date(currentDate);
        startOfLastWeek.setDate(
          currentDate.getDate() - currentDate.getDay() - 7
        );

        const endOfLastWeek = new Date(currentDate);
        endOfLastWeek.setDate(currentDate.getDate() - currentDate.getDay() - 1);

        setSelectedDateRange({
          start: startOfLastWeek,
          end: endOfLastWeek,
        });
        setOption(option);
        break;
      case "lastMonth":
        const firstDayOfLastMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          1
        );

        const lastDayOfLastMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0
        );

        setSelectedDateRange({
          start: firstDayOfLastMonth,
          end: lastDayOfLastMonth,
        });
        setOption(option);
        break;
      default:
        break;
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
      <SingleButton
        text="Last week"
        onClick={() => handleButtonClick("lastWeek")}
      />
      <SingleButton
        text="Last month"
        onClick={() => handleButtonClick("lastMonth")}
      />
      <DateInput
        selectedDateRange={selectedDateRange}
        placeholder="Select Date"
      />
    </ButtonContainer>
  );
};

export default ButtonFilter;
