import { useState } from "react";
import initialFilterValue from "../../NoticesFilters/utils/initialFilterValue";

const useFilter = () => {
  const [isBeforeOneYear, setIsBeforeOneYear] = useState(
    initialFilterValue("0.5")
  );
  const [isUpOneYear, setIsUpOneYear] = useState(initialFilterValue("1"));
  const [isUpTwoYear, setIsUpTwoYear] = useState(initialFilterValue("2"));
  const [isFemale, setIsFemale] = useState(initialFilterValue("female"));
  const [isMale, setIsMale] = useState(initialFilterValue("male"));

  const filterState = {
    isBeforeOneYear,
    isUpOneYear,
    isUpTwoYear,
    isFemale,
    isMale,
  };

  const setFilterState = {
    setIsBeforeOneYear,
    setIsUpOneYear,
    setIsUpTwoYear,
    setIsFemale,
    setIsMale,
  };

  const resetFilter = () => {
    setIsBeforeOneYear(false);
    setIsUpOneYear(false);
    setIsUpTwoYear(false);
    setIsFemale(false);
    setIsMale(false);
  };

  return {
    filterState,
    setFilterState,
    resetFilter,
  };
};

export default useFilter;
