import React, {useState} from "react";
import { capFirstLetter } from "../../utils/helpers";
import website from '../../assets/images/run-buddy-snapshot.png';
import generator from '../../assets/images/password-generator-screenshot.png';
import dictionary from '../../assets/images/WordFacts_DefaultState.png';
import sportStore from '../../assets/images/AllStarSportingGoods-screenshot.png';
import pcStore from '../../assets/images/Build-Your-PC_screenshot.png';

/*import About from './about';
import Contact from './contact';
import Project from '../Project/project';
import Resume from './resume';*/

//tried to get main branch results with info from display branch and failed
function FullNav(props)
{
    const {currentOption}= props;

    const contactInfo= ['email address: michael.brown.pgrad@gmail.com ',
        'phone number: 914-309-0594 '];

    //arrays for deployed projects
    const links= [
        'https://randomguy1234.github.io/run-buddy-2.0/',
        'https://randomguy1234.github.io/password-generator/',
        'https://randomguy1234.github.io/word-facts/',
        'https://cryptic-sea-45670.herokuapp.com/',
        'https://build-your-pc-incorporated.herokuapp.com/'];
    
    const images= [website, generator, dictionary, sportStore, pcStore];
    
    const titles= ['Run Buddy', 'Password Generator', 'Word Facts', 'AllStar Sporting Goods', 'Build Your PC'];

    //create array here for skills
    const skillList= ['HTML', 'CSS', 'Javascript', 'APIs', 'Node.js', 'Express', 'SQL', 
        'MongoDB', 'PWA', 'React'];

    const [body]= useState([
        {context: ''},
        {context: contactInfo},
        {context: links, images, titles},
        {context: skillList}
    ]);

    const [usedBody, setUsedBody]= useState(body[0]);
    return(
        <div>
            <h2>{capFirstLetter(currentOption.name)}</h2>
            <p>{currentOption.subtitle}</p>
            <br /> <br />

            <p>{currentOption.mainText}</p>
            <br />
                
            
        </div>
    );
}

export default FullNav;
/**
 *  <ul>
                {body.map((option) => 
                (
                    <li>{option.context}</li>
                ))}
            </ul>
 */