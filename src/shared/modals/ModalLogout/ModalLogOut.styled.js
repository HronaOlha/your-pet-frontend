import styled from "styled-components";

export const ModalWrap = styled.div`
  position: relative;
  min-width: 280px;
  padding: 60px 12px;
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
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  text-align: center;

  margin-bottom: 48px;
  @media (${({ theme: { media } }) => media.tablet}) {
    font-size: 28px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 12px);
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
`;

export const SuccesButton = styled.button`
  padding: 9px 34px;

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
    width: 24px;
    height: 24px;
    fill: ${({ theme: { colors } }) => colors.white};
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;

  width: 24px;
  height: 24px;

  background-color: inherit;
  cursor: pointer;

  * {
    stroke: ${({ theme: { colors } }) => colors.primary};
  }
`;
