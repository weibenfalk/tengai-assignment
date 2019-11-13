import styled from 'styled-components'
// Colors
import { colors } from '../../../colors'

export const StyledCheckBox = styled.div`
  .container {
    font-family: Arial, Helvetica, sans-serif;
    color: ${colors.baseColor};
    padding: 2px 0 0 40px;
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 800;
    user-select: none;

    /* Hide the browser's default checkbox */
    .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    /* Hide the browser's default checkbox */
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
      background-color: ${props => colors.mediumGrey};
      border-radius: 50%;
      transition: all 0.2s linear;

      /* Create the checkmark/indicator (hidden when not checked) */
      :after {
        content: '';
        position: absolute;
        display: none;
      }
    }

    /* On mouse-over, add a grey background color */
    :hover input ~ .checkmark {
      background-color: ${colors.darkGrey};
    }

    .checkmark:after {
      left: 7px;
      top: 3px;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }

    /* When the checkbox is checked, add a blue background */
    input:checked ~ .checkmark {
      background-color: #2196f3;
    }

    /* Show the checkmark when checked */
    input:checked ~ .checkmark:after {
      display: block;
    }
  }
`
