import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import authSelectors from "../../../../redux/auth/auth-selectors";
import PetsItem from "../PetsItem/PetsItem";

const PetsList = () => {
  const { pets } = useSelector(authSelectors.selectUser);
  return (
    <div>
      {pets &&
        pets.map(({ _id, petsURL, name, birthday, type, comments }) => (
          <PetsItem
            key={_id}
            id={_id}
            image={petsURL}
            name={name}
            birth={birthday}
            type={type}
            comments={comments}
          />
        ))}
    </div>
  );
};
export default PetsList;

PetsList.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.object),
};
