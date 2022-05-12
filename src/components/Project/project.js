import React from 'react';
import {capFirstLetter} from '../../utils/helpers';
import website from '../../assets/images/run-buddy-snapshot.png';
import generator from '../../assets/images/password-generator-screenshot.png';
import dictionary from '../../assets/images/WordFacts_DefaultState.png';
import sportStore from '../../assets/images/AllStarSportingGoods-screenshot.png';
import pcStore from '../../assets/images/Build-Your-PC_screenshot.png';

function Project(props)
{
    const mainText= 'Below is a list of my deployed projects as well as a screenshot of each project.';

    //arrays for deployed projects
    const links= [
    'https://randomguy1234.github.io/run-buddy-2.0/',
    'https://randomguy1234.github.io/password-generator/',
    'https://randomguy1234.github.io/word-facts/',
    'https://cryptic-sea-45670.herokuapp.com/',
    'https://build-your-pc-incorporated.herokuapp.com/'];

    const images= [website, generator, dictionary, sportStore, pcStore];

    const titles= ['Run Buddy', 'Password Generator', 'Word Facts', 'AllStar Sporting Goods','Build Your PC'];

    const {currentOption}= props;
    return (
        <main>
            <h2>{capFirstLetter(currentOption.name)}</h2>
            <p>{currentOption.subtitle}</p>
            <br/><br/>
            <p>{mainText}</p>
            <br/>
            
            <ul className='flex flex-wrap justify-around'>
                {links.map((link, i) =>
                (
                    <li className='flex flex-wrap justify-around'>
                        <a href={link}>
                            <img src={images[i]} alt= {titles[i]} className='rounded-lg w-1/2'></img>
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    );
}

//<p>{currentOption.message}</p>

export default Project;