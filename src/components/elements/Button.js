import React from 'react'
// Styles
import { StyledButton } from './styles/ButtonStyles'
// Should off course have a callback also
// for click event
const Button = ({ title }) => (
  <StyledButton>
    <span>{title}</span>
  </StyledButton>
)

export default Button
