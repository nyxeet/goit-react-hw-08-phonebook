import React from 'react';

import Register from '../components/Register';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RegisterView = () => (
  <Container className="pt-4">
    <Row lg={6} className="justify-content-center">
      <Col lg={4}>
        <h3 className="text-center">Register</h3>
        <Register />
      </Col>
    </Row>
  </Container>
);

export default RegisterView;
