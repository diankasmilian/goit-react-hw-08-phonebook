import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { Link, NavList } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavList>
      <Link to="/">Головна</Link>
      {isLoggedIn && <Link to="/contacts">Контакти</Link>}
    </NavList>
  );
};
