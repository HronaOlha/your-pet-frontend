
import { fields } from "../../helpers/helpers";
import PropTypes from "prop-types";
import { FieldContainer, FieldLabel, InputField, StageContainer } from "./SecondStep.styled";


const SecondStep = ({ currentRadioChecked, formik }) => {
    return (
        <StageContainer>
            {currentRadioChecked !== "your-pet" &&
                <FieldContainer>
                    <FieldLabel htmlFor="add">Title of add</FieldLabel>
                    <InputField type="text" name="add" id="add" autoComplete="off" placeholder="Title of add" value={formik.values.add} onChange={formik.handleChange} />
                </FieldContainer>
            }
            {fields.map(({ name, label, placeholder, type }) => {
                return (
                    <FieldContainer key={name}>
                        <FieldLabel htmlFor={name}>{label}</FieldLabel>
                        <InputField type={type} name={name} id={name} autoComplete="off" placeholder={placeholder} value={formik.values[name]} onChange={formik.handleChange} />
                    </FieldContainer>
                    
                )
            })}
        </StageContainer>
    )
};

export default SecondStep;

SecondStep.propTypes = {
    currentRadioChecked: PropTypes.string.isRequired,
    formik: PropTypes.object.isRequired
};
