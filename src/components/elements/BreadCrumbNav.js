import React from 'react'
// Components
import CircleButton from './CircleButton'
// Styles
import { StyledBreadCrumbNav } from './styles/BreadCrumbNavStyles'

const BreadCrumbNav = ({ department, title }) => (
  <StyledBreadCrumbNav>
    <CircleButton />
    <p className="department">{department}</p>
    <p className="divider">&rsaquo;</p>
    <p className="title">{title}</p>
  </StyledBreadCrumbNav>
)

export default BreadCrumbNav
