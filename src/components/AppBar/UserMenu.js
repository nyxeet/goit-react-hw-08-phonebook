import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

const UserMenu = ({ name, onLogout }) => (
  <div>
    <Navbar.Text className="mr-3">Welcome, {name} </Navbar.Text>
    <Button variant="outline-info" type="button" onClick={onLogout}>
      Logout
    </Button>
  </div>
);
const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
});
const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
