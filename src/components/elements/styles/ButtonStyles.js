import styled from 'styled-components'
// Colors
import { colors } from '../../../colors'

export const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  min-height: 50px;
  border: 3px solid ${colors.mediumGrey};
  box-sizing: border-box;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s linear;
  padding: 0;

  span {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-size: 1.2rem;
  }

  :hover {
    opacity: 0.5;
  }

  @media (min-width: 576px) {
    min-width: 40px;
    font-size: 22px;
  }
`
