import PropTypes from 'prop-types';
import { Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { contactsFilter } from 'redux/filterSlice';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();
  const filterContact = e => {
    dispatch(contactsFilter(e.currentTarget.value));
  };

  return (
    <label>
      Filter
      <Input type="text" onChange={filterContact} value={value} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
