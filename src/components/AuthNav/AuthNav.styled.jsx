import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Link = styled(NavLink)`
text-decoration: none;
font-family: var(--family);
font-weight: 400;
font-size: 16px;
color: #5C5A5D;
padding: 8px 5px;
border-radius: 7px;
transition: background-color 1s; 

&:hover, &:focus, &.active {
   color: #5C5A5D;
   background-color: #fff;

}
`

export const NavList = styled.div`
display: flex;
gap: 10px;
`