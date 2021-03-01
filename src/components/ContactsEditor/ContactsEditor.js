import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

class ContactsEditor extends Component {
  state = {
    text: '',
    tel: '',
  };
  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  handleTelChange = e => {
    this.setState({
      tel: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts } = this.props;
    const { text, tel } = this.state;
    if (contacts.some(contact => contact.name === text)) {
      alert(`${text} is already in contacts`);
    } else {
      this.props.onSubmit(text, tel);
    }

    this.setState({ text: '', tel: '' });
  };

  render() {
    return (
      <Form autoComplete="off" onSubmit={this.handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Name</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Number</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            className="TaskEditor-input"
            type="tel"
            name="number"
            placeholder="Enter number"
            value={this.state.tel}
            onChange={this.handleTelChange}
          />
        </InputGroup>

        <Button
          variant="dark"
          type="submit"
          block
          className="TaskEditor-button"
        >
          Добавить контакт
        </Button>
      </Form>
    );
  }
}
const mapStateToProps = state => ({
  contacts: contactsSelectors.getAllContacts(state),
});
const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => {
    return dispatch(contactsOperations.addContact(name, number));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsEditor);
