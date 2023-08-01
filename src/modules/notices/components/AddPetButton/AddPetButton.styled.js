import styled from "styled-components";

export const AddPetBtn = styled.button`
  display: flex;

  width: 129px;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background: #54adff;

  border: transparent;
  color: #ffffff;
  background: #419ef1;
  font-size: 12px;
  font-weight: 600;

  &:hover,
  &:focus {
    color: #fef9f9;
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
  }

  @media (max-width: 767px) {
    padding: 0;
    position: absolute;
    bottom: -210px;
    right: 0px;
    width: 80px;
    height: 80px;
    flex-direction: column-reverse;
    gap: 4px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    z-index: 1;
  }
`;

// export const Text = styled.span`
//   font-size: 12px;
//   font-weight: 600;
// `;

export const IconPlus = styled.svg`
  @media (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
