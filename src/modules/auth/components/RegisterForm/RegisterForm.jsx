import { useDispatch } from "react-redux";
import { useState } from "react";
import { Formik } from "formik";
import {
  FormContainer,
  InputWrapper,
  Input,
  Btn,
  IconHidden,
  IconShown,
  PassWrapper,
  ShowPassBtn,
  Text,
  RegisterHeader,
  WrapperCheckCross,
  IconCross,
  IconCheck,
} from "./RegisterForm.styled";
import { registration } from "./../../../../redux/auth/auth-operations";
import {
  InputRegisterCorrect,
  InputRegisterError,
  RegisterSchema,
} from "./../../../../schemas/formValid";
import { WrapperInput, WrapperShowCheck } from "../LoginForm/LoginForm.styled";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password, confirmPassword } = values;
    if (password === confirmPassword) {
      dispatch(
        registration({
          name: name,
          email: email,
          password: password,
        })
      );
    }

    resetForm();
  };

  const togglePassword = () => setPasswordShown(!passwordShown);
  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterSchema}
    >
      {({ errors, touched, values }) => (
        <FormContainer>
          <RegisterHeader>Registration</RegisterHeader>
          <InputWrapper>
            <PassWrapper>
              <WrapperInput>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder={"Name"}
                />
              </WrapperInput>
            </PassWrapper>

            <PassWrapper>
              <WrapperInput
                className={
                  (values.email === "" && "default") ||
                  (touched.email && errors.email && "error") ||
                  (!errors.email && "success")
                }
              >
                <Input
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder={"Email"}
                />
                <WrapperCheckCross>
                  {(values.email === "" && true) ||
                    (touched.email && errors.email && <IconCross />) ||
                    (!errors.email && <IconCheck />)}
                </WrapperCheckCross>
              </WrapperInput>
              {values.email === "" && true
                ? null
                : errors.email &&
                  touched.email !== "" && (
                    <InputRegisterError name="Enter a valid Email" />
                  )}
            </PassWrapper>

            <PassWrapper>
              <WrapperInput
                className={
                  (values.password === "" && "default") ||
                  (touched.password && errors.password && "error") ||
                  (!errors.password && "success")
                }
              >
                <Input
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder={"Password"}
                />

                <WrapperShowCheck>
                  <ShowPassBtn
                    type="button"
                    onClick={togglePassword}
                    data-shown={passwordShown}
                  >
                    {passwordShown ? (
                      <IconShown viewBox="0 0 32 32">
                        <path
                          fill="none"
                          stroke="#54adff"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeMiterlimit="4"
                          strokeWidth="2"
                          d="M2.667 16c0 0 4.848-9.333 13.333-9.333s13.333 9.333 13.333 9.333-4.849 9.333-13.333 9.333c-8.485 0-13.333-9.333-13.333-9.333z"
                        ></path>
                        <path
                          fill="none"
                          stroke="#54adff"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeMiterlimit="4"
                          strokeWidth="2"
                          d="M16 20c2.209 0 4-1.791 4-4s-1.791-4-4-4c-2.209 0-4 1.791-4 4s1.791 4 4 4z"
                        ></path>
                      </IconShown>
                    ) : (
                      <IconHidden viewBox="0 0 32 32">
                        <path
                          fill="none"
                          stroke="#54adff"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeMiterlimit="4"
                          strokeWidth="2"
                          d="M13.019 7.060c0.936-0.251 1.931-0.394 2.981-0.394 8.485 0 13.333 9.333 13.333 9.333s-1.105 2.128-3.184 4.351M5.799 11.704c-2.045 2.203-3.132 4.296-3.132 4.296s4.848 9.333 13.333 9.333c1.069 0 2.081-0.148 3.033-0.407M15.333 19.945c-1.446-0.243-2.628-1.26-3.106-2.611M16.667 12.055c1.675 0.281 2.997 1.603 3.278 3.278M4 4l24 24"
                        ></path>
                      </IconHidden>
                    )}
                  </ShowPassBtn>
                  {(values.password === "" && true) ||
                    (touched.password && errors.password && <IconCross />)}

                  {(values.password === "" && true) ||
                    (!errors.password && <IconCheck />)}
                </WrapperShowCheck>
              </WrapperInput>

              {values.password === "" && true
                ? null
                : !errors.password &&
                  touched.password !== "" && (
                    <InputRegisterCorrect name="Password is secure" />
                  )}
            </PassWrapper>

            <PassWrapper>
              <WrapperInput
                className={
                  (values.confirmPassword === "" && "default") ||
                  (touched.confirmPassword &&
                    errors.confirmPassword &&
                    "error") ||
                  (!errors.confirmPassword && "success")
                }
              >
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  autoComplete="off"
                  placeholder={"Confirm password"}
                />

                <WrapperShowCheck>
                  <ShowPassBtn
                    type="button"
                    onClick={toggleConfirmPassword}
                    data-shown={showConfirmPassword}
                  >
                    {showConfirmPassword ? (
                      <IconShown viewBox="0 0 32 32">
                        <path
                          fill="none"
                          stroke="#54adff"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeMiterlimit="4"
                          strokeWidth="2"
                          d="M2.667 16c0 0 4.848-9.333 13.333-9.333s13.333 9.333 13.333 9.333-4.849 9.333-13.333 9.333c-8.485 0-13.333-9.333-13.333-9.333z"
                        ></path>
                        <path
                          fill="none"
                          stroke="#54adff"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeMiterlimit="4"
                          strokeWidth="2"
                          d="M16 20c2.209 0 4-1.791 4-4s-1.791-4-4-4c-2.209 0-4 1.791-4 4s1.791 4 4 4z"
                        ></path>
                      </IconShown>
                    ) : (
                      <IconHidden viewBox="0 0 32 32">
                        <path
                          fill="none"
                          stroke="#54adff"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeMiterlimit="4"
                          strokeWidth="2"
                          d="M13.019 7.060c0.936-0.251 1.931-0.394 2.981-0.394 8.485 0 13.333 9.333 13.333 9.333s-1.105 2.128-3.184 4.351M5.799 11.704c-2.045 2.203-3.132 4.296-3.132 4.296s4.848 9.333 13.333 9.333c1.069 0 2.081-0.148 3.033-0.407M15.333 19.945c-1.446-0.243-2.628-1.26-3.106-2.611M16.667 12.055c1.675 0.281 2.997 1.603 3.278 3.278M4 4l24 24"
                        ></path>
                      </IconHidden>
                    )}
                  </ShowPassBtn>
                  {(values.confirmPassword === "" && true) ||
                    (touched.confirmPassword && errors.confirmPassword && (
                      <IconCross />
                    ))}

                  {(values.confirmPassword === "" && true) ||
                    (!errors.confirmPassword && <IconCheck />)}
                </WrapperShowCheck>
              </WrapperInput>

              {values.confirmPassword === "" && true
                ? null
                : !errors.confirmPassword &&
                  touched.confirmPassword !== "" && (
                    <InputRegisterCorrect name="Confirm password is secure" />
                  )}
            </PassWrapper>
          </InputWrapper>
          <Btn type="submit">Registration</Btn>
          <Text>
            Already have an account? <a href="/login">Login</a>
          </Text>
          <Text>
            <a href="https://my-pet-app-8sz1.onrender.com/users/google">
              Continue with Google
            </a>
          </Text>
        </FormContainer>
      )}
    </Formik>
  );
};

export default RegistrationForm;
