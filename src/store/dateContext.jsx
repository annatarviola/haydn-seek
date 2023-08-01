import { useState, useEffect, createContext } from "react";

const DateContext = createContext();

export const DateProvider = (props) => {
  const getStartOfWeek = (date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Week starts on Monday
    return new Date(date.setDate(diff));
  };

  const getEndOfWeek = (date) => {
    const startOfWeek = getStartOfWeek(date);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    return endOfWeek;
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

  useEffect(() => {
    setSelectedWeek(getStartOfWeek(new Date()));
  }, []);

  const startOfWeek = selectedWeek.toLocaleString("en-us", {
    month: "short",
    day: "numeric",
  });

  const endOfWeek = getEndOfWeek(selectedWeek, 6).toLocaleString("en-us", {
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
    nextWeek
  }

  return (
    <DateContext.Provider value={contextValue}>
        {props.children}
    </DateContext.Provider>
  )
};

export default DateContext