import React from 'react';
import github from '../../assets/images/github-icon.png';
import linkedin from '../../assets/images/linkedin-icon.png';

function Footer()
{
    return (
        <div className='flex flex-wrap justify-around'>
            <a href='https://github.com/randomguy1234'>
                <img src={github} alt='' className='rounded-lg'></img>
            </a>

            <a href='https://www.linkedin.com/in/michael-brown-39409817a/'>
                <img src={linkedin} alt='' className='rounded-lg'></img>
            </a>
        </div>
    );
}

export default Footer;