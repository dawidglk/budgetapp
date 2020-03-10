import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import BudgetContainers from '../containers/BudgetContainers';
import SettingsContainers from '../containers/SettingsContainers';
import TrelloContainers from '../containers/TrelloContainers';
import Navigation from '../components/Navigation';


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


const Root = () => (
  <>
    <GlobalStyle/>
    <BrowserRouter>
      <>
        <Navigation/>
        <Wrapper>
          <Switch>
            <Route exact path='/' component={BudgetContainers}/>
            <Route path='/settings' component={SettingsContainers}/>
            <Route path='/tasks' component={TrelloContainers}/>
          </Switch>
        </Wrapper>
      </>
    </BrowserRouter>
  </>
)


export default Root;
