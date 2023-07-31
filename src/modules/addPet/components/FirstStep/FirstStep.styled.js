import { Field } from "formik";
import styled from "styled-components";


export const RadioContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 40px;
`;

export const RadioLabel = styled.label`
  display: inline-block;
  width: fit-content;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
  border-radius: 40px;
  padding: 8px 16px;
  background-color: ${props => (props.checked ? props.theme.colors.primary : props.theme.colors.blueLight)};
  color: ${props => (props.checked ? props.theme.colors.background : props.theme.colors.primary)};
`;

export const RadioInput = styled(Field)`
    display: none;
`;