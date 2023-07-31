import { Field } from "formik";
import styled from "styled-components";

export const StageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 36px;
`;

export const FieldContainer = styled.div`
     display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const FieldLabel = styled.label`
    display: block;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const InputField = styled(Field)`
      max-width: 100%;
  height: 40px;
  padding: 8px 16px;
  font-size: 14px;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 12px 16px;
    height: 48px;
  }

  &::placeholder {
    color: #888;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }



`;
