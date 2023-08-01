import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import authSelectors from "../../../../redux/auth/auth-selectors";
import PetsItem from "../PetsItem/PetsItem";

const PetsList = () => {
  const { pets } = useSelector(authSelectors.selectUser);
  return (
    <div>
      {pets &&
        pets.map(({ _id, fileUrl, name, date, type, comments }) => (
          <PetsItem
            key={_id}
            id={_id}
            image={fileUrl}
            name={name}
            birthday={date}
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
