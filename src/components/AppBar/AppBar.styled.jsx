import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  > nav {
    display: flex;
    margin-left: auto;
  }
`;

export const Link = styled(NavLink)`
  padding: 20px 10px;
  margin-right: auto;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 500;

  &.active {
    color: orangered;
  }
`;
