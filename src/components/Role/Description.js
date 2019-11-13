import React from 'react';
// Styles
import { StyledDescription } from './styles/DescriptionStyles';

const Description = ({ title, text }) => (
  <StyledDescription>
    <h2>{title}</h2>
    <p>{text}</p>
  </StyledDescription>
)

export default Description;