import styled from 'styled-components';
import imgPhone from './images/phone.png';

export const TitlePhoneBook = styled.h1`
  font-size: 35px;
  font-weight: 700;
  text-align: center;
  color: royalblue;
  /* padding-top: 5px; */
  /* padding-bottom: 15px; */
`;

export const TitleContacts = styled.h2`
  padding-bottom: 10px;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
`;

export const Section = styled.section`
  /*  padding-bottom: 30px; */
  padding-top: 30px;
  height: 320px;
  background-image: url(${imgPhone});

  background-repeat: no-repeat;
  background-size: 240px 320px;
`;

export const SectionContact = styled.section`
  padding-bottom: 30px;
  /* padding-top: 30px; */
`;
