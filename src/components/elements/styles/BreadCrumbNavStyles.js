import styled from 'styled-components'
// Colors
import { colors } from '../../../colors'

export const StyledBreadCrumbNav = styled.div`
  display: flex;
  align-items: center;

  .department,
  .divider,
  .title {
    font-family: Arial, Helvetica, sans-serif;
    margin-right: 10px;
  }

  .department,
  .title {
    font-size: 0.7rem;
    font-weight: 800;

    @media (min-width: 576px) {
      font-size: 0.9rem;
    }
  }

  .department {
    color: ${colors.darkGrey};
  }

  .divider {
    font-size: 1rem;
    font-weight: 800;
    color: ${colors.darkGrey};
  }

  .title {
    color: ${colors.baseColor};
  }
`
