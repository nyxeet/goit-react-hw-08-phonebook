import React from 'react';
import Layout from './Layout/Layout';
import { Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { Switch } from 'react-router-dom';
import HomeView from '../views/HomeView';
import RegisterView from '../views/RegisterView';
import LoginView from '../views/LoginView';

const App = () => {
  return (
    <Layout>
      <AppBar />
      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/register" exact component={RegisterView}></Route>
        <Route path="/login" exact component={LoginView}></Route>
      </Switch>
    </Layout>
  );
};

export default App;
