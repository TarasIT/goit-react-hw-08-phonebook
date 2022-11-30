import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { List } from './ContactList.styled';

export const ContactList = ({ children }) => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ name, id, number }) => {
        return <ContactItem key={id} name={name} id={id} number={number} />;
      })}
      {children}
    </List>
  );
};
