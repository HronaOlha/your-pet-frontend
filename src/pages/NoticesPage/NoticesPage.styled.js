import styled from "styled-components";

export const NoticesContainer = styled.div`
  position: relative;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 280px;
  }

  @media (min-width: 768px) {
    width: 704px;
  }

  @media (min-width: 1280px) {
    width: 1248px;
  }
`;

export const NoticesTitle = styled.h1`
  margin-top: 40px;
  margin-bottom: 24px;

  color: #111;
  text-align: center;
  font-size: 24px;
  font-weight: 700;

  @media (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 40px;

    font-size: 48px;
  }
`;
