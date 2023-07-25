import { UserDataBody, UserDataContent, UserDataHead } from "./UserData.styled";

import UserForm from "../UserForm/UserForm";

const UserData = () => {
  return (
    <UserDataBody>
      <UserDataHead>My information:</UserDataHead>
      <UserDataContent>
        <UserForm />

        {/* <UserFormModal /> */}
      </UserDataContent>
    </UserDataBody>
  );
};

export default UserData;
