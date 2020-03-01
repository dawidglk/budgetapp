import React from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body{
    font-family: 'Montserrat';
    font-size: 1.6rem;
  }
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;


const App = () => (
  <>
    <GlobalStyle/>
    <Wrapper>
      <Header/>
      <Main/>
    </Wrapper>
  </>
)


export default App;
