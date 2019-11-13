import React, { useState } from 'react'
// Mocked checkbox data
import { mockedCheckboxes } from '../../mockData'
// Components
import CheckBox from '../elements/CheckBox'
import Button from '../elements/Button'
// Styles
import { StyledAssignmentFocus } from './styles/AssignmentFocusStyles'

const AssignmentFocus = () => {
  // Controlled checkbox components
  // That's why state is needed
  const [checkBoxState, setCheckBoxState] = useState(mockedCheckboxes)

  const handleCheckBox = e => {
    const name = e.currentTarget.name
    const newState = [...checkBoxState].map(checkbox => {
      if (checkbox.title === name) {
        return { ...checkbox, checked: !checkbox.checked }
      }
      return checkbox
    })
    setCheckBoxState(newState)
  }

  return (
    <StyledAssignmentFocus>
      <div className="assignment-header">
        <h2>Assignment Focus</h2>
        <p>About personality traits</p>
      </div>
      <div className="assignment-bottom">
        <div className="checkboxes">
          {checkBoxState.map(checkbox => (
            <CheckBox
              key={checkbox.title}
              title={checkbox.title}
              checked={checkbox.checked}
              callback={handleCheckBox}
            />
          ))}
        </div>
        <div className="button">
          <Button title="Change focus" />
        </div>
      </div>
    </StyledAssignmentFocus>
  )
}

export default AssignmentFocus
