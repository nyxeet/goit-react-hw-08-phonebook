import React from 'react';
import ContactsEditor from '../components/ContactsEditor';
import ContactsFilter from '../components/ContactsFilter';
import ContactsList from '../components/ContactsList';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomeView = () => (
  <Container className="pt-4">
    <Row className="justify-content-center">
      <Col>
        <h3 className="text-center">Contacts</h3>
      </Col>
    </Row>
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
