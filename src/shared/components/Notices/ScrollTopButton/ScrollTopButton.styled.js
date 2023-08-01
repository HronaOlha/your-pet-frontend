import styled from "styled-components";

export const ScrollTopBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #333333;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    fill: #54adff;
  }

  :hover,
  :focus {
    transform: scale(1.05);
  }
`;
