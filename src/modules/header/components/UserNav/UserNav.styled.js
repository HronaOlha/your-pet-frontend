import styled from "styled-components";

export const StyledUserNav = styled.div`
  @media ${(props) => props.theme.media.desktop} {
    display: flex;
    gap: 24px;
  }
`;

export const StyledLogout = styled.div`
  position: absolute;
  bottom: 0;

  @media (max-width: 767px) {
    left: 0;
  }

  @media ${(props) => props.theme.media.tablet} {
    position: static;
  }

  @media ${(props) => props.theme.media.desktop} {
    position: static;
  }
`;