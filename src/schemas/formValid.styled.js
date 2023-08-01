import styled from "styled-components";

export const Error = styled.div`
  // position: absolute;
  margin-top: 4px;
  margin-left: 20px;
  width: 100%;
  font-size: 12px;
  font-family: Manrope, sans-serif;
  color: red;
`;

export const Correct = styled(Error)`
  color: green;
`;

export const RegisterError = styled(Error)`
  top: 44px;
`;

export const RegisterCorrect = styled(Correct)`
  top: 44px;
`;
