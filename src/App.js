import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from './components/NavBar.js';
import { MainTitle } from './components/MainTitle.js';
import { Description } from './components/Description.js';
import { Resume } from './components/Resume.js';

import logoWhite from './images/logo_w.png';
import logoBlack from './images/logo_b.png';

const darkGrey = '#343A40';
const darkGreen = '#00A651';
const lightBlue = '#17A2b8';
const lightGreen = '#00A651';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar logo={logoWhite} />
        <MainTitle firstColor={darkGrey} />
        <Description headline={lightBlue} logoBlack={logoBlack} quoteColor={darkGrey} workColor={lightGreen}/>
      </header>
      <body>
        <Resume />
      </body>
    </div>
  );
}

export default App;

