import styled from "styled-components";

const StyledLogo = styled.img`
  display: inline-block;
  width: 116px;
  height: 20px;

  @media ${(props) => props.theme.media.tablet} {
    width: 162px;
    height: 28px;
  }
`;

export default StyledLogo;
