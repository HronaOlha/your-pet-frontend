import { Field } from "formik";
import { options } from "../../helpers/helpers";
import PropTypes from "prop-types";
import { RadioContainer, RadioInput, RadioLabel } from "./FirstStep.styled";


const FirstStep = ({handleCategories, currentRadioChecked}) => {
    return (
        <RadioContainer>
            {options.map(({ value, label }) => {
                return (
                        <RadioLabel key={value} checked={currentRadioChecked === value}>
                            {label}
                            <RadioInput type="radio" name="categories" value={value} onChange={handleCategories} />
                        </RadioLabel>
                )
            })}
        </RadioContainer>
    )
};

export default FirstStep;


FirstStep.propTypes = {
    handleCategories: PropTypes.func.isRequired,
    currentRadioChecked: PropTypes.string.isRequired
}