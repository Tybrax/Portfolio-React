/*import statements*/
import React from 'react';
import { MainTitle } from './MainTitle.js';
import { Description } from './Description.js';
import logoGif from '../images/gifLogo.gif';

const darkGrey = '#343A40';
const lightBlue = '#17A2b8';

export const Header = () => {
    return (
        <div>
            <MainTitle firstColor={darkGrey} />
            <Description headline={lightBlue} gif={logoGif} />
        </div>
    )
};
