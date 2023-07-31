import styled from "styled-components";
export const FriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  gap: 20px;
  padding-bottom: 75px;
  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-top: 40px;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    padding-bottom: 172px;
  }
  @media screen and (min-width: 1280px) {
    gap: 32px;
    margin-top: 60px;
    padding-bottom: 69px;
  }
`;
