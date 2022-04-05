//import PropTypes from 'prop-types';
//import { useSelector, useDispatch } from 'react-redux';

//import { itemsSelectors, itemsActions } from '../../redux/items';
import { Api } from '../../redux/items';

import ContactListItem from '../ContactListItem/ContactListItem';

import { ListStyle } from './ContactList.styled';

const ContactList = () => {
  /* const visibleContact = useSelector(itemsSelectors.getVisibleItems);
  const dispatch = useDispatch();

  const onDeleteItems = id => dispatch(itemsActions.deleteItems(id)); */
  const { data, error, isLoading } = Api.useFetchContactsQuery();
  const [onDeleteItems] = Api.useDeleteContactsMutation();

  return (
    <ListStyle>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        data.map(({ name, id, phone }) => {
          return (
            <ContactListItem
              key={id}
              data={{ phone, name, id }}
              onDeleteContact={() => onDeleteItems(id)}
            />
          );
        })
      ) : null}
    </ListStyle>
  );
};

export default ContactList;
