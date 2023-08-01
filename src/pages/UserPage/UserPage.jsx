import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { UserPageBody } from "./UserPage.styled";

import UserData from "../../modules/user/components/UserData/UserData";
import PetsData from "../../modules/user/components/PetsData/PetsData";
import { ModalCongrats } from "../../modules/user/components/ModalCongrats/ ModalCongrats";

import authSelectors from "../../redux/auth/auth-selectors";

const UserPage = () => {
  const [modal, setModal] = useState(false);
  const { isNewUser } = useSelector(authSelectors.selectUser);

  useEffect(() => {
    if (isNewUser === "true") {
      setModal(true);
    }
  }, [isNewUser]);

  return (
    <UserPageBody>
      {modal && <ModalCongrats />}
      <UserData />
      <PetsData />
    </UserPageBody>
  );
};
export default UserPage;
