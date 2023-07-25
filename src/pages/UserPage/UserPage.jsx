import { UserPageBody } from "./UserPage.styled";

import UserData from "./../../modules/user/components/UserData/UserData";
import PetsData from "./../../modules/user/components/PetsData/PetsData";

const UserPage = () => {
  return (
    <UserPageBody>
      <UserData />
      <PetsData />
    </UserPageBody>
  );
};
export default UserPage;
