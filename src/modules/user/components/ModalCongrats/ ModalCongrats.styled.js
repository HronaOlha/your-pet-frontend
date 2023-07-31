import styled from "styled-components";

export const Box = styled.div`
  width: 280px;
  height: 287px;

  border-radius: 40px;
  padding: 10px;
  background-color: rgba(254, 249, 249, 1);

  @media screen and (min-width: 768px) {
    width: 608px;
    height: 354px;
  }

  @media screen and (min-width: 1280px) {
    width: 608px;
    height: 354px;
  }
`;

export const BtnClose = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  margin-left: 230px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    margin-left: 550px;
    right: 24px;
    top: 24px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 550px;
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;

  stroke: rgba(84, 173, 255, 1);
`;

export const Title = styled.h2`
  padding: 30px;
  text-align: center;

  font-family: Manrope;
  font-weight: 500;
  font-size: 24px;

  line-height: 33px;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 1);

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 49px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 36px;
  }
`;

export const Text = styled.p`
  margin-bottom: 40px;
  text-align: center;

  font-family: Manrope;
  font-weight: 500;
  font-size: 16px;

  line-height: 22px;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 1);
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
    font-size: 24px;
    line-height: 33px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const BtnCongrats = styled.button`
  width: 100%;
  margin: 0;

  background: rgba(84, 173, 255, 1);
  border-radius: 40px;
  border: none;

  font-family: Manrope;
  font-weight: 700;
  font-size: 16px;
  line-height: 33px;
  letter-spacing: 0.04em;

  color: rgba(254, 249, 249, 1);

  &:hover {
    color: ${(props) => props.theme.colors.white};

    background: -webkit-linear-gradient(315deg, #9bd0ff 0%, #419ef1 100%);
  }

  @media screen and (min-width: 768px) {
    width: 248px;
    height: 40px;
    margin-left: 180px;
  }

  @media screen and (min-width: 1280px) {
    height: 40px;
    margin-left: 180px;
  }
`;
