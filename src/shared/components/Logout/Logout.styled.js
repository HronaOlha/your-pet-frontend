import styled from "styled-components";

export const StyledLogout = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 135px;
  height: 40px;
  background: linear-gradient(90deg, #54adff, #54adff);
  color: ${(props) => props.theme.colors.background};
  border-radius: 40px;
  padding-top: 8px;
  padding-bottom: 8px;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover, :focus {
    background: linear-gradient(90deg, #9bd0ff, #419ef1);
    cursor: pointer;
  }
`;

export const StyledLogoutText = styled.p`
  font-size: 16px;
  line-height: 1.37;
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const LogoutIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${(props) => props.theme.colors.background};
`;
