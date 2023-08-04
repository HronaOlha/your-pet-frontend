import { useEffect } from "react";
import PropTypes from "prop-types";

import {
  FilterBtn,
  FilterItem,
  FilterItemGender,
  FilterList,
  Label,
} from "./NoticesFilters.styled";

import { useSearchParams } from "react-router-dom";
import icons from "../../../../assets/icons.svg";
import useScreenWidth from "./hooks/useScreenWidth";
import useOpenFilter from "./hooks/useOpenFilter";

function NoticesFilters({
  filterState: { isBeforeOneYear, isUpOneYear, isUpTwoYear, isFemale, isMale },
  setFilterState: {
    setIsBeforeOneYear,
    setIsUpOneYear,
    setIsUpTwoYear,
    setIsFemale,
    setIsMale,
  },
}) {
  const {
    isExpandedFilter,
    isExpandedAge,
    isExpandedGender,
    handleFilterClick,
    handleAgeClick,
    handleGenderClick,
    popupRef,
  } = useOpenFilter();
  const [, setSearchParams] = useSearchParams();
  const screenWidth = useScreenWidth();

  useEffect(() => {
    const dateArray = [];
    const sexArray = [];

    if (isBeforeOneYear || isUpOneYear || isUpTwoYear) {
      if (isBeforeOneYear) dateArray.push("0.5");
      if (isUpOneYear) dateArray.push("1");
      if (isUpTwoYear) dateArray.push("2");
    }

    if (isFemale || isMale) {
      if (isMale) sexArray.push("male");
      if (isFemale) sexArray.push("female");
    }

    setSearchParams((prevSearchParams) => {
      if (dateArray.length > 0) {
        prevSearchParams.set("date", dateArray.join(","));
      } else {
        prevSearchParams.delete("date");
      }

      if (sexArray.length > 0) {
        prevSearchParams.set("sex", sexArray.join(","));
      } else {
        prevSearchParams.delete("sex");
      }

      return prevSearchParams;
    });
  }, [
    isBeforeOneYear,
    isFemale,
    isMale,
    isUpOneYear,
    isUpTwoYear,
    setSearchParams,
  ]);

  useEffect(() => {
    const dateArray = [];
    const sexArray = [];

    if (isBeforeOneYear || isUpOneYear || isUpTwoYear) {
      if (isBeforeOneYear) dateArray.push("0.5");
      if (isUpOneYear) dateArray.push("1");
      if (isUpTwoYear) dateArray.push("2");
    }

    if (isFemale || isMale) {
      if (isMale) sexArray.push("male");
      if (isFemale) sexArray.push("female");
    }

    setSearchParams((prevSearchParams) => {
      if (dateArray.length > 0) {
        prevSearchParams.set("date", dateArray.join(","));
      } else {
        prevSearchParams.delete("date");
      }

      if (sexArray.length > 0) {
        prevSearchParams.set("sex", sexArray.join(","));
      } else {
        prevSearchParams.delete("sex");
      }

      return prevSearchParams;
    });
  }, [
    isBeforeOneYear,
    isFemale,
    isMale,
    isUpOneYear,
    isUpTwoYear,
    setSearchParams,
  ]);

  return (
    <FilterBtn
      ref={popupRef}
      isExpandedFilter={isExpandedFilter}
      onClick={handleFilterClick}
    >
      {!isExpandedFilter ? (
        <>
          {screenWidth >= 768 && <p>Filter</p>}
          <svg className="main-icon" width="24" height="24">
            <use href={icons + "#filters"} />
          </svg>
        </>
      ) : (
        <>
          <p
            style={{
              width: "100%",
              cursor: "pointer",
            }}
          >
            Filter
          </p>
          <FilterList>
            <FilterItem
              key={1}
              isExpandedAge={isExpandedAge}
              onClick={handleAgeClick}
            >
              {isExpandedAge ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                  }}
                >
                  <p
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    By age
                  </p>
                  <div>
                    <Label>
                      <input
                        type="checkbox"
                        checked={isBeforeOneYear}
                        onChange={() => setIsBeforeOneYear((prev) => !prev)}
                      />
                      {isBeforeOneYear ? (
                        <svg width="24" height="24">
                          <use href={icons + "#check-round"} />
                        </svg>
                      ) : (
                        <svg width="24" height="24">
                          <use href={icons + "#round"} />
                        </svg>
                      )}
                      <span>3-12 m</span>
                    </Label>
                    <Label>
                      <input
                        type="checkbox"
                        checked={isUpOneYear}
                        onChange={() => setIsUpOneYear((prev) => !prev)}
                      />
                      {isUpOneYear ? (
                        <svg width="24" height="24">
                          <use href={icons + "#check-round"} />
                        </svg>
                      ) : (
                        <svg width="24" height="24">
                          <use href={icons + "#round"} />
                        </svg>
                      )}
                      <span>up to 1 year</span>
                    </Label>
                    <Label>
                      <input
                        type="checkbox"
                        checked={isUpTwoYear}
                        onChange={() => setIsUpTwoYear((prev) => !prev)}
                      />
                      {isUpTwoYear ? (
                        <svg width="24" height="24">
                          <use href={icons + "#check-round"} />
                        </svg>
                      ) : (
                        <svg width="24" height="24">
                          <use href={icons + "#round"} />
                        </svg>
                      )}
                      <span>up to 2 year</span>
                    </Label>
                  </div>
                </div>
              ) : (
                <>
                  <svg width="24" height="24" style={{ pointerEvents: "none" }}>
                    <use href={icons + "#chevron-down"} />
                  </svg>
                  <p>By age</p>
                </>
              )}
            </FilterItem>
            <FilterItemGender
              key={2}
              isExpandedGender={isExpandedGender}
              onClick={handleGenderClick}
            >
              {isExpandedGender ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                  }}
                >
                  <p
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    By gender
                  </p>
                  <div>
                    <Label>
                      <input
                        type="checkbox"
                        checked={isFemale}
                        onChange={() => setIsFemale((prev) => !prev)}
                      />
                      {isFemale ? (
                        <svg width="24" height="24">
                          <use href={icons + "#check-round"} />
                        </svg>
                      ) : (
                        <svg width="24" height="24">
                          <use href={icons + "#round"} />
                        </svg>
                      )}
                      <span>female</span>
                    </Label>
                    <Label>
                      <input
                        type="checkbox"
                        checked={isMale}
                        onChange={() => setIsMale((prev) => !prev)}
                      />
                      {isMale ? (
                        <svg width="24" height="24">
                          <use href={icons + "#check-round"} />
                        </svg>
                      ) : (
                        <svg width="24" height="24">
                          <use href={icons + "#round"} />
                        </svg>
                      )}
                      <span>male</span>
                    </Label>
                  </div>
                </div>
              ) : (
                <>
                  <svg width="24" height="24" style={{ pointerEvents: "none" }}>
                    <use href={icons + "#chevron-down"} />
                  </svg>
                  <p>By gender</p>
                </>
              )}
            </FilterItemGender>
          </FilterList>
        </>
      )}
    </FilterBtn>
  );
}

export default NoticesFilters;

NoticesFilters.propTypes = {
  filterState: PropTypes.shape({
    isBeforeOneYear: PropTypes.bool.isRequired,
    isUpOneYear: PropTypes.bool.isRequired,
    isUpTwoYear: PropTypes.bool.isRequired,
    isFemale: PropTypes.bool.isRequired,
    isMale: PropTypes.bool.isRequired,
  }).isRequired,
  setFilterState: PropTypes.shape({
    setIsBeforeOneYear: PropTypes.func.isRequired,
    setIsUpOneYear: PropTypes.func.isRequired,
    setIsUpTwoYear: PropTypes.func.isRequired,
    setIsFemale: PropTypes.func.isRequired,
    setIsMale: PropTypes.func.isRequired,
  }).isRequired,
};
