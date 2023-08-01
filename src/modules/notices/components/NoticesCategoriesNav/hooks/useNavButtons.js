import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isLogin } from "../../../../../redux/notices/notices-selectors";

const initialCategoryBtnUrl = [
  { to: "sell", label: "sell" },
  { to: "lost-found", label: "lost-found" },
  { to: "for-free", label: "in good hands" },
];

const useNavButtons = () => {
  const [login, setLogin] = useState(false);
  const [categoryBtnsUrl, setCategoryBtnsUrl] = useState(initialCategoryBtnUrl);
  const [activeButton, setActiveButton] = useState(() => {
    const fullURL = window.location.href;

    if (fullURL.includes("/notices/")) {
      const hasLostFound = fullURL.includes("lost-found")
        ? "lost-found"
        : false;
      const hasSell = fullURL.includes("sell") ? "sell" : false;
      const hasForFree = fullURL.includes("for-free") ? "for-free" : false;
      const hasFavorite = fullURL.includes("favorite") ? "favorite" : false;
      const hasOwn = fullURL.includes("own") ? "own" : false;

      return hasLostFound || hasSell || hasForFree || hasFavorite || hasOwn;
    } else {
      return "sell";
    }
  });

  const isLoggedIn = useSelector(isLogin);

  useEffect(() => {
    setLogin(isLoggedIn);
  }, [isLoggedIn]);

  if (login && categoryBtnsUrl.length === 3) {
    setCategoryBtnsUrl((prevCategoryBtnUrl) => [
      ...prevCategoryBtnUrl,
      { to: "favorite", label: "favorite ads" },
      { to: "own", label: "my ads" },
    ]);
  } else if (!login && categoryBtnsUrl.length === 5) {
    setCategoryBtnsUrl((prevCategoryBtnUrl) =>
      prevCategoryBtnUrl.filter(
        (item) => item.to !== "favorite" && item.to !== "own"
      )
    );
  }

  return {
    login,
    setLogin,
    categoryBtnsUrl,
    activeButton,
    setActiveButton,
  };
};

export default useNavButtons;
