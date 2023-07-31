import PropTypes from "prop-types";
import { CommonNavLink, StyledNavList, StyledNavItem } from "./Nav.styled";

const Nav = (props) => {
  const { onCloseMobileMenu } = props;

  return (
    <nav>
      <StyledNavList>
        <StyledNavItem>
          <CommonNavLink to={"/news"} onClick={onCloseMobileMenu}>
            News
          </CommonNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <CommonNavLink to={"/notices"} onClick={onCloseMobileMenu}>
            Find pet
          </CommonNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <CommonNavLink to={"/friends"} onClick={onCloseMobileMenu}>
            Our friends
          </CommonNavLink>
        </StyledNavItem>
      </StyledNavList>
    </nav>
  );
};

Nav.propTypes = {
  onCloseMobileMenu: PropTypes.func,
};

export default Nav;
