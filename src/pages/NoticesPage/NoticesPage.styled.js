import styled from "styled-components";

export const NoticesContainer = styled.div`
  position: relative;
  margin: 0 auto;

  @media (max-width: 767px) {
    /* position: relative; */
    width: 280px;
  }

  @media (min-width: 768px) {
    /* gap: 92px; */
    width: 704px;
  }

  @media (min-width: 1280px) {
    /* gap: 403px; */
    width: 1248px;
  }
`;
