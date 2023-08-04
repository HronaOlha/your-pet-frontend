import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import PropTypes from "prop-types";

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

import { useSelector } from "react-redux";
import authSelectors from "../../../../redux/auth/auth-selectors";

const AddPhoto = ({ isUserUpdate, setUserPhoto }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSelected, setisSelected] = useState(false);
  const user = useSelector(authSelectors.selectUser);

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

  useEffect(() => {
    setisSelected(false);
  }, [selectedFile]);

  const onSubmit = () => {
    setUserPhoto(selectedFile );
    setisSelected(true);
  };

  return (
    <>
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
                {selectedFile && !isSelected ? (
                  <Box>
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
                  </Box>
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
    </>
  );
};

export default AddPhoto;

AddPhoto.propTypes = {
  isUserUpdate: PropTypes.bool.isRequired,
  setUserPhoto: PropTypes.func.isRequired,
};

//  {
//    isLoader ? <Loader /> : <input {...getInputProps()} />;
//  }
