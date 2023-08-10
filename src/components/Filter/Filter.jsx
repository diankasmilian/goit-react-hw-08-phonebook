import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { useContacts } from 'hooks/useContacts';
import { Container, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const filterValue = e.target.value.toLowerCase();

    dispatch(setFilter(filterValue));
  };

  const {filter} = useContacts();
  return (
    <Container>
      <Input
        type="text"
        name="filter"
        value={filter}
        placeholder='Пошук контакту'
        onChange={handleFilterChange}
      />
    </Container>
  );
};

export default Filter;
