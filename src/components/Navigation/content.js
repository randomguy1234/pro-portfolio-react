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

//this component was designed to implement all navagation through 1 component
//this puts all info on 1 page, I would prefer to deconstruct it to multiple components for better upkeep

function Content(props)
{
    const {currentOption}= props;

    //extra content for about component
    const recommendList= ['For more information on what I have accomplished, '
    +'please check out some of the links on this page: ',
    'the portfolio link under the banner',
    'the resume link under the banner', 
    'the link to my github account on the bottom left', 
    'the link to my linkedin account on the bottom right'];


    //extra content for contact component
    const contactInfo= ['email address: michael.brown.pgrad@gmail.com ',
        'phone number: 914-309-0594 '];


    //extra content for project component
    const links= [
        'https://randomguy1234.github.io/run-buddy-2.0/',
        'https://randomguy1234.github.io/password-generator/',
        'https://randomguy1234.github.io/word-facts/',
        'https://cryptic-sea-45670.herokuapp.com/',
        'https://build-your-pc-incorporated.herokuapp.com/'];
    
    const images= [website, generator, dictionary, sportStore, pcStore];
    
    const titles= ['Run Buddy', 'Password Generator', 'Word Facts', 'AllStar Sporting Goods', 'Build Your PC'];


    //extra content for resume component
    const skillList= ['HTML', 'CSS', 'Javascript', 'APIs', 'Node.js', 'Express', 'SQL', 
        'MongoDB', 'PWA', 'React'];

    //display options for eacah component
    const aboutDisplay= recommendList.map((linkOptions) => <li>{linkOptions}</li>);    
    const contactDisplay= contactInfo.map((info) => (<li>{info}</li>));
    const projectDisplay= links.map((link, i) =>
        (
            <li className='flex flex-wrap justify-around'>
                <a href={link}>
                    <img src={images[i]} alt= {titles[i]} className='rounded-lg w-1/2'></img>
                </a>
            </li>
        ));
    const resumeDisplay= skillList.map((skill) => <li>{skill}</li >);
    

    const [body]= useState([
        {context: aboutDisplay},
        {context: contactDisplay},
        {context: projectDisplay},
        {context: resumeDisplay}
    ]);

    const [currentBody, setCurrentBody]= useState(body[0]);

    return(
        <div>
            <h2>{capFirstLetter(currentOption.name)}</h2>
            <p>{currentOption.subtitle}</p>
            <br /> <br />

            <p>{currentOption.mainText}</p>
            <br />

            
            <ul setCurrentBody= {setCurrentBody(body[currentOption.reference])}>
            
                {currentBody.context}
            </ul>
                
            
        </div>
    );
}

export default Content;
/**
 *  <ul>
                {body.map((option) => 
                (
                    <li>{option.context}</li>
                ))}
            </ul>
 */