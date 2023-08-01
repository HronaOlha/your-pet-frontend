import { useSelector } from "react-redux";
import {
  noticesIsLoading,
  noticesList,
  noticesTotal,
} from "../../../../redux/notices/notices-selectors";
import NoticesCategoryItem from "../NoticeCategoryItem/NoticeCategoryItem";
import { CardList } from "./NoticesCategoriesList.styled";
import { EmptyError } from "./NoticesCategoriesList.styled";

function NoticesCategoriesList() {
  const list = useSelector(noticesList);
  const isLoading = useSelector(noticesIsLoading);
  const isTotal = useSelector(noticesTotal);

  const isOwnPage = () => {
    const url = window.location.href;
    return url.includes("/notices/own") ? true : false;
  };

  const ownPage = isOwnPage();

  return (
    <CardList>
      {list.length > 0 &&
        list.map((card) => {
          return (
            <NoticesCategoryItem
              key={card._id}
              card={card}
              ownPage={ownPage}
            ></NoticesCategoryItem>
          );
        })}
      {list.length === 0 && !isLoading && isTotal === 0 && (
        <EmptyError>
          Sorry, but we did not find any animals in this category with such
          parameters. Try changing the category or your parameters.
        </EmptyError>
      )}
    </CardList>
  );
}

export default NoticesCategoriesList;
