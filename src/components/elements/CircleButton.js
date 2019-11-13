import React from 'react'
// Styles
import { StyledCircleButton } from './styles/CircleButtonStyles'
// Arrow svg
import arrow from '../../img/left-arrow.svg'

const CircleButton = () => (
  <StyledCircleButton>
    <img src={arrow} alt="arrow" />
  </StyledCircleButton>
)

export default CircleButton
