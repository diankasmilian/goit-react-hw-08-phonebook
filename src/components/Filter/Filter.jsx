import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { useContacts } from 'hooks/useContacts';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const filterValue = e.target.value.toLowerCase();

    dispatch(setFilter(filterValue));
  };

  const {filter} = useContacts();
  return (
    <div>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
