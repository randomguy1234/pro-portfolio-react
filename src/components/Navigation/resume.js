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
            <br /><br />

            <p>{mainText}</p>
            <br />
            
            <ul>
                {skillList.map((skill) => <li>{skill}</li >) }
            </ul>
        </div>
    );
}

//<h3>{currentOption.message}</h3>
export default Resume;