import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import Form from 'react-bootstrap/Form';

const Filter = ({ value, changeFilter }) => (
  <Form className="mb-2">
    <Form.Group controlId="formBasicFilter">
      <Form.Control
        type="text"
        name="filter"
        placeholder="Filter..."
        value={value}
        onChange={changeFilter}
        autoComplete="off"
      />
    </Form.Group>
  </Form>
);

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});
const mapDispatchToProps = dispatch => ({
  changeFilter: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
