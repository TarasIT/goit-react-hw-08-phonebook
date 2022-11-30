import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 20px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 500;
  :first-child {
    margin-right: 20px;
  }
  &.active {
    color: orangered;
  }
`;
