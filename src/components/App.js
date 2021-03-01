import React, { Component } from 'react';
import Layout from './Layout/Layout';
import { Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { Switch } from 'react-router-dom';
import HomeView from '../views/HomeView';
import RegisterView from '../views/RegisterView';
import LoginView from '../views/LoginView';
import ContactsView from '../views/ContactsView';
import { connect } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <Layout>
        <AppBar />
        <Switch>
          <PublicRoute path="/" exact component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            exact
            redirectTo="/todos"
            component={RegisterView}
          ></PublicRoute>
          <PublicRoute
            path="/login"
            restricted
            exact
            redirectTo="/todos"
            component={LoginView}
          ></PublicRoute>
          <PrivateRoute
            path="/todos"
            redirectTo="/login"
            component={ContactsView}
          />
        </Switch>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
