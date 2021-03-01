import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import Login from '../components/Login';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LoginView = () => (
  <div>
    <Container className="pt-4">
      <Row lg={6} className="justify-content-center">
        <Col lg={4}>
          <h3 className="text-center">Login</h3>
          <Login />
        </Col>
      </Row>
    </Container>
  </div>
);

export default LoginView;
