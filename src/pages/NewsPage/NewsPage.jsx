import {
  Wrap,
  Title,
  NewsList,
  NewsItem,
  Content,
  NewsImg,
  ShadowBox,
  DecorationLine,
  AdditionalInfo,
  ReadMoreLink,
  NewsDate,
  ArticleTitle,
} from "./NewsPage.styled";
import SearchBar from "../../shared/components/SharedComponents/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import {
  selectNews,
  selectNewsFilter,
  selectPage,
  selectTotalArticles,
} from "../../redux/news/news-selectors";
import { useEffect } from "react";
import { getNews } from "../../redux/news/news-operation";
import Pagination from "@mui/material/Pagination";
import { changePage } from "../../redux/news/news-slice";

export const NewsPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const news = useSelector(selectNews);
  const request = useSelector(selectNewsFilter);
  const totalArticles = useSelector(selectTotalArticles);

  useEffect(() => {
    dispatch(getNews({ page: 1 }));
  }, [dispatch]);

  const handleChange = (_, pageNumber) => {
    dispatch(changePage(pageNumber));
    dispatch(getNews({ filter: request, page: pageNumber }));
  };

  const pageCount = Math.ceil(totalArticles / 6);

  return (
    <Wrap>
      <Title>News</Title>
      <SearchBar />
      <NewsList>
        {news.map(({ _id, imgUrl, title, text, date, url }) => (
          <NewsItem key={_id}>
            <DecorationLine></DecorationLine>
            <ShadowBox>
              <NewsImg src={imgUrl} alt="article's image" />
              <Content>
                <div>
                  <ArticleTitle>{title}</ArticleTitle>
                  <p>{text}</p>
                </div>
                <AdditionalInfo>
                  <NewsDate>{date}</NewsDate>
                  <ReadMoreLink href={url} target="_blank">
                    Read More
                  </ReadMoreLink>
                </AdditionalInfo>
              </Content>
            </ShadowBox>
          </NewsItem>
        ))}
      </NewsList>
      <div>
        {/* <Pagination
          count={pageCount}
          onChange={handleChange}
          page={page}
          variant="outlined"
          color="primary"
        /> */}
        <Pagination
          count={pageCount}
          onChange={handleChange}
          page={page}
          component="div"
          variant="outlined"
          sx={{
            ".MuiPaginationItem-root": {
              height: "35px",
              width: "35px",
              fontSize: "16px",
              borderRadius: "100%",
            },
            ".MuiPaginationItem-page": {
              // backgroundColor: "#54ADFF",
              border: "1px solid #54ADFF",
              "&:hover": {
                backgroundColor: "#54ADFF",
                color: "#fff",
              },
            },
            ".Mui-selected": {
              backgroundColor: "#54ADFF",
              color: "#fff",
            },
            ".MuiPaginationItem-rounded": {
              border: "1px solid #54ADFF",
              height: "35px",
              "&:hover": {
                backgroundColor: "#54ADFF",
                color: "#fff",
              },
            },
          }}
        />
      </div>
    </Wrap>
  );
};

export default NewsPage;
