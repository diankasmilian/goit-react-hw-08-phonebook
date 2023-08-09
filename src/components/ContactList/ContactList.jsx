import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contact-operations';
import { useContacts } from 'hooks/useContacts';

const ContactList = () => {
  const {contacts} = useContacts();
  const {filter} = useContacts();

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