import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import authSelectors from "../../../../redux/auth/auth-selectors";
import Nav from "../Nav/Nav";
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";
import { NavWrap, W } from "./Navigation.styled";

const Navigation = (props) => {
  const { isMobileMenuOpen, onCloseMobileMenu } = props;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  useEffect(() => {
      const onDetectDesktop = function () {
        if (window.matchMedia("(min-width: 1280px)").matches) setIsDesktop(true);
        else setIsDesktop(false);
    };
    
    onDetectDesktop();

    window.addEventListener("resize", onDetectDesktop);

    return () => window.addEventListener("resize", onDetectDesktop);
  }, []);

  useEffect(() => {
    const onDetectMobile = function () {
      if (window.matchMedia("(max-width: 767px)").matches) setIsMobile(true);
      else setIsMobile(false);
    };

    onDetectMobile();

    window.addEventListener("resize", onDetectMobile);

    return () => window.addEventListener("resize", onDetectMobile);
  }, []);

  return (
    <NavWrap>
      <W>
        {isLoggedIn && (
          <UserNav
            isMobileMenuOpen={isMobileMenuOpen}
            isDesktop={isDesktop}
            onCloseMobileMenu={onCloseMobileMenu}
          />
        )}

        {/* {((!isLoggedIn && !isMobileMenuOpen && !isMobile) ||
          (!isLoggedIn && isMobile && isMobileMenuOpen)) && (
          <AuthNav onCloseMobileMenu={onCloseMobileMenu} />
        )} */}

        {((!isLoggedIn && !isMobileMenuOpen && !isMobile) ||
          (!isLoggedIn && isMobileMenuOpen)) && (
          <AuthNav onCloseMobileMenu={onCloseMobileMenu} />
        )}
      </W>

      {(isMobileMenuOpen || (!isMobileMenuOpen && isDesktop)) && (
        <Nav onCloseMobileMenu={onCloseMobileMenu} isLoggedIn={isLoggedIn} />
      )}
    </NavWrap>
  );
};

Navigation.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onCloseMobileMenu: PropTypes.func,
};

export default Navigation;
