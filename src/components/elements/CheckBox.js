import React from 'react'
// Styles
import { StyledCheckBox } from './styles/CheckBoxStyles.js'

const CheckBox = ({ title, checked, callback }) => (
  <StyledCheckBox>
    <label className="container">
      {title}
      <input
        type="checkbox"
        name={title}
        checked={checked}
        onChange={callback}
      />
      <span className="checkmark"></span>
    </label>
  </StyledCheckBox>
)

export default CheckBox
