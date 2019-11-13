import React from 'react'
// Styles
import { StyledLegend, StyledAttribute } from './styles/LegendStyles'

const Legend = ({ data }) => (
  <StyledLegend>
    {data.map(att => (
      <StyledAttribute color={att.cssColor} id={att.id} key={att.id}>
        <p>{att.title}</p>
        <div className="badge-wrapper">
          <div className="badge">{att.count}</div>
        </div>
      </StyledAttribute>
    ))}
  </StyledLegend>
)

export default Legend
