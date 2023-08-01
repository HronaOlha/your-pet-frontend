import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  AddToFavorite,
  Card,
  CardTextInfoWrap,
  Category,
  City,
  Gender,
  HeartIconWrap,
  Image,
  ImageWrap,
  LearnMoreBtn,
  Title,
  Years,
  CitySvg,
  YearsSvg,
  GenderSvg,
  DeleteFromOwn,
  DeleteIcon,
} from "./NoticeCategoryItem.styled";

import Modal from "../../../../shared/modals/modalPort/Modal";
import ModalNotice from "../ModalNotice";
import { useDispatch, useSelector } from "react-redux";
import {
  isLogin,
  noticesFavoriteList,
  noticesIsLoadingFavorite,
} from "../../../../redux/notices/notices-selectors";
import {
  deleteCardById,
  fetchAddFavorite,
  fetchCardById,
  fetchDeleteFavorite,
  resetCardById,
} from "../../../../redux/notices/notices-operations";
import icons from "../../../../assets/icons.svg";
import { toast } from "react-hot-toast";
import makeAge from "./utils/makeAge";
import sliceLocation from "./utils/sliceLocation";
import ModalApproveAction from "../../../../shared/modals/ModalApproveAction/ModalApproveAction";

function NoticesCategoryItem({
  card: { _id, category, date, fileUrl, location, name, sex, title },
  ownPage,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeleteOpen, setModalDeleteOpen] = useState(false);

  const favList = useSelector(noticesFavoriteList);
  const isLoadingFavorite = useSelector(noticesIsLoadingFavorite);
  const isLoggedIn = useSelector(isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoadingFavorite === false) {
      setIsDisabledBtn(false);
    }
  }, [isLoadingFavorite]);

  useEffect(() => {
    if (favList && favList.length > 0) {
      setIsFavorite(favList.some((item) => item === _id) ? true : false);
    } else {
      setIsFavorite(false);
    }
  }, [favList, _id]);

  const handleClickHeart = () => {
    if (!isLoggedIn) {
      toast.error("You need to log in to use this functionality!", {
        duration: 4000,
        position: "top-right",
      });
      return;
    } else {
      if (isFavorite) {
        setIsDisabledBtn(true);
        setIsFavorite((prev) => !prev);

        dispatch(fetchDeleteFavorite(`/notices/favorites/delete/${_id}`));
      } else {
        setIsDisabledBtn(true);
        setIsFavorite((prev) => !prev);

        dispatch(fetchAddFavorite(`/notices/favorites/add/${_id}`));
      }
    }
  };

  const toggleModalCardById = () => {
    setIsModalOpen((prev) => !prev);

    if (isModalOpen) {
      dispatch(resetCardById());
    }
  };

  const openModalAndFetchCard = () => {
    dispatch(fetchCardById(`/notices/notice/${_id}`));

    toggleModalCardById();
  };

  const toggleModalDelete = () => {
    setModalDeleteOpen((prev) => !prev);
  };

  const successDelete = () => {
    dispatch(deleteCardById(`/notices/notice/delete/${_id}`));
  };

  return (
    <Card>
      <ImageWrap>
        <Image src={`${fileUrl}`} alt={`${name}`} />
        <AddToFavorite
          disabled={isDisabledBtn}
          onClick={() => handleClickHeart()}
        >
          <div>
            <HeartIconWrap>
              <use
                href={icons + "#heart"}
                stroke="#54ADFF"
                fill={isFavorite ? "#54ADFF" : "none"}
              />
            </HeartIconWrap>
          </div>
        </AddToFavorite>
        {ownPage && (
          <DeleteFromOwn onClick={() => toggleModalDelete()}>
            <DeleteIcon>
              <use href={icons + "#trash"} stroke="#54ADFF" />
            </DeleteIcon>
          </DeleteFromOwn>
        )}
        <Category>{category}</Category>
        <City>
          <CitySvg>
            <use href={icons + "#location"} stroke="#54ADFF" />
          </CitySvg>
          <span>{sliceLocation(location)}</span>
        </City>
        <Years>
          <YearsSvg>
            <use href={icons + "#clock"} stroke="#54ADFF" />
          </YearsSvg>
          <span>{makeAge(date)}</span>
        </Years>
        <Gender>
          <GenderSvg>
            {sex === "male" ? (
              <use href={icons + "#male"} stroke="#54ADFF" />
            ) : (
              <use href={icons + "#female"} stroke="#54ADFF" />
            )}
          </GenderSvg>
          <span>{sex}</span>
        </Gender>
      </ImageWrap>
      <CardTextInfoWrap>
        <Title>{title}</Title>
        <LearnMoreBtn onClick={() => openModalAndFetchCard()}>
          Learn more
        </LearnMoreBtn>
      </CardTextInfoWrap>
      {isModalOpen && (
        <Modal toggleModal={toggleModalCardById}>
          <ModalNotice
            isDisabledBtn={isDisabledBtn}
            isFavorite={isFavorite}
            handleClickHeart={handleClickHeart}
            toggleModal={toggleModalCardById}
          />
        </Modal>
      )}
      {isModalDeleteOpen && (
        <ModalApproveAction
          onSuccess={successDelete}
          toggleModal={toggleModalDelete}
        />
      )}
    </Card>
  );
}

export default NoticesCategoryItem;

NoticesCategoryItem.propTypes = {
  card: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    fileUrl: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  ownPage: PropTypes.bool.isRequired,
};
