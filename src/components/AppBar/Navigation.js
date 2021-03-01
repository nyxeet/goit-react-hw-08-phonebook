import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import Nav from 'react-bootstrap/Nav';

const Navigation = ({ isAuthenticated }) => (
  <Nav className="mr-auto">
    <NavLink to="/" exact className="nav-link">
      Главная
    </NavLink>

    {isAuthenticated && (
      <NavLink to="/contacts" exact className="nav-link">
        Контакты
      </NavLink>
    )}
  </Nav>
);
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
