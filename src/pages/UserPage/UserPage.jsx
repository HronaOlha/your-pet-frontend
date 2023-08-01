import { useSelector } from "react-redux";
import { UserPageBody } from "./UserPage.styled";

import UserData from "../../modules/user/components/UserData/UserData";
import PetsData from "../../modules/user/components/PetsData/PetsData";
import { ModalCongrats } from "../../modules/user/components/ModalCongrats/ ModalCongrats";

import authSelectors from "../../redux/auth/auth-selectors";

const UserPage = () => {
  const isNewUser = useSelector(authSelectors.selectUser);

  return (
    <UserPageBody>
      {!isNewUser && <ModalCongrats />}
      <UserData />
      <PetsData />
    </UserPageBody>
  );
};
export default UserPage;
