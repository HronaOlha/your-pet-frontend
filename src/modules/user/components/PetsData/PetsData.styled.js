import styled from "styled-components";

export const UserPetsBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 0;
  }
`;

export const UserPetsTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;

  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;
export const UserPetsTitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 60px;

  @media screen and (min-width: 768px) {
    gap: 0;
    width: 703px;
  }

  @media screen and (min-width: 1280px) {
    width: 821px;
  }
`;

export const UserPetsNavBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 8px;
  cursor: pointer;

  width: 129px;
  height: 40px;
  left: 1127px;
  top: 128px;
  background: #54adff;
  border-radius: 40px;
  border: none;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #fef9f9;

  &:hover {
    color: ${(props) => props.theme.colors.white};

    background: -webkit-linear-gradient(315deg, #9bd0ff 0%, #419ef1 100%);
  }

  &:hover,
  &:focus {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.04em;
    color: #fef9f9;
  }
`;

export const NoUserPets = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding: 20px;
  text-align: center;

  @media (${(props) => props.theme.media.tablet}) {
    font-size: 28px;
    margin-bottom: 24px;
  }
`;
