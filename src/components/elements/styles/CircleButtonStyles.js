import styled from 'styled-components'
// Colors
import { colors } from '../../../colors'

export const StyledCircleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  min-width: 35px;
  min-height: 35px;
  border-radius: 50%;
  border: 3px solid ${colors.mediumGrey};
  box-sizing: border-box;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s linear;
  margin-right: 20px;

  img {
    max-width: 12px;
  }

  :hover {
    opacity: 0.5;
  }

  @media (min-width: 576px) {
    min-width: 45px;
    min-height: 45px;
    font-size: 22px;

    img {
      max-width: 15px;
    }
  }
`
