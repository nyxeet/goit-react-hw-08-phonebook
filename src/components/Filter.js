import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../redux/contacts/contacts-actions';
import contactsSelectors from '../redux/contacts/contacts-selectors';

const Filter = ({ value, changeFilter }) => (
  <label>
    Find contacts by name
    <br />
    <input type="text" value={value} onChange={changeFilter} />
  </label>
);

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});
const mapDispatchToProps = dispatch => ({
  changeFilter: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
