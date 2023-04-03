import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { DeleteButton, FullName, Item, Number } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  let newStr = contact.name
    .split(' ')
    .map(str => {
      return str[0].toUpperCase() + str.toLowerCase().slice(1);
    })
    .join(' ');

  return (
    <Item id={contact.id}>
      <FullName>{newStr}:</FullName>
      <Number>{contact.number}</Number>
      <DeleteButton
        type="button"
        onClick={() => dispatch(deleteContacts(contact.id))}
      >
        Delete
      </DeleteButton>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({}),
};
