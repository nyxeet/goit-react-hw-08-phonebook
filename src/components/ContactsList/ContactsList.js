import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import ContactsFilter from '../ContactsFilter';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

class TaskList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div>
        <ContactsFilter />
        <ListGroup as="ul">
          {this.props.contacts.map(({ id, name, number }) => (
            <ListGroup.Item as="li" key={id}>
              <Row>
                <Col md={4}>
                  <span className="font-weight-bold mr-3">{name}</span>
                  <a href={`tel:${number}`} className="mr-3">
                    {number}
                  </a>
                </Col>
                <Col md={{ span: 4, offset: 4 }}>
                  <Button
                    variant="dark"
                    className="ml-5"
                    onClick={() => this.props.onRemove(id)}
                  >
                    Удалить
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  onRemove: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
