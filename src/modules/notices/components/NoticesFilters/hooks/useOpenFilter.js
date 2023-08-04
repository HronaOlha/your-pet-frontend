import { useEffect, useRef, useState } from "react";

function useOpenFilter() {
  const [isExpandedFilter, setExpandedFilter] = useState(false);
  const [isExpandedAge, setExpandedAge] = useState(false);
  const [isExpandedGender, setExpandedGender] = useState(false);
  const popupRef = useRef(null);

  const handleFilterClick = (e) => {
    const { outerHTML, nodeName, textContent } = e.target;
    const nodeValue = e.target.attributes.class?.nodeValue;

    if (
      nodeName === "DIV" ||
      (nodeName === "P" && textContent === "Filter") ||
      nodeValue === "main-icon" ||
      outerHTML.includes("icons.svg#filters")
    ) {
      setExpandedFilter((prevState) => !prevState);
    }
  };

  const handleAgeClick = (e) => {
    const { tagName, textContent } = e.target;

    if (tagName === "LI" || (tagName === "P" && textContent === "By age")) {
      setExpandedAge((prevState) => !prevState);
    }
  };

  const handleGenderClick = (e) => {
    const { tagName, textContent } = e.target;

    if (tagName === "LI" || (tagName === "P" && textContent === "By gender")) {
      setExpandedGender((prevState) => !prevState);
    }
  };

  useEffect(() => {
    const handlePopUpClick = (e) => {
      if (
        isExpandedFilter &&
        popupRef.current &&
        !popupRef.current.contains(e.target)
      ) {
        setExpandedFilter((prev) => !prev);
        return;
      }
    };

    if (isExpandedFilter) {
      document.addEventListener("mousedown", handlePopUpClick);
    } else {
      document.removeEventListener("mousedown", handlePopUpClick);
    }

    return () => {
      document.removeEventListener("mousedown", handlePopUpClick);
    };
  }, [isExpandedFilter]);

  return {
    isExpandedFilter,
    isExpandedAge,
    isExpandedGender,
    handleFilterClick,
    handleAgeClick,
    handleGenderClick,
    popupRef,
  };
}

export default useOpenFilter;
