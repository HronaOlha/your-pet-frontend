import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BurgerMenuBtn = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #ffc107;

  @media ${(props) => props.theme.media.desktop} {
    display: none;
  }
`;

export const MobileMenuCloseBtn = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${(props) => props.theme.colors.secondary};
`;

export const MobileMenu = styled.div`
  &.fade-enter {
    transform: translateY(-100%);
  }

  &.fade-enter-active {
    transform: translateY(0%);
    transition: transform 250ms;
  }

  &.fade-exit {
    transform: translateY(0%);
  }

  &.fade-exit-active {
    transform: translateY(-100%);
    transition: transform 250ms;
  }

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};

  z-index: 2;

  padding: 20px;

  @media ${(props) => props.theme.media.tablet} and (max-width: 1279px) {
    padding: 32px;
  }
`;

export const MobileMenuContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media ${(props) => props.theme.media.tablet} {
    margin-bottom: 92px;
  }
`;

export const BurgerMenuWrap = styled.div`
  @media (max-width: 1279px) {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  @media (${(props) => props.theme.media.tablet} and (max-width: 1279px)) {
    gap: 38px;
  }
`;
