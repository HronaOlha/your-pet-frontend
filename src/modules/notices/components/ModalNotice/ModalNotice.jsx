import PropTypes from "prop-types";
import {
  ModalNoticeBox,
  Image,
  ModalNoticeWrap,
  CloseBtn,
  Title,
  ModalNoticeInfoList,
  Comments,
  ModelItemInfo,
  Key,
  Value,
  AddressLink,
  AddBtn,
  CommentsBold,
  Category,
  ContactLink,
} from "./ModalNotice.styled";
import { useSelector } from "react-redux";
import { noticesCardById } from "../../../../redux/notices/notices-selectors";
import icons from "../../../../assets/icons.svg";

function formatDate(inputDate) {
  const dateObj = new Date(inputDate);
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const year = dateObj.getFullYear();

  return `${day}.${month}.${year}`;
}

const ModalNotice = ({
  handleClickHeart,
  toggleModal,
  isFavorite,
  isDisabledBtn,
}) => {
  const {
    name,
    category,
    date,
    fileUrl,
    comments,
    title,
    sex,
    location,
    type,
    email = "user@qwe.qwe",
    phone = "+380971234567",
  } = useSelector(noticesCardById);

  return (
    <ModalNoticeBox>
      <ModalNoticeWrap>
        <Image src={fileUrl} alt={name} />
        <Category>{category}</Category>
        <div>
          <Title>{title}</Title>
          <ModalNoticeInfoList>
            <ModelItemInfo>
              <Key>Name:</Key>
              <Value>{name}</Value>
            </ModelItemInfo>
            <ModelItemInfo>
              <Key>Birthday:</Key>
              <Value>{formatDate(date)}</Value>
            </ModelItemInfo>
            <ModelItemInfo>
              <Key>Type:</Key>
              <Value>{type}</Value>
            </ModelItemInfo>
            <ModelItemInfo>
              <Key>Place:</Key>
              <Value>{location}</Value>
            </ModelItemInfo>
            <ModelItemInfo>
              <Key>The sex:</Key>
              <Value>{sex}</Value>
            </ModelItemInfo>
            <ModelItemInfo>
              <Key>Email:</Key>
              <AddressLink href={email}>{email}</AddressLink>
            </ModelItemInfo>
            <ModelItemInfo>
              <Key>Phone:</Key>
              <AddressLink href={phone}>{phone}</AddressLink>
            </ModelItemInfo>
          </ModalNoticeInfoList>
        </div>
      </ModalNoticeWrap>
      <Comments>
        <CommentsBold>Comments: </CommentsBold> {comments}
      </Comments>
      <CloseBtn type="button" onClick={toggleModal}>
        <svg width="24" height="24">
          <use href={icons + "#cross"} />
        </svg>
      </CloseBtn>
      <div>
        <ContactLink href="tel:+380971234567">Contact</ContactLink>
        <AddBtn disabled={isDisabledBtn} onClick={() => handleClickHeart()}>
          Add to
          <svg width="24" height="24">
            <use
              href={icons + "#heart"}
              stroke="#FEF9F9"
              fill={isFavorite ? "white" : "none"}
            />
          </svg>
        </AddBtn>
      </div>
    </ModalNoticeBox>
  );
};

export default ModalNotice;

ModalNotice.propTypes = {
  handleClickHeart: PropTypes.func.isRequired,
  isDisabledBtn: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};
