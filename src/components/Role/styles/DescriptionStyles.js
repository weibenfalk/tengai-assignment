import styled from 'styled-components';
// Colors
import { colors } from '../../../colors';

export const StyledDescription = styled.div`
  padding-right: 20px;
  grid-area: description;

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
`;