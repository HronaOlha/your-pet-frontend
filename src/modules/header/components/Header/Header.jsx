
import { useState, useRef, useEffect } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import spriteSvg from "../../../../assets/icons.svg";
import { CSSTransition } from "react-transition-group";
import {
  BurgerMenuBtn,
  StyledHeader,
  MobileMenu,
  MobileMenuCloseBtn,
  MenuWrap,
  BurgerMenuWrap,
  MobileMenuContainer,
  HeaderContainer,
} from "./Header.styled";

const Header = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const onCloseMobileMenu = () => {
    if(isMobileMenuOpen) setisMobileMenuOpen(false);
  }

  return (
    <StyledHeader>
      {!isMobileMenuOpen && (
        <HeaderContainer>
          <Logo />
          <BurgerMenuWrap>
            <Navigation
              isMobileMenuOpen={isMobileMenuOpen}
              onCloseMobileMenu={onCloseMobileMenu}
            />
            <BurgerMenuBtn onClick={() => setisMobileMenuOpen(true)}>
              <use href={spriteSvg + "#menu-hamburger"} />
            </BurgerMenuBtn>
          </BurgerMenuWrap>
        </HeaderContainer>
      )}

      {/* {isMobileMenuOpen && ( */}
      <CSSTransition
        nodeRef={nodeRef}
        in={isMobileMenuOpen}
        classNames="fade"
        timeout={250}
        unmountOnExit
      >
        <MobileMenu ref={nodeRef}>
          <MobileMenuContainer>
            <MenuWrap>
              <Logo />
              <MobileMenuCloseBtn onClick={() => setisMobileMenuOpen(false)}>
                <use href={spriteSvg + "#cross"} />
              </MobileMenuCloseBtn>
            </MenuWrap>
            <Navigation
              isMobileMenuOpen={isMobileMenuOpen}
              onCloseMobileMenu={onCloseMobileMenu}
            />
          </MobileMenuContainer>
        </MobileMenu>
      </CSSTransition>
      {/* )} */}
    </StyledHeader>
  );
};

export default Header;