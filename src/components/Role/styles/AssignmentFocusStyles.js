import styled from 'styled-components'
// Colors
import { colors } from '../../../colors'

export const StyledAssignmentFocus = styled.div`
  padding: 0;

  .assignment-header {
    display: flex;
    justify-content: space-between;
    min-height: 20px;
    border-bottom: 1px solid ${colors.mediumGrey};
    margin-bottom: 30px;
  }

  .assignment-bottom {
    display: block;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 576px) {
      display: flex;
    }

    .checkboxes {
      flex: 80%;
      min-height: 80px;
      display: grid;
      grid-row-gap: 30px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      margin-bottom: 40px;

      @media (min-width: 576px) {
        margin-bottom: 0;
      }
    }

    .button {
      flex: 20%;
    }
  }

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    color: ${colors.baseColor};
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9rem;
    font-weight: 800;
    text-align: left;
    color: ${colors.darkGrey};
  }
`
