import React from "react";
import {capFirstLetter} from '../../utils/helpers';

function About(props)
{
    const mainText= 'I loved technology ever since I was a kid. Fast forward to the' 
    +' beginning of college and I was exposed to programming for the' 
    +' first time in my life. Now I have a degree in computer science and' 
    +' have acquired some experience with various technologies. I am excited'
    +' about what software I will build next.';
    

    const {currentOption}= props;
    //const [displayText, setDisplayText]= useState(true);

    return (
        <main>
            
            <h2>{capFirstLetter(currentOption.name)}</h2>
            <p>{currentOption.subtitle}</p>
            <br/><br/>
            <p>{mainText}</p>
            
            
        </main>
    );
}
//<p>{currentOption.message}</p>

export default About;