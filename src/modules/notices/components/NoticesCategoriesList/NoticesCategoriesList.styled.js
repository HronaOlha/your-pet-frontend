import styled from "styled-components";

export const CardList = styled.ul`
  display: flex;
  gap: 24px 32px;
  margin: 0 auto;

  @media (max-width: 767px) {
    align-items: center;
    flex-direction: column;
    width: 280px;
    margin-bottom: 40px;
  }

  @media (min-width: 768px) {
    flex-wrap: wrap;
    width: 704px;
    margin-bottom: 60px;
  }

  @media (min-width: 1280px) {
    flex-wrap: wrap;
    width: 1248px;
    margin-bottom: 68px;
  }
`;

export const EmptyError = styled.h2`
  color: #000;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.28px;
  text-align: center;
`;
