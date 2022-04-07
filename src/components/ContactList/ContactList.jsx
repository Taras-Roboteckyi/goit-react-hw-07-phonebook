import ContactListItem from '../ContactListItem/ContactListItem';

import { ListStyle } from './ContactList.styled';

const ContactList = ({ data, onDeleteContact }) => {
  return (
    <ListStyle>
      {data.map(({ name, id, phone }) => {
        return (
          <ContactListItem
            key={id}
            data={{ phone, name, id }}
            onDeleteContact={() => onDeleteContact(id)}
          />
        );
      })}
    </ListStyle>
  );
};

export default ContactList;
