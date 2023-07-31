import PropTypes from "prop-types";
import spriteSvg from "../../../../assets/icons.svg";
import {
  StyledLoginIcon,
  StyledAuthNav,
  StyledAuthNavItem,
  StyledAuthNavButton,
} from "./AuthNav.styled";

const AuthNav = (props) => {
  const { onCloseMobileMenu } = props;
  return (
    <StyledAuthNav>
      <StyledAuthNavItem>
        <StyledAuthNavButton $primary to="/login" onClick={onCloseMobileMenu}>
          Log IN
          <StyledLoginIcon>
            <use href={spriteSvg + "#pawprint"} />
          </StyledLoginIcon>
        </StyledAuthNavButton>
      </StyledAuthNavItem>
      <StyledAuthNavItem>
        <StyledAuthNavButton to="/register" onClick={onCloseMobileMenu}>
          Registration
        </StyledAuthNavButton>
      </StyledAuthNavItem>
    </StyledAuthNav>
  );
};

AuthNav.propTypes = {
  onCloseMobileMenu: PropTypes.func,
};

export default AuthNav;
