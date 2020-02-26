import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from './components/NavBar.js';
import { MainTitle } from './components/MainTitle.js';
import { Description } from './components/Description.js';

import logoWhite from './images/logo_w.png';
import logoBlack from './images/logo_b.png';

const darkGrey = '#343A40';
const darkGreen = '#00a651';
const lightBlue = '#17a2b8';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar logo={logoWhite} />
        <MainTitle firstColor={darkGrey} />
        <Description logoBlack={logoBlack} quoteColor={lightBlue}/>
      </header>
    </div>
  );
}

export default App;

