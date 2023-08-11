import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contact-operations';
import { getError, getIsLoading, getContacts } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';

const ContactView = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />

      <Filter />
      {isLoading && !error && <Loader />}
      {contacts.length > 0 && <ContactList />}
    </>
  );
};

export default ContactView;
