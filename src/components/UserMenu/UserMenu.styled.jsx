import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Link = styled(NavLink)`
  padding: 20px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 500;
  margin-right: 20px;

  &.active {
    color: orangered;
  }
`;

export const UserEmail = styled(NavLink)`
  border-radius: 4px;
  color: black;
  font-weight: 500;
  margin-right: 20px;
`;

export const LogOutBtn = styled.button`
  min-width: 150px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 18px;
  background-color: #e2e2e2;

  :hover,
  :focus {
    background-color: orangered;
  }
`;
