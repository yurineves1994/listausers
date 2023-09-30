import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarWrapper = styled.header`
  background-color: #007bff;
  padding: 10px;
`;

export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  display: inline;
  margin-right: 10px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
