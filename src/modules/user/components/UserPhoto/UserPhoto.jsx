import { useState } from "react";
import { useDropzone } from "react-dropzone";
import PropTypes from "prop-types";

import { HashLoader } from "react-spinners";

import {
  Box,
  PhotoContainer,
  UserDataWrapper,
  UserPhotoBtn,
  UserPhotoBtnCheck,
  UserPhotoEdit,
  UserPhotoIcon,
  UserPhotoIconDell,
  UserPhotoTitle,
  UserPhotoWrapper,
  UserPhotoBtnEmpty,
} from "./UserPhoto.styled";

import avatar from "../../../../images/avatarDefault-image/Avatar.png";

import sprite from "../../../../assets/icons.svg";

import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../../redux/auth/auth-operations";
import authSelectors from "../../../../redux/auth/auth-selectors";

const AddPhoto = ({ isUserUpdate }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.selectUser);
  const isLoader = useSelector(authSelectors.selectIsLoader);

  const onDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });

  const formData = new FormData();
  formData.append("avatar", selectedFile);

  const onSubmit = () => {
    dispatch(updateUser(formData));
    setSelectedFile(null);
  };

  return (
    <>
      {isLoader ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <HashLoader
            color="blue"
            loading="true"
            size={55}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <UserDataWrapper>
          <UserDataWrapper>
            <input {...getInputProps()} />
            <UserPhotoBtnEmpty>
              {selectedFile ? (
                <UserPhotoWrapper>
                  <PhotoContainer
                    src={URL.createObjectURL(selectedFile)}
                    alt="User's file"
                    style={{ maxWidth: "300px" }}
                  />
                </UserPhotoWrapper>
              ) : (
                <UserPhotoWrapper>
                  <PhotoContainer
                    src={user.avatarUrl || avatar}
                    alt="Default avatar"
                    style={{ maxWidth: "300px" }}
                  />
                </UserPhotoWrapper>
              )}
              {!isUserUpdate && (
                <Box>
                  {selectedFile ? (
                    <>
                      <UserPhotoBtnCheck type="button" onClick={onSubmit}>
                        <UserPhotoIcon>
                          <use href={sprite + "#check"} />
                        </UserPhotoIcon>
                      </UserPhotoBtnCheck>
                      <UserPhotoTitle>Confirm</UserPhotoTitle>
                      <UserPhotoBtn
                        type="button"
                        onClick={() => setSelectedFile(null)}
                      >
                        <UserPhotoIconDell>
                          <use href={sprite + "#cross-small"} />
                        </UserPhotoIconDell>
                      </UserPhotoBtn>
                    </>
                  ) : (
                    <UserPhotoEdit
                      {...getRootProps()}
                      className={`dropzone ${isDragActive ? "active" : ""}`}
                      type="button"
                    >
                      <UserPhotoIcon>
                        <use href={sprite + "#camera"} />
                      </UserPhotoIcon>
                      Edit photo
                    </UserPhotoEdit>
                  )}
                </Box>
              )}
            </UserPhotoBtnEmpty>
          </UserDataWrapper>
        </UserDataWrapper>
      )}
    </>
  );
};

export default AddPhoto;

AddPhoto.propTypes = {
  isUserUpdate: PropTypes.bool.isRequired,
};
