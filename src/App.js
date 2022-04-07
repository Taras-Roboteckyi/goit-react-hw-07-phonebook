import { useState } from 'react';
//import { nanoid } from 'nanoid';

import ContactForm from './components/Form/Form';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

import { Api } from './redux/items';

import { Container } from './App.global.styled';
import { TitlePhoneBook, TitleContacts, Section, SectionContact } from './App.styled';

export default function App() {
  const [filter, setFilter] = useState('');

  const { data, error, isLoading } = Api.useFetchContactsQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const [onDeleteItems] = Api.useDeleteContactsMutation();

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getFilterContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return data.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  };
  return (
    <Container>
      <div>
        <Section>
          <TitlePhoneBook>Phonebook</TitlePhoneBook>
          <ContactForm></ContactForm>
        </Section>
      </div>

      <SectionContact>
        <TitleContacts>Contacts</TitleContacts>

        <Filter value={filter} onChange={changeFilter}></Filter>

        {error && <h2>Oh no, there was an error</h2>}
        {isLoading && <> Loading...</>}
        {data && (
          <ContactList data={getFilterContact()} onDeleteContact={onDeleteItems}></ContactList>
        )}
      </SectionContact>
    </Container>
  );
}
