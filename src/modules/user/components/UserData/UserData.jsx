import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { UserDataBody, UserDataContent, UserDataHead } from "./UserData.styled";

import UserForm from "../UserForm/UserForm";
import ModalApproveAction from "./../../../../shared/modals/ModalApproveAction/ModalApproveAction";

import { selectIsLoggedIn } from "./../../../../redux/auth/auth-selectors";

const UserData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      setIsModalOpen(false);
    }
  }, [isLoggedIn]);

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/user");
  };

  return (
    <UserDataBody>
      {isModalOpen && <ModalApproveAction closeModal={closeModal} />}
      <UserDataHead>My information:</UserDataHead>
      <UserDataContent>
        <UserForm />

        {/* <UserFormModal /> */}
      </UserDataContent>
    </UserDataBody>
  );
};

export default UserData;
