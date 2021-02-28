import React from 'react';
import AuthNav from './AuthNav';
import Navigation from './Navigation';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

const AppBar = () => (
  <header style={styles.header}>
    <Navigation />
    <AuthNav />
  </header>
);

export default AppBar;
