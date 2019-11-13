import styled from 'styled-components';
// Colors
import { colors } from '../../../colors';

export const StyledAssignedTo = styled.div`
  padding-right: 20px;
  grid-area: assigned-to;

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9rem;
    color: ${colors.darkGrey};
    margin-bottom: 30px;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
  }

  .wrapper {
    display: grid;
    grid-template-columns: [col] 1fr [col] 3fr;
    min-height: 60px;

    .images {
      position: relative;
      min-width: 70px;
    }

    .names {
      p {
        font-family: Arial, Helvetica, sans-serif;
        color: ${colors.baseColor};
        font-weight: 800;
        font-size: 1rem;
      }
    }
  }
`;

export const StyledAssignedToImage = styled.div`
  position: absolute;
  left: ${props => 15 * props.index + 'px'};
  border-radius: 50%;
  border: 3px solid #fff;
  z-index: ${props => 10000 - props.index};
  background: url(${props => props.background});
  background-size: cover;
  background-position: center;
  width: 40px;
  height: 40px;
`