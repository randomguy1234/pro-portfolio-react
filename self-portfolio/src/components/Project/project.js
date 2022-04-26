import React from 'react';
import {capFirstLetter} from '../../utils/helpers';

function Project(props)
{
    const {currentOption}= props;
    return (
        <main>
            <h2>{capFirstLetter(currentOption.name)}</h2>
            <p>{currentOption.content}</p>
            
        </main>
    );
}

//<p>{currentOption.message}</p>

export default Project;