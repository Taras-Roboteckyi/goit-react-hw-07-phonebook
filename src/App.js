//import { useState } from 'react';
//import { nanoid } from 'nanoid';

import ContactForm from './components/Form/Form';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

import { Container } from './App.global.styled';
import { TitlePhoneBook, TitleContacts, Section } from './App.styled';

export default function App() {
  return (
    <Container>
      <Section>
        <TitlePhoneBook>Phonebook</TitlePhoneBook>
        <ContactForm></ContactForm>
      </Section>

      <Section>
        <TitleContacts>Contacts</TitleContacts>

        <Filter></Filter>

        <ContactList></ContactList>
      </Section>
    </Container>
  );
}
