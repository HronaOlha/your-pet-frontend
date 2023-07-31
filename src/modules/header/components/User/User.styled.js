import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledUser = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-decoration: none;

  @media ${(props) => props.theme.media.tablet} and (max-width: 1279px) {
    position: absolute;
    top: 8px;
    right: 12px;
  }

  :hover,
  :focus {
    scale: 1.1;
  }
`;

export const StyledUserName = styled.p`
  font-size: 16px;
  line-height: 1.37;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.secondary};
`;

export const StyledUserIcon = styled.img`
  width: 28px;
  height: 28px;
`;