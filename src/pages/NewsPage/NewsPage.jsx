import SearchBar from "../../modules/news/newsSearchBar";
import Pagination from "../../modules/news/newsPagination";
import NewsList from "../../modules/news/newsList";

import { Wrap, Title } from "./NewsPage.styled";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectNews,
  selectNewsFilter,
  selectNewsIsLoading,
  selectTotalArticles,
} from "../../redux/news/news-selectors";
import { getNews } from "../../redux/news/news-operation";
import Loader from "/src/shared/loader/Loader";

export function NewsPage() {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const request = useSelector(selectNewsFilter);
  const totalArticles = useSelector(selectTotalArticles);
  const [currentPage, setCurrentPage] = useState(1);
  const isLoading = useSelector(selectNewsIsLoading);
  useEffect(() => {
    dispatch(getNews({ filter: request, page: currentPage }));
  }, [currentPage, dispatch, request]);

  useEffect(() => {
    if (totalArticles > 0 && news.length === 0 && currentPage !== 1) {
      setCurrentPage((prev) => (prev -= 1));
    }
  }, [currentPage, news.length, totalArticles]);

  const handleInitialPage = () => {
    dispatch(getNews({ filter: "", page: 1 }));
    setCurrentPage(1);
  };

  const isPagination = news.length > 0 ? true : false;

  return (
    <Wrap>
      <Title onClick={handleInitialPage}>News</Title>
      <SearchBar setCurrentPage={setCurrentPage} />
      <NewsList />
      {isPagination && (
        <Pagination
          totalItems={totalArticles}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      <Loader loading={isLoading} />
    </Wrap>
  );
}

export default NewsPage;
