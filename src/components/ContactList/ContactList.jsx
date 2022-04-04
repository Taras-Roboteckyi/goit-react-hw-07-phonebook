//import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { itemsSelectors, itemsActions } from '../../redux/items';

import ContactListItem from '../ContactListItem/ContactListItem';

import { ListStyle } from './ContactList.styled';

const ContactList = () => {
  const visibleContact = useSelector(itemsSelectors.getVisibleItems);
  const dispatch = useDispatch();

  const onDeleteItems = id => dispatch(itemsActions.deleteItems(id));

  return (
    <ListStyle>
      {visibleContact.map(({ name, id, number }) => {
        return (
          <ContactListItem
            key={id}
            data={{ number, name, id }}
            onDeleteContact={() => onDeleteItems(id)}
          />
        );
      })}
    </ListStyle>
  );
};

export default ContactList;
