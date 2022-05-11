import React from "react";
import {capFirstLetter} from '../../utils/helpers';

function Resume(props)
{
    //create array here for skills
    const skillList= ['HTML', 'CSS', 'Javascript', 'APIs', 'Node.js', 'Express', 'SQL', 
        'MongoDB', 'PWA', 'React'];
    const mainText= 'Here is a list of some of the technologies that I have used before.';    

    const {currentOption}= props;
    return (
        <div>
            
            <h2>{capFirstLetter(currentOption.name)}</h2>
            <p>{currentOption.subtitle}</p>

            
            <p>{mainText}</p>
            {/** convert this into loop for array*/}
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>PWA</li>
            </ul>
        </div>
    );
}

//<h3>{currentOption.message}</h3>
export default Resume;