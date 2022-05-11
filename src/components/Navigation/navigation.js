import React from 'react';
import {capFirstLetter} from '../../utils/helpers';
import About from './about';
import Contact from './contact';
import Project from '../Project/project';
import Resume from './resume';


function Navigation(props)
{
    const {
        navOptions= [],
        setCurrectOption, currentOption,
    } = props;

    

    return (
        <div>
            <nav className='flex flex-wrap justify-around'>
            
                {navOptions.map((option) => (
                    <h2 className={`${currentOption.name === option.name && 'selected'}`}
                        key={option.name} onClick={() => 
                        {setCurrectOption(option);}}>
                                {capFirstLetter(option.name)}    
                        </h2>
                ))}
            </nav>
            <main>
                    <About 
                        currentOption= {currentOption}
                        ></About>
                    
                    <Contact
                    currentOption= {currentOption}
                        ></Contact>
                    
                    <Project
                    currentOption= {currentOption}
                        ></Project>

                    <Resume
                    currentOption= {currentOption}
                        ></Resume>

                    
            </main>
        </div>
    );

}

export default Navigation;

/**
 *  <Contact></Contact>
    <Project></Project>
    <Resume></Resume>

    <About currentOption= {currentOption}></About>
                    <Contact currentOption= {currentOption}></Contact>
                    <Project currentOption= {currentOption}></Project>
                    <Resume currentOption= {currentOption}></Resume>

    ,displayAbout,
    setDisplayAbout                

    {(function() 
                    {
                        if (currentOption.name === 'resume') return <Resume currentOption={currentOption}></Resume>
                        else if (currentOption.name === 'contact') return <Contact currentOption={currentOption}></Contact>
                        else if (currentOption.name === 'project') return <Project currentOption={currentOption}></Project>
                        else return <About currentOption={currentOption}></About>
                    })}
 */