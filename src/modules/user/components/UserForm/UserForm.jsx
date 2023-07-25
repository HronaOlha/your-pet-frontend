import { Formik } from "formik";

import {
  UserBtnPen,
  UserImgBox,
  UserImgInputBody,
  UserImgInput,
  UserFormBody,
  UserFormBtn,
  UserFormInput,
  UserFormItem,
  UserFormLabel,
} from "./UserForm.styled";

import avatar from "./img/Avatar.png";

import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const UserForm = () => {
  return (
    <>
      <UserBtnPen>
        <BorderColorOutlinedIcon
          style={{
            color: "#54ADFF",
          }}
        />
      </UserBtnPen>
      <UserImgBox>
        <UserImgInputBody>
          <img src={avatar} alt="Default" />
          <UserImgInput
            id="#$%^&file"
            type="file"
            name="image"
            accept="image/png, image/jpeg"
          />
        </UserImgInputBody>
      </UserImgBox>
      <Formik>
        <UserFormBody>
          <UserFormItem>
            <UserFormLabel htmlFor={`name`}>Name:</UserFormLabel>
            <UserFormInput type="text" name="name" />
          </UserFormItem>
          <UserFormItem>
            <UserFormLabel htmlFor={`email`}>Email:</UserFormLabel>
            <UserFormInput type="text" name="email" />
          </UserFormItem>
          <UserFormItem>
            <UserFormLabel htmlFor={`birthDate`}>Birthday:</UserFormLabel>
            <UserFormInput type="text" name="birthDate" />
          </UserFormItem>
          <UserFormItem>
            <UserFormLabel htmlFor={`phone`}>Phone:</UserFormLabel>
            <UserFormInput type="text" name="phone" />
          </UserFormItem>
          <UserFormItem>
            <UserFormLabel htmlFor={`city`}>City:</UserFormLabel>
            <UserFormInput type="text" name="city" />
          </UserFormItem>
          <UserFormBtn>
            <LogoutOutlinedIcon
              style={{
                color: "#54ADFF",
                transform: "rotate(180deg)",
                fontSize: "26px",
                marginRight: "10px",
              }}
            />
            Log Out
          </UserFormBtn>
        </UserFormBody>
      </Formik>
    </>
  );
};

export default UserForm;
