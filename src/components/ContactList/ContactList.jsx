import { useSelector } from 'react-redux';
import { getFilter, getContacts } from 'redux/contacts/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contact-operations';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const onRemoveContact = id => {
    dispatch(deleteContact(id))};



  return (
    <ul>
      {filterContacts.map(({ id, name, number }) => (
        <li className="contact-item" key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button className="button-remove" onClick={() => onRemoveContact(id)}>
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;