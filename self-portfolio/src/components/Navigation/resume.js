import React from "react";
import {capFirstLetter} from '../../utils/helpers';

function Resume(props)
{
    //create array here for skills

    const {currentOption}= props;
    return (
        <div>
            
            <h2>{capFirstLetter(currentOption.name)}</h2>
            <p>{currentOption.content}</p>

            {/** find a way to add this to navigation*/}
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