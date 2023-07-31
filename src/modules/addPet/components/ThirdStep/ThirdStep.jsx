import { Field } from "formik";
import { sexOptions } from "../../helpers/helpers";
import sprite from "../../../../assets/icons.svg";
import PropTypes from "prop-types";
import { AvatarContainer, AvatarTitle, FiledsContainer, GenderBox, LoadedImage, PhotoContainer, PlaceholderField, PlaceholderIcon, PlaceholderImage, RadioButtonSex, SelectContainer, SexIcon, Textarea, ThirdStepContainer } from "./ThirdStep.styled";
import { FieldContainer, FieldLabel, InputField } from "../SecondStep/SecondStep.styled";

const ThirdStep = ({ currentRadioChecked, handleSex, setAvatarFile, fileIsLoaded, setFileIsLoaded, avatarPreview, setAvatarPreview, formik }) => {

    const handleAvatarLoad = e => {
        const file = e.currentTarget.files[0];

        if (file) {
            setAvatarFile(file);
            setAvatarPreview(URL.createObjectURL(file));
            setFileIsLoaded(true);
            return
        }
        setAvatarFile(null);
        setFileIsLoaded(false);
        setAvatarPreview("");
    };

    return (
        <ThirdStepContainer isYourPet={currentRadioChecked === "your-pet"}>
            <SelectContainer>
                {currentRadioChecked !== "your-pet" &&
                    <>
                        <AvatarTitle>The Sex</AvatarTitle>
                        <GenderBox>
                            {sexOptions.map(({ value, label }) => {
                                return (
                                    <RadioButtonSex key={value} checked={formik.values.sex === value}>
                                        <SexIcon checked={formik.values.sex === value} isFemale={value === "female"} isAnyOfChecked={formik.values.sex !== ''}>
                                            <use href={sprite + `#${value}`}></use>
                                        </SexIcon>
                                        {label}
                                        <Field type="radio" name="sex" value={value} onChange={handleSex} />
                                    </RadioButtonSex>
                                )
                            })}
                        </GenderBox>
                    </>
                }
                <AvatarContainer isYourPet={currentRadioChecked === "your-pet"}>
                    <AvatarTitle>
                        Load the pet’s image:
                    </AvatarTitle>
                    <PhotoContainer>
                        {fileIsLoaded ? (
                            <LoadedImage src={avatarPreview} alt="Your photo" />
                        ) : (
                            <PlaceholderImage>
                                <PlaceholderIcon>
                                    <use href={sprite + "#add-photo"}></use>
                                </PlaceholderIcon>
                            </PlaceholderImage>
                        )}
                        <PlaceholderField type="file" id="avatar" name='avatar' onChange={handleAvatarLoad} />
                    </PhotoContainer>
                
                </AvatarContainer>
            </SelectContainer>
            <FiledsContainer>
                {currentRadioChecked !== "your-pet" &&
                    <FieldContainer>
                        <FieldLabel htmlFor="location">Location</FieldLabel>
                        <InputField type="text" name="location" id="location" autoComplete="off" placeholder="Type of location" value={formik.values.location} onChange={formik.handleChange} />
                    </FieldContainer>
                }
                {currentRadioChecked === "sell" &&
                    <FieldContainer>
                        <FieldLabel htmlFor="price">Price</FieldLabel>
                        <InputField type="text" name="price" id="price" autoComplete="off" placeholder="Type of price" value={formik.values.price} onChange={formik.handleChange} />
                    </FieldContainer>
                }
                <FieldContainer>
                    <p>Comments</p>
                    <InputField as={Textarea} name="comments" id="comments" placeholder="Type of pet" value={formik.values.comments} onChange={formik.handleChange}></InputField>
                </FieldContainer>
            </FiledsContainer>
        </ThirdStepContainer>
    )
};

export default ThirdStep;

ThirdStep.propTypes = {
    currentRadioChecked: PropTypes.string.isRequired,
    formik: PropTypes.object.isRequired,
    handleSex: PropTypes.func.isRequired,
    setAvatarFile: PropTypes.func.isRequired,
    fileIsLoaded: PropTypes.bool.isRequired,
    setFileIsLoaded: PropTypes.func.isRequired,
    avatarPreview: PropTypes.string.isRequired,
    setAvatarPreview: PropTypes.func.isRequired
};