import { Form } from "formik";
import styled from "styled-components";


export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 32px;
  margin: 20px auto 0;
  background-color: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  min-height: 542px;
  width: 822px;
`

export const TitleBox = styled.div`
display: flex;
  flex-direction: column;
  margin-top: 12px;
  margin-bottom: 24px;
`;

export const AddPetFormTitle = styled.h2`
    font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: fit-content;
  margin-left: 12px;
  margin-bottom: 24px;
  color: #111;
`;

export const Steps = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 70px;
`;

export const StepTitle = styled.h3`
  position: relative;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 120px;
  text-align: left;
  color: ${props => (props.isActive ? props.theme.colors.primary : props.theme.colors.grey)};

    &:after {
    content: '';
    position: absolute;
    background-color: ${props => (props.isActive ? props.theme.colors.primary : props.theme.colors.blueLight)};
    border-radius: 8px;
    height: 8px;
    width: 100%;
    top: 35px;
    left: 0;
    }

  &:nth-child(1) {
    color: ${props => (props.isCompleated && props.theme.colors.green)}
  }

  &:nth-child(1)::after {
    background-color: ${props => (props.isCompleated && props.theme.colors.green)};
  }

  &:nth-child(2) {
    color: ${props => (props.isCompleated && props.theme.colors.green)}
  }

  &:nth-child(2)::after {
    background-color: ${props => (props.isCompleated && props.theme.colors.green)};
  }

`;
