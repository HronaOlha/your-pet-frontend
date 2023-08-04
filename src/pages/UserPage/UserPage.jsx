import { useSelector } from "react-redux";

import { UserPageBody } from "./UserPage.styled";

import UserData from "../../modules/user/components/UserData/UserData";
import PetsData from "../../modules/user/components/PetsData/PetsData";
import { ModalCongrats } from "../../modules/user/components/ModalCongrats/ ModalCongrats";

import authSelectors from "../../redux/auth/auth-selectors";
import Loader from "/src/shared/loader/Loader";

const UserPage = () => {
  const { isNewUser } = useSelector(authSelectors.selectUser);
  const isLoading = useSelector(authSelectors.selectIsLoader);
  const isRefreshing = useSelector(authSelectors.selectRefreshing);

  return (
    <UserPageBody>
      {isNewUser && <ModalCongrats />}

      {!isRefreshing && (
        <>
          <UserData />
          <PetsData />
        </>
      )}

      <Loader loading={isLoading} />
    </UserPageBody>
  );
};
export default UserPage;
