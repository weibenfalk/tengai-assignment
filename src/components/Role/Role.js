import React, { useState } from 'react'
import DonutChart from './DonutChart'
// Components
import BreadCrumbNav from '../elements/BreadCrumbNav'
import Description from './Description'
import AssignedTo from './AssignedTo'
import Legend from './Legend'
import AssignmentFocus from './AssignmentFocus';
// Styles
import { StyledRole } from './styles/RoleStyles'
// Mocked data
import { mockedData } from '../../mockData'

const Role = () => {
  const [{ department, title, roleDescription, assignedTo, data }] = useState(
    mockedData
  )

  return (
    <StyledRole>
      <BreadCrumbNav department={department} title={title} />
      <div className="top">
        <h2>{title}</h2>
        <div className="donut-wrapper">
          <DonutChart data={data.entries} />
        </div>
      </div>
      <div className="bottom">
        <Description title="Role Description" text={roleDescription} />
        <AssignedTo title="Assigned to" data={assignedTo} />
        <Legend data={data.entries} />
      </div>
      <AssignmentFocus />
    </StyledRole>
  )
}

export default Role
