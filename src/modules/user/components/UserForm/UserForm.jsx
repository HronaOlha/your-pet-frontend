import { Formik } from "formik";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import {
  UserFormBody,
  UserFormInput,
  UserFormItem,
  UserFormLabel,
  UserFormBtn,
  Btn,
  UserFormList,
  UserFormInfo,
  BtnText,
  UserFormSvg,
} from "./UserForm.styled";

import { updateUser } from "./../../../../redux/auth/auth-operations";
import authSelectors from "./../../../../redux/auth/auth-selectors";
import AddPhoto from "../UserPhoto/UserPhoto";

import ModalLogOut from "../../../../shared/modals/ModalLogout/ModalLogOut";
import { useState } from "react";

import sprite from "../../../../assets/icons.svg";

const UserForm = ({ isUserUpdate, setIsUserUpdate }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.selectUser);
  const initialValues = {
    name: user.name,
    birthday: user.birthday,
    email: user.email,
    city: user.city,
    phone: user.phone,
  };

  const handleSubmit = (values) => {
    dispatch(updateUser(values));
    setIsUserUpdate((state) => !state);
  };

  const toggleModal = () => {
    setIsShowModal((state) => !state);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <UserFormBody>
          <AddPhoto isUserUpdate={isUserUpdate} />
          <UserFormInfo>
            <UserFormList>
              <UserFormItem>
                <UserFormLabel htmlFor={`name`}>Name:</UserFormLabel>
                <UserFormInput
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder={"Anna"}
                  disabled={isUserUpdate}
                />
              </UserFormItem>
              <UserFormItem>
                <UserFormLabel htmlFor={`email`}>Email:</UserFormLabel>
                <UserFormInput
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder={"anna00@gmail.com|"}
                  disabled={isUserUpdate}
                />
              </UserFormItem>
              <UserFormItem>
                <UserFormLabel htmlFor={`birthDate`}>Birthday:</UserFormLabel>
                <UserFormInput
                  type="text"
                  name="birthday"
                  id="birthday"
                  autoComplete="off"
                  placeholder={"00.00.0000"}
                  disabled={isUserUpdate}
                />
              </UserFormItem>
              <UserFormItem>
                <UserFormLabel htmlFor={`phone`}>Phone:</UserFormLabel>
                <UserFormInput
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  placeholder={"+38000000000"}
                  disabled={isUserUpdate}
                />
              </UserFormItem>
              <UserFormItem>
                <UserFormLabel htmlFor={`city`}>City:</UserFormLabel>
                <UserFormInput
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="off"
                  placeholder={"Kiev"}
                  disabled={isUserUpdate}
                />
              </UserFormItem>
            </UserFormList>
            {isUserUpdate ? (
              <UserFormBtn type="button" onClick={toggleModal}>
                <UserFormSvg>
                  <use href={sprite + "#logout"} />
                </UserFormSvg>
                <BtnText>Log Out</BtnText>
              </UserFormBtn>
            ) : (
              <UserFormBtn>
                <Btn type="submit">Save</Btn>
              </UserFormBtn>
            )}
          </UserFormInfo>
        </UserFormBody>
      </Formik>
      {isShowModal && <ModalLogOut toggleModal={toggleModal} />}
    </>
  );
};

export default UserForm;
UserForm.propTypes = {
  isUserUpdate: PropTypes.bool.isRequired,
  setIsUserUpdate: PropTypes.func.isRequired,
};
