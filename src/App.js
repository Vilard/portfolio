import React from 'react';
import {
  BrowserRouter,
  Redirect,
  // Switch,
  // Link,
  Route
} from "react-router-dom";
import Header from './components/Header/Header'
import Portfolio from './components/Portfolio/Portfolio'
import Contacts from './components/Contacts/Contacts'
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className='app-wrapper-content'> 
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contacts" component={Contacts}/>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
