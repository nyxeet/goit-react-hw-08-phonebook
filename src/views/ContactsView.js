import React from 'react';
import ContactsEditor from '../components/ContactsEditor';
import ContactsList from '../components/ContactsList';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomeView = () => (
  <Container className="pt-4">
    <Row>
      <Col lg={5}>
        <ContactsEditor />
      </Col>
      <Col lg="7">
        <ContactsList />
      </Col>
    </Row>
  </Container>
);

export default HomeView;
