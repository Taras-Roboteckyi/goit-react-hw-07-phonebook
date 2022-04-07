import styled from 'styled-components';
import imgBG from './images/bookPhone.jpg';

export const Container = styled.div`
  /*-----Скидування стилів------*/

  html {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  ul,
  ol {
    /* list-style: none; */
    margin-top: 0;
    margin-bottom: 0;
  }
  img {
    display: block;
  }
  /*-------------Body--------------*/
  body {
    background-color: #ffffff;

    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-image: url(${imgBG}); */
  /* background-size: cover; */
  padding-top: 30px;
`;
