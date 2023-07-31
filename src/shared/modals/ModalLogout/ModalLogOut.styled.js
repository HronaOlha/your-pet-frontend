import styled from "styled-components";

export const ModalWrap = styled.div`
  position: relative;
  min-width: 280px;
  padding: 77px 12px 60px 12px;
  margin: 0 20px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme: { colors } }) => colors.white};

  @media (${({ theme: { media } }) => media.tablet}) {
    padding: 108px 155px 109px 156px;
    border-radius: 40px;
    width: 608px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  text-align: center;
  margin-bottom: 44px;

  @media (${({ theme: { media } }) => media.tablet}) {
    font-size: 36px;
    margin-bottom: 48px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  @media (${({ theme: { media } }) => media.tablet}) {
    flex-direction: row;
    justify-content: center;
    gap: 17px;
  }
`;

export const CancelButton = styled.button`
  padding: 9px 35.5px;

  border: ${({ theme: { borders, colors } }) =>
    `${borders.medium} ${colors.primary}`};
  border-radius: 40px;

  background-color: inherit;
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: 16px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};

  :hover, :focus {
    background: linear-gradient(90deg, #9bd0ff, #419ef1);
    color: ${(props) => props.theme.colors.white};
`;

export const SuccesButton = styled.button`
  padding: 6px 34px;

  border: ${({ theme: { borders, colors } }) =>
    `${borders.medium} ${colors.primary}`};
  border-radius: 40px;

  background-color: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.white};
  font-size: 16px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  * {
    stroke: ${({ theme: { colors } }) => colors.white};
  }

  :hover, :focus {
    background: linear-gradient(90deg, #9bd0ff, #419ef1);
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 24px;
  height: 24px;

  background-color: inherit;
  cursor: pointer;

  * {
    stroke: ${({ theme: { colors } }) => colors.primary};
  }

  @media (${({ theme: { media } }) => media.tablet}) {
    top: 24px;
    right: 24px;
  }
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const LogoutIcon = styled.svg`
  width: 24px;
  height: 24px;
`;
