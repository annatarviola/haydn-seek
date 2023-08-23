import { useState, useEffect, createContext } from "react";

const DateContext = createContext();

export const DateProvider = (props) => {
  const getStartOfWeek = (date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    const startOfWeekDate = new Date(date.setDate(diff));
    startOfWeekDate.setHours(0, 0, 0, 0);
    return startOfWeekDate;
  };

  const getEndOfWeek = (date) => {
    const startOfWeek = getStartOfWeek(date);
    const endOfWeekDate = new Date(startOfWeek);
    endOfWeekDate.setDate(startOfWeek.getDate() + 6);
    endOfWeekDate.setHours(23, 59, 59, 999);
    return endOfWeekDate;
  };

  const [selectedWeek, setSelectedWeek] = useState(getStartOfWeek(new Date()));

  const prevWeek = () => {
    setSelectedWeek((prevWeek) => {
      const newWeek = new Date(prevWeek);
      newWeek.setDate(prevWeek.getDate() - 7);
      return newWeek;
    });
  };

  const nextWeek = () => {
    setSelectedWeek((prevWeek) => {
      const newWeek = new Date(prevWeek);
      newWeek.setDate(prevWeek.getDate() + 7);
      return newWeek;
    });
  };

  const resetWeek = () => {
    setSelectedWeek(getStartOfWeek(new Date()));
  }

  useEffect(() => {
    setSelectedWeek(getStartOfWeek(new Date()));
  }, []);

  const startOfWeek = selectedWeek.toLocaleString("en-us", {
    month: "short",
    day: "numeric",
  });

  const endOfWeek = getEndOfWeek(selectedWeek).toLocaleString("en-us", {
    month: "short",
    day: "numeric",
  });

  const year = selectedWeek.toLocaleString("en-us", { year: "numeric" });

  const contextValue = {
    selectedWeek,
    startOfWeek,
    endOfWeek,
    year,
    prevWeek,
    nextWeek,
    resetWeek,
    getEndOfWeek,
  };

  return (
    <DateContext.Provider value={contextValue}>
      {props.children}
    </DateContext.Provider>
  );
};

export default DateContext;
