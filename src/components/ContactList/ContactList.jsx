import { Api } from '../../redux/items';

import ContactListItem from '../ContactListItem/ContactListItem';

import { ListStyle } from './ContactList.styled';

const ContactList = () => {
  const { data, error, isLoading } = Api.useFetchContactsQuery();
  const [onDeleteItems] = Api.useDeleteContactsMutation();

  return (
    <ListStyle>
      {error && <h2>Oh no, there was an error</h2>}
      {isLoading && <> Loading...</>}
      {data &&
        data.map(({ name, id, phone }) => {
          return (
            <ContactListItem
              key={id}
              data={{ phone, name, id }}
              onDeleteContact={() => onDeleteItems(id)}
            />
          );
        })}
    </ListStyle>
  );
};

export default ContactList;
