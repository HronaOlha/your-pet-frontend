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
} from "./UserForm.styled";

import { updateUser } from "./../../../../redux/auth/auth-operations";
import authSelectors from "./../../../../redux/auth/auth-selectors";
import AddPhoto from "../UserPhoto/UserPhoto";
import { compareObjects } from "../../../../shared/utils/compareObjects";
import ModalLogOut from "../../../../shared/modals/ModalLogout/ModalLogOut";
import { useState } from "react";

const UserForm = ({ isUserUpdate, setIsUserUpdate }) => {
  const [isShowModal, setIsShowModal] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.selectUser);

  const handleSubmit = (values) => {
    const newUser = compareObjects(user, values);
    JSON.stringify(newUser) !== "{}" && dispatch(updateUser(newUser));
    setIsUserUpdate((state) => !state);
  };

  const toggleModal = () => {
    setIsShowModal((state) => !state);
  };

  return (
    <>
      {isShowModal ? (
        <Formik initialValues={user} onSubmit={handleSubmit}>
          <UserFormBody>
            <AddPhoto isUserUpdate={isUserUpdate} />
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
            {isUserUpdate ? (
              <UserFormBtn type="button" onClick={toggleModal}>
                svg + Log Out
              </UserFormBtn>
            ) : (
              <Btn type="submit">Save</Btn>
            )}
          </UserFormBody>
        </Formik>
      ) : (
        <ModalLogOut toggleModal={toggleModal} />
      )}
    </>
  );
};

export default UserForm;
UserForm.propTypes = {
  isUserUpdate: PropTypes.bool.isRequired,
  setIsUserUpdate: PropTypes.func.isRequired,
};
