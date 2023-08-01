import styled from "styled-components";


export const ButtonsContaiiner = styled.div`
    display: flex;
    justify-content: center;
    gap: 32px;

`;

export const IconBtn = styled.svg`
    fill: ${props => props.theme.colors.background};
    stroke: ${props => props.theme.colors.primary};
`;

export const ButtonForm = styled.button`
      display: flex;
  gap: 12px;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 40px;
  padding: 8px 28px;
  text-align: center;
  align-content: center;
  align-items: center;
  color: #fef9f9;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  @media screen and (min-width: 768px) {
    width: 248px;
  }

  & span {
    margin: auto 0;
    text-align: center;
  }

  &:active {
    background-color: transparent;
    color: ${props => props.theme.colors.primary};

    ${IconBtn} {
        fill: ${props => props.theme.colors.primary};
    }
  }
  

  &:first-child {
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    text-align: center;
    align-content: center;
    align-items: center;
    @media screen and (min-width: 768px) {
      width: 148px;
    }
  }

  &:first-child:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};

    ${IconBtn} {
        stroke: ${props => props.theme.colors.background};
    }
  }
  
`