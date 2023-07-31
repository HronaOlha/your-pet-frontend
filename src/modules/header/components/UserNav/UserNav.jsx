import PropTypes from "prop-types";
import User from "../User/User";
import Logout from "../../../../shared/components/Logout/Logout";
import { StyledUserNav, StyledLogout } from "./UserNav.styled";

const UserNav = (props) => {
  const { isMobileMenuOpen, isDesktop, onCloseMobileMenu } = props;
  return (
    <StyledUserNav>
      {(isMobileMenuOpen || isDesktop) && (
        <StyledLogout>
          <Logout />
        </StyledLogout>
      )}
      <User
        isMobileMenuOpen={isMobileMenuOpen}
        isDesktop={isDesktop}
        onCloseMobileMenu={onCloseMobileMenu}
      />
    </StyledUserNav>
  );
};

UserNav.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  isDesktop: PropTypes.bool,
  onCloseMobileMenu: PropTypes.func,
};

export default UserNav;
