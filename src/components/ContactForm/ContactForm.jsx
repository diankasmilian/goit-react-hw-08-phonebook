import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contact-operations';
import { useContacts } from 'hooks/useContacts';
import { Form } from './ContactForm.styled';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const {contacts} = useContacts();

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const sameName = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    sameName
      ? toast.error(`Користувач з таким ім'ям або номером вже існує`)
      : dispatch(addContact({name, number}));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <input
          onChange={handleInputChange}
          value={name}
          type="text"
          placeholder="Ім'я"
          name="name"
          autoComplete='off'
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <input
          onChange={handleInputChange}
          value={number}
          type="tel"
          name="number"
          placeholder="Номер"
          autoComplete='off'
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">
        Додати контакт
      </button>
    </Form>
  );
};

export default ContactForm;