import styled from "styled-components";
// Colors
import { colors } from "../../../colors";

export const StyledRole = styled.div`
  max-width: 960px;
  padding: 20px;
  margin: 0 auto;

  .top {
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(320px, 500px)); */

    @media (min-width: 576px) {
      grid-template-columns: [col] 5fr [col] 1fr;
    }

    h2 {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1.2rem;
      color: ${colors.baseColor};
      text-align: center;

      @media (min-width: 576px) {
        text-align: left;
        font-size: 1.5rem;
      }

      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }

    .donut-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (min-width: 576px) {
        align-items: flex-end;
      }
    }
  }

  .bottom {
    display: grid;
    margin: 40px 0;
    grid-template-areas: "legend" "description" "assigned-to";

    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr 1fr;
    
      grid-template-areas: "description assigned-to legend";
    }
  }
`;
