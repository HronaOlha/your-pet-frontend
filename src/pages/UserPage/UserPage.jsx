import { UserPageBody } from "./UserPage.styled";

import UserData from "../../modules/user/components/UserData/UserData";
import PetsData from "../../modules/user/components/PetsData/PetsData";
import { ModalCongrats } from "../../modules/user/components/ModalCongrats/ ModalCongrats";

const UserPage = () => {
  return (
    <UserPageBody>
      <UserData />
      <PetsData />
      <ModalCongrats />
    </UserPageBody>
  );
};
export default UserPage;
