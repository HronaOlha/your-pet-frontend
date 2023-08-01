
import PropTypes from "prop-types";
import {
  FieldContainer,
  FieldLabel,
  InputField,
  StageContainer,
} from "./SecondStep.styled";
import { ErrorMessage } from "formik";
import { useState } from "react";

const SecondStep = ({ currentRadioChecked, formik }) => {
  const [inputType, setInputType] = useState('text');

    const handleFocus = () => {
        if (inputType === "text") {
            setInputType('date');
        } else {
            setInputType('text')
        }
    };

  
  return (
    <StageContainer>
      {currentRadioChecked !== "your-pet" && (
        <FieldContainer>
          <FieldLabel htmlFor="title">Title of add</FieldLabel>
          <InputField
            type="text"
            name="title"
            id="title"
            autoComplete="off"
            placeholder="Title of add"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
             <ErrorMessage name={"title"} />
        </FieldContainer>
      )}
      
      
      <FieldContainer>
                <FieldLabel htmlFor='name'>Pet’s name</FieldLabel>
                <InputField type='text' name='name' id='name' autoComplete="off" placeholder='Type name pet' value={formik.values.name} onChange={formik.handleChange} />
                <ErrorMessage name={"name"} />
            </FieldContainer>

            <FieldContainer>
                <FieldLabel htmlFor='birthday'>Birthday</FieldLabel>
                <InputField type={inputType} name='birthday' id='birthday' autoComplete="off" placeholder='Type date of birth' value={formik.values.birthday} onChange={formik.handleChange} onFocus={handleFocus} onBlur={handleFocus} />
                  <ErrorMessage name={"birthday"} />
            </FieldContainer>
    </StageContainer>
  );
};


export default SecondStep;

SecondStep.propTypes = {
  currentRadioChecked: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
};
