import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deletePet } from "../../../../redux/pets/pets-operation";

import {
  UserPetsBtn,
  UserPetsImg,
  UserPetsInfo,
  UserPetsItem,
  UserPetsItemSpan,
  UserPetsList,
  UserPetsSvg,
} from "./PetsItem.styled";
import sprite from "../../../../assets/icons.svg";
import { formatDate } from "../../../../shared/utils/formatDate";

const PetsItem = ({ id, image, name, birthday, type, comments }) => {
  const dispatch = useDispatch();

  const handelDellPets = (id) => {
    dispatch(deletePet(id));
  };
  return (
    <UserPetsInfo>
      <UserPetsImg src={image} alt="pet_image" />

      <UserPetsList>
        <UserPetsItem>
          Name:{""}
          <UserPetsItemSpan> {name}</UserPetsItemSpan>
        </UserPetsItem>
        <UserPetsItem>
          Date of birth:{" "}
          <UserPetsItemSpan> {formatDate(birthday, ".")}</UserPetsItemSpan>
        </UserPetsItem>
        <UserPetsItem>
          Type:{""}
          <UserPetsItemSpan> {type}</UserPetsItemSpan>
        </UserPetsItem>
        <UserPetsItem>
          Comments:{""}
          <UserPetsItemSpan>{comments}</UserPetsItemSpan>
        </UserPetsItem>
      </UserPetsList>
      <UserPetsBtn
        onClick={() => {
          handelDellPets(id);
        }}
      >
        <UserPetsSvg>
          <use href={sprite + "#icon-delete"} />
        </UserPetsSvg>
      </UserPetsBtn>
    </UserPetsInfo>
  );
};

PetsItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  comments: PropTypes.string,
};

export default PetsItem;
