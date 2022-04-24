import React from 'react';
//import About from '../Header/about';
//import Contact from '../Header/contact';

const handleClick = (item) => {
    console.log(item);
    return item;
  };

//need to add actual navigation
function Nav()
{
    return (
        <nav className='flex flex-wrap justify-around'>
            <a href='#about-me' onClick={() => handleClick('About Me')}>
                <h2>About Me</h2>
            </a>

            <a href='#project.js' onClick={() => handleClick('Portfolio')}>
                <h2>Portfolio</h2>
            </a>

            <a href='#contact' onClick={() => handleClick('Contact')}>
                <h2>Contact</h2>
            </a>

            <a href='#resume' onClick={() => handleClick('Resume')}>
                <h2>Resume</h2>
            </a>
        </nav>
    );
}

export default Nav;