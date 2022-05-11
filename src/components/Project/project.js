import React from 'react';
import {capFirstLetter} from '../../utils/helpers';

function Project(props)
{
    //const subtitle= 'Here is the list of some of my projects.';
    const {currentOption}= props;
    return (
        <main>
            <h2>{capFirstLetter(currentOption.name)}</h2>
            <p>{currentOption.subtitle}</p>
            
        </main>
    );
}

//<p>{currentOption.message}</p>

export default Project;