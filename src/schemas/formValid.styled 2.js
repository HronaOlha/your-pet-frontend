import styled from "styled-components";

export const Error = styled.div`
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
