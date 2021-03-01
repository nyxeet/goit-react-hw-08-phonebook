import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const AuthNav = () => (
  <Nav>
    <NavLink to="/register" exact className="nav-link">
      Регистрация
    </NavLink>
    <NavLink to="/login" exact className="nav-link">
      Логин
    </NavLink>
  </Nav>
);

export default AuthNav;
