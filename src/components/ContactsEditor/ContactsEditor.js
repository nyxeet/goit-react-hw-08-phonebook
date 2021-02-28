import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import './ContactsEditor.css';

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
      <form className="TaskEditor" onSubmit={this.handleSubmit}>
        <label className="TaskEditor-label">
          Name
          <input
            className="TaskEditor-input"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>
        <label className="TaskEditor-label">
          Tel
          <input
            className="TaskEditor-input"
            type="tel"
            value={this.state.tel}
            onChange={this.handleTelChange}
          />
        </label>

        <button type="submit" className="TaskEditor-button">
          Добавить контакт
        </button>
      </form>
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
