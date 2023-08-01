import { AddPetBtn, IconPlus } from "./AddPetButton.styled";
import icons from "../../../../assets/icons.svg";
import { useNavigate } from "react-router-dom";

function AddPetButton() {
  const navigate = useNavigate();

  return (
    <div>
      <AddPetBtn onClick={() => navigate("/add-pet")}>
        <span>Add pet</span>
        <IconPlus width="24" height="24">
          <use href={icons + "#plus"} stroke="#FEF9F9" />
        </IconPlus>
      </AddPetBtn>
    </div>
  );
}

export default AddPetButton;
