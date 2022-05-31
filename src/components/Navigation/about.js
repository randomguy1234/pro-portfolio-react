import React from "react";
import {capFirstLetter} from '../../utils/helpers';

function About(props)
{
    const mainText= 'I loved technology ever since I was a kid. Fast forward to the' 
    +' beginning of college and I was exposed to programming for the' 
    +' first time in my life. Now I have a degree in computer science and' 
    +' have acquired some experience with various technologies. I look forward'
    +' to future projects and the new software that may come my way.';
    

    const {currentOption}= props;
    //const [displayText, setDisplayText]= useState(true);

    const recommendList= ['For more information on what I have accomplished, '
    +'please check out some of the links on this page: ',
    'the portfolio link under the banner',
    'the resume link under the banner', 
    'the link to my github account on the bottom left', 
    'the link to my linkedin account on the bottom right'];

    return (
        <main>
            
            <h2>{capFirstLetter(currentOption.name)}</h2>
            <p>{currentOption.subtitle}</p>
            <br/><br/>
            <p>{mainText}</p>
            <br />

            <ul>
                {recommendList.map((linkOptions) => <li>{linkOptions}</li>)}
            </ul>
        </main>
    );
}
//<p>{currentOption.message}</p>

export default About;