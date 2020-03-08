import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BudgetPage from '../../views/BudgetPage';
import SettingsPage from '../../views/SettingsPage';
import Navigation from '../Navigation/Navigation';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body{
    font-family: 'Montserrat',sans-serif;
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
    <BrowserRouter>
      <>
        <Navigation/>
        <Wrapper>
          <Switch>
            <Route exact path='/' component={BudgetPage}/>
            <Route path='/settings' component={SettingsPage}/>
          </Switch>
        </Wrapper>
      </>
    </BrowserRouter>
  </>
)


export default App;
