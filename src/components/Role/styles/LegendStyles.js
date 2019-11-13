import styled from 'styled-components'
// Colors
import { colors } from '../../../colors'

export const StyledLegend = styled.div`
  grid-area: legend;
`

export const StyledAttribute = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  height: 35px;

  p {
    flex: 80%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9rem;
    font-weight: 800;
    text-align: left;
    color: ${colors.darkGrey};

    @media (min-width: 576px) {
      text-align: right;
    }
  }
  .badge-wrapper {
    flex: 20%;
    box-sizing: border-box;

    .badge {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1rem;
      font-weight: 800;
      float: right;
      color: ${props => (props.id === 2 ? colors.baseColor : '#fff')};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 27px;
      height: 25px;
      border-radius: 5px;
      background: ${props => props.color};
    }
  }
`
