import React from 'react';
import { Link, NavList } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <NavList>
      <Link
        to="/register"
      >
        Реєстрація
      </Link>
      <Link
        to="/login"
      >
        Логін
      </Link>
    </NavList>
  );
}