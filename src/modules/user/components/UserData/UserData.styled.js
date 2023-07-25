import styled from "styled-components";

export const UserDataBody = styled.div`
  padding-right: 0;
  margin-bottom: 20px;

  @media screen and (min-width: 1280px) {
    flex: 0 0 35%;
    padding-right: 32px;
  }

  @media (max-width: 1279px) {
    position: relative;
  }

  @media screen and (min-width: 320px) {
    margin-bottom: 47px;
  }
`;

export const UserDataHead = styled.div`
  font-weight: 500;
  font-size: 32px;
  margin-bottom: 24px;
`;

export const UserDataContent = styled.div`
  padding: 32px 16px 20px;
  background: white;
  box-shadow: 7px 4px 14px rgba(136, 198, 253, 0.19);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 520px;
    border-radius: 40px;
    display: block;
  }

  @media (max-width: 1279px) {
    padding-left: 0;
    border-radius: 0 40px 40px 0;
    position: relative;
    &:before {
      content: "";
      min-height: 100%;
      position: absolute;
      left: -40px;
      top: 0;
      width: 40px;
      background: white;
    }
  }

  @media screen and (min-width: 320px) {
    display: block;
  }
`;

export const UserLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;
