import * as Yup from "yup";
import { Correct, Error } from "./formValid.styled";
import { ErrorMessage } from "formik";

const emailValid =
  /^([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,4})$/;
const passwordValid = /(?!\s)^[^ ]*$/;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email field is required")
    .matches(emailValid, "Enter a valid Email")
    .max(70, "Maximum 70 characters")
    .min(10, "Minimum 10 characters")
    .email(),
  password: Yup.string()
    .matches(passwordValid, "Please enter min 6 characters and max 16")
    .max(16, "Please enter 16 characters or less")
    .min(6, "Enter 6 or more characters")
    .required("Password field is required"),
});

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2).max(16).required("Required"),
  email: Yup.string()
    .required("Email field is required")
    .matches(emailValid, "Enter a valid Email")
    .max(70, "Maximum 70 characters")
    .min(10, "Minimum 10 characters")
    .email(),
  password: Yup.string()
    .matches(passwordValid, "Please enter min 6 characters and max 16")
    .max(16, "Please enter 16 characters or less")
    .min(6, "Enter 6 or more characters")
    .required("Password field is required"),
  confirmPassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: () =>
      Yup.string()
        .oneOf([Yup.ref("password")], " Please confirm your password")
        .required("Confirm field is required"),
  }),
});

// eslint-disable-next-line react/prop-types
const InputError = ({ name }) => {
  return (
    <Error>
      <ErrorMessage
        name={name}
        render={(message) => <p style={{ margin: 0 }}>{message}</p>}
      />
    </Error>
  );
};

// eslint-disable-next-line react/prop-types
const InputCorrect = ({ name }) => {
  return (
    <Correct>
      <p style={{ margin: 0 }}>{name}</p>
    </Correct>
  );
};

export { LoginSchema, RegisterSchema, InputError, InputCorrect };
