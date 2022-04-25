import React from "react";
//import {capFirstLetter} from '../../utils/helpers';

function Resume()
{
    //create array here for skills

    //const {currentOption}= props;
    return (
        <div>
            
            <h2>Resume</h2>
            <p>Here is a list of some of the skills that I have.</p>

            {/** find a way to add this to navigation*/}
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>SQL</li>
                <li>NoSQL</li>
                <li>PWA</li>
            </ul>
        </div>
    );
}

//<h3>{currentOption.message}</h3>
export default Resume;