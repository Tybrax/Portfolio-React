/*import statements*/
import React from 'react';
import { MainTitle } from './MainTitle.js';
import { Description } from './Description.js';
import logoGif from '../../images/gifLogo.gif';

const lightBlue = '#17A2b8';

export const Header = (props) => {
    return (
        <div>
            <MainTitle />
            <Description headline={lightBlue} gif={logoGif} />
        </div>
    )
};
