import { useSearchParams } from "react-router-dom";
import LoginForm from "./../../modules/auth/components/LoginForm/LoginForm";
import { LoginBg } from "./LoginPage.styled";
import { useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { googleAuth } from "/src/redux/auth/auth-operations";
import { setToken } from "/src/redux/auth/auth-slice";

const LoginPage = () => {
  const [searchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { token, refreshToken, tokenLifeTime } = params;

  const dispatch = useDispatch();

  useEffect(() => {
    if (token && refreshToken && tokenLifeTime) {
      dispatch(setToken({ token, refreshToken, tokenLifeTime }));
      dispatch(googleAuth(token));
    }
  }, [dispatch, refreshToken, token, tokenLifeTime]);

  return (
    <>
      <LoginBg />
      <LoginForm />
    </>
  );
};

export default LoginPage;
