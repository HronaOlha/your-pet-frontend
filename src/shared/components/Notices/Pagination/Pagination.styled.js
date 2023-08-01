import styled from "styled-components";

export const BtnBack = styled.button`
  width: 35px;
  height: 35px;

  background: none;
  border: none;
  margin-right: 40px;
  padding: 0;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 30px;
    height: 30px;
    margin-right: 10px;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  :hover svg,
  :focus svg {
    transform: scale(1.05);
  }
`;

export const BtnForward = styled.button`
  width: 35px;
  height: 35px;

  background: none;
  border: none;
  margin-left: 40px;
  padding: 0;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 30px;
    height: 30px;
    margin-left: 10px;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  :hover svg,
  :focus svg {
    transform: scale(1.05);
  }
`;

export const NumbersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media (max-width: 767px) {
    gap: 4px;
  }
`;

export const NumItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 35px;
  @media (max-width: 767px) {
    height: 30px;
  }
`;

export const NumBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;

  @media (max-width: 767px) {
    width: 30px;
    height: 30px;
  }

  border-radius: 50%;
  border: 1px solid #54adff;
  background: ${(props) => (props.currentPage ? "#54ADFF" : "none")};
  color: ${(props) => (props.currentPage ? "white" : "black")};
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;

  :hover,
  :focus {
    transform: scale(1.05);
  }
`;
