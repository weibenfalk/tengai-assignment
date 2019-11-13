import React from 'react'
// Styles
import {
  StyledAssignedTo,
  StyledAssignedToImage,
} from './styles/AssignedToStyles'

const AssignedTo = ({ title, data }) => {
  const mergeNames = () => {
    // If we only have one person, return that name
    if (data.length === 1) return data[0].name
    // Else merge the names to a string
    // Have to slice away the initial value from reduce also
    return data
      .reduce((mergedName, person, i) => {
        const divider = i + 1 === data.length ? 'and' : ','
        return `${mergedName} ${divider} ${person.name}`
      }, '')
      .slice(3)
  }

  return (
    <StyledAssignedTo>
      <h2>{title}</h2>
      <div className="wrapper">
        <div className="images">
          {data.map((person, i) => (
            <StyledAssignedToImage
              key={person.id}
              index={i}
              background={person.imgUrl}
              alt={person.name}
            />
          ))}
        </div>
        <div className="names">
          <p>{mergeNames()}</p>
        </div>
      </div>
    </StyledAssignedTo>
  )
}

export default AssignedTo
