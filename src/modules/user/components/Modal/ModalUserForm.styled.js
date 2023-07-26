import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(97, 97, 97, 0.6);
  z-index: 3;
`;
export const ModalContent = styled.div`
  position: relative;
  padding: 0;
  border-radius: 40px;
  background-color: #ffffff;
  box-shadow: 3px 8px 14px 0px #88c6fd30;
`;

export const BtnClose = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
  top: 20px;
  width: 34px;
  height: 34px;
  background-color: ${(p) => p.theme.colors.background};
  border: ${(p) => p.theme.borders.none};
  border-radius: ${(p) => p.theme.radii.round};
  cursor: pointer;
`;
