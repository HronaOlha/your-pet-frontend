import { NoUserPets, UserPetsBody, UserPetsHead } from "./PetsData.styled";

const PetsData = () => {
  return (
    <UserPetsBody>
      <UserPetsHead>
        <div>My pets:</div>
      </UserPetsHead>
      <NoUserPets>
        You havenot added a pet yet, you have the option to add your furry
        friend!
      </NoUserPets>
    </UserPetsBody>
  );
};
export default PetsData;
