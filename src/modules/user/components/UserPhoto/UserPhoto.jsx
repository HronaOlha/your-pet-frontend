import { useState } from "react";
import { useDropzone } from "react-dropzone";
import PropTypes from "prop-types";
import { Img, PhotoWrap } from "./UserPhoto.styled";
import avatar from "../../../../images/avatarDefault-image/Avatar.png";
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
        <div>тутмає бути спінер</div>
      ) : (
        <div>
          <div>
            <input
              {...getInputProps()}
              accept="image/png, image/jpeg"
              type="file"
            />
            {selectedFile ? (
              <PhotoWrap>
                <Img
                  src={URL.createObjectURL(selectedFile)}
                  alt="User's file"
                  style={{ maxWidth: "300px" }}
                />
              </PhotoWrap>
            ) : (
              <PhotoWrap>
                <Img
                  src={user.avatarUrl || avatar}
                  alt="Default avatar"
                  style={{ maxWidth: "300px" }}
                />
              </PhotoWrap>
            )}
            {!isUserUpdate && (
              <div>
                {selectedFile ? (
                  <>
                    <button type="button" onClick={onSubmit}>
                      succes svg
                    </button>
                    <p>Confirm</p>
                    <button type="button" onClick={() => setSelectedFile(null)}>
                      cancel svg
                    </button>
                  </>
                ) : (
                  <button
                    {...getRootProps()}
                    className={`dropzone ${isDragActive ? "active" : ""}`}
                    type="button"
                  >
                    Edit photo
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AddPhoto;

AddPhoto.propTypes = {
  isUserUpdate: PropTypes.bool.isRequired,
};
