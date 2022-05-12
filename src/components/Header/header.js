import React, {useState} from 'react';
import Navigation from '../Navigation/navigation';
import android from '../../assets/images/android-image.png';


function Header()
{
    const [navOptions]= useState([
        {name: 'about', subtitle: 'How did I get here?', 
            mainText: 'I loved technology ever since I was a kid. Fast forward to the' 
        +' beginning of college and I was exposed to programming for the' 
        +' first time in my life. Now I have a degree in computer science and' 
        +' have acquired some experience with various technologies. I am excited'
        +' about what software I will build next.'},
        {name: 'contact', subtitle: 'Below is my contact information.',
            mainText: 'If you need to contact me for any reason, please use any of the info below (or use my github/linkedin).'},
        {name: 'portfolio', subtitle: 'Welcome to my project collection.', 
            mainText: 'Below is a list of my deployed projects as well as a screenshot of each project.'},
        {name: 'resume', subtitle: 'Are you interested in my skillset?', 
            mainText: 'Here is a list of some of the technologies that I have used before.'}
    ]);


    //create states for nav movement
    const [currentOption, setCurrectOption] = useState(navOptions[0]);
   
    return (
        <div className='bg-cover box-border'>
            <div className='bg-cover box-border'>
                <img src={android} alt='andriod-banner'></img>
            </div>
            <a href='/'>
                <h1>Michael Brown</h1>
            </a>
            <Navigation
                navOptions= {navOptions}
                setCurrectOption= {setCurrectOption}
                currentOption= {currentOption}               
            >
                
            </Navigation>

        </div>
    );
}

export default Header;

/**
 *  keep record of original navoption
 *  const [navOptions]= useState([
        {name: 'about', subtitle: 'How did I get here?'},
        {name: 'contact', subtitle: 'Below is my contact information.'},
        {name: 'portfolio', subtitle: 'Welcome to my project collection.'},
        {name: 'resume', subtitle: 'Are you interested in my skillset?'}
    ]);
 */