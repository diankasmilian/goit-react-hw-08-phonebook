import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const filterValue = e.target.value.toLowerCase();

    dispatch(setFilter(filterValue));
  };

  const filter = useSelector(getFilter);
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
