import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  font-family: var(--family);
  font-weight: 400;
  font-size: 16px;
  color: var(--text-color);
  padding: 8px 5px;
  border-radius: 7px;
  transition: background-color 1s;

  &:hover,
  &:focus,
  &.active {
    background-color: #fff;
  }
`;

export const NavList = styled.nav`
  display: flex;
  gap: 10px;
`;
