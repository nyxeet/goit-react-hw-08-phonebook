import React from 'react';
import { connect } from 'react-redux';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import Navigation from './Navigation';
import authSelectors from '../../redux/auth/auth-selectors';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const AppBar = ({ isAuthenticated }) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>Phonebook App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
