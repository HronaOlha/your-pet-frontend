import PropTypes from "prop-types";
import { ButtonForm, ButtonsContaiiner, IconBtn } from "./ChangeStepBtn.styled";
import sprite from "../../../../assets/icons.svg";

const ChangeStepBtn = ({ isFirstStep, isLastStep, next, back }) => {
    return (
        <ButtonsContaiiner>
            <ButtonForm type="button" onClick={back}>
                <IconBtn width={24} height={24}>
                    <use href={sprite + "#arrow-left"}></use>
                </IconBtn>
                <span>{isFirstStep ? "Cancel" : "Back"}</span>
            </ButtonForm>

            {!isLastStep &&
                <ButtonForm type="button" onClick={next}>
                    <span>Next</span>
                    <IconBtn width={24} height={24}>
                        <use href={sprite + "#pawprint"}></use>
                    </IconBtn>
                </ButtonForm>}

            {isLastStep &&
                <ButtonForm type="submit">
                    <IconBtn width={24} height={24}>
                        <use href={sprite + "#pawprint"}></use>
                    </IconBtn>
                    <span>Done</span>
                </ButtonForm>}
        </ButtonsContaiiner>
        
    )
};

export default ChangeStepBtn;

ChangeStepBtn.propTypes = {
    isFirstStep: PropTypes.bool.isRequired,
    isLastStep: PropTypes.bool.isRequired,
    next: PropTypes.func.isRequired,
    back: PropTypes.func.isRequired
};