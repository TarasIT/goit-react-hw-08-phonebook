import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';
import {
  Contacts,
  Phonebook,
  NoContactsMessage,
  Title,
} from './Contacts.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Phonebook>
        <Title>Phonebook</Title>
        <ContactForm />

        {contacts.length !== 0 ? (
          <>
            <Contacts>Your contacts</Contacts>
            <Filter />
            {filteredContacts.length !== 0 ? (
              <ContactList />
            ) : (
              <NoContactsMessage>No matches found</NoContactsMessage>
            )}
          </>
        ) : (
          <NoContactsMessage>
            There are no contacts yet. Please fill the form to add a new one!
          </NoContactsMessage>
        )}

        {isLoading && !error && <Loader />}
      </Phonebook>
    </>
  );
};

export default ContactsPage;
