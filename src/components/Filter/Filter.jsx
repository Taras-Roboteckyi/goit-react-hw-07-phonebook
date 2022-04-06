import { nanoid } from 'nanoid';

import { Api } from '../../redux/items';
//import { useSelector, useDispatch } from 'react-redux';
//import { itemsSelectors, itemsActions } from '../../redux/items';

import { LabelFilterStyle, InputFilterStyle } from './Filter.styled';

const generateId = nanoid();

const Filter = () => {
  /* const value = useSelector(itemsSelectors.getFilter);
  const dispatch = useDispatch(); */
  /* const getFilterContact = evt => {
    const nameFilter = evt.currentTarget.elements.filter.value;
    console.log(nameFilter);
    const { data, error, isLoading } = Api.useFetchContactsQuery(undefined, {
      selectFromResult: ({ data }) => ({
        post: data?.find(({ name }) => name.toLowerCase() === nameFilter.toLowerCase()),
      }),
    });
  }; */

  return (
    <LabelFilterStyle htmlFor={generateId}>
      Find contacts by name
      <InputFilterStyle
        type="text"
        name="filter"
        autoComplete="off"
        /*  value={value} */
        /* onChange={getFilterContact()} */
        id={generateId}
      />
    </LabelFilterStyle>
  );
};

export default Filter;
