import React from 'react';
import {capFirstLetter} from '../../utils/helpers';
import About from './about';
//import Contact from './contact';
//import Project from '../Project/project';
//import Resume from './resume';

//need to add actual navigation
function Navigation(props)
{
    const {
        navOptions= [],
        setCurrectOption,
        currentOption
    } = props;

    

    return (
        <div>
            <nav className='flex flex-wrap justify-around'>
            
                {navOptions.map((option) => (
                    <h2 className={`${currentOption.name === option.name && 'selected'}`}
                        key={option.name} onClick={() => 
                        {setCurrectOption(option)}}>
                                {capFirstLetter(option.name)}    
                        </h2>
                ))}
            </nav>
            <main>
                    <About currentOption= {currentOption}></About>
                    
            </main>
        </div>
    );

}

export default Navigation;

/**
 * <Contact></Contact>
                    <Project></Project>
                    <Resume></Resume>
 */