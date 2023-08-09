import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const {isLoggedIn} = useAuth()
  return (
    <nav>
      <NavLink to="/">Головна</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Контакти</NavLink>}
    </nav>
  );
};
