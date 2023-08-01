import { useEffect } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { titleChange } from "../../helpers/helpers";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import ChangeStepBtn from "../ChangeStepBtn/ChangeStepBtn";

import FirstStep from "../FirstStep/FirstStep";
import SecondStep from "../SecondStep/SecondStep";
import ThirdStep from "../ThirdStep/ThirdStep";
import {
  AddPetFormTitle,
  FormBox,
  Steps,
  StepTitle,
  TitleBox,
} from "./AddPetForm.styled";
import { addPetShema } from "../../../../schemas/addPetShema";
import { postPet } from "../../../../redux/pets/pets-operation";
import { newPost } from "../../../../redux/notices/notices-operations";
import { formatDate } from "../../../../shared/utils/formatDate";

const AddPetForm = () => {
  const {
    currentStep,
    handleNextStep,
    handleBackStep,
    isFirstStep,
    isLastStep,
  } = useMultistepForm(1);
  const [currentRadioChecked, setCurremtRadioChecked] = useState("your-pet");
  const [avatarFile, setAvatarFile] = useState("");
  const [selectedSex, setSelectedSex] = useState("");
  const [fileIsLoaded, setFileIsLoaded] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState("");
  const dispatch = useDispatch();

  const initialValues = {
    categories: currentRadioChecked,
    title: "",
    name: "",
    date: "",
    type: "",
    sex: selectedSex,
    file: avatarFile,
    location: "",
    price: "",
    comments: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const { name, date, type, comments, categories } = values;

    const formData = new FormData();

    if (categories === "your-pet") {
      formData.append("name", name);
      formData.append("date", formatDate(date));
      formData.append("type", type);
    } else {
      formData.append("value", values);
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });
    }
    formData.append("file", avatarFile);
    comments && formData.append("comments", comments);

    categories === "your-pet"
      ? dispatch(postPet(formData))
      : dispatch(newPost(formData));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={addPetShema}
    >
      {(formik) => {
        const handleCategories = (e) => {
          setCurremtRadioChecked(e.target.value);
          formik.handleChange(e);
          console.log(formik.values);
        };

        const handleSex = (e) => {
          setSelectedSex(e.target.value);
          formik.handleChange(e);
        };

        return (
          <FormBox>
            <div>
              <TitleBox>
                <AddPetFormTitle>
                  {currentStep !== 1
                    ? titleChange(currentRadioChecked)
                    : "Add pet"}
                </AddPetFormTitle>
              </TitleBox>
              <Steps>
                <StepTitle isActive={currentStep === 1}>
                  Choose option
                </StepTitle>
                <StepTitle isActive={currentStep === 2}>
                  Personal details
                </StepTitle>
                <StepTitle isActive={currentStep === 3}>More info</StepTitle>
              </Steps>

              {currentStep === 1 && (
                <FirstStep
                  handleCategories={handleCategories}
                  currentRadioChecked={currentRadioChecked}
                />
              )}
              {currentStep === 2 && (
                <SecondStep
                  currentRadioChecked={currentRadioChecked}
                  formik={formik}
                />
              )}
              {currentStep === 3 && (
                <ThirdStep
                  currentRadioChecked={currentRadioChecked}
                  handleSex={handleSex}
                  avatarFile={avatarFile}
                  setAvatarFile={setAvatarFile}
                  fileIsLoaded={fileIsLoaded}
                  setFileIsLoaded={setFileIsLoaded}
                  avatarPreview={avatarPreview}
                  setAvatarPreview={setAvatarPreview}
                  formik={formik}
                />
              )}
            </div>
            <div>
              <ChangeStepBtn
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
                next={handleNextStep}
                back={handleBackStep}
              />
            </div>
          </FormBox>
        );
      }}
    </Formik>
  );
};

export default AddPetForm;
