import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contact-operations';
import { useContacts } from 'hooks/useContacts';
import { List, Item, Text, Button } from './ContactList.styled';
import { MdDelete } from "react-icons/md";


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
    <List>
      {filterContacts.map(({ id, name, number }) => (
        <Item className="contact-item" key={id}>
          <Text>Ім'я: {name}</Text>
          <Text>Телефон: {number}</Text>
          <Button className="button-remove" onClick={() => onRemoveContact(id)}>
            <MdDelete size={25} color='#fff'/>
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;