import React, {useState} from 'react';
import Navigation from '../Navigation/navigation';
import android from '../../assets/images/android-image.png';


function Header()
{
    const [navOptions]= useState([
        {name: 'about', subtutle: 'How did I get here?'},
        {name: 'contact', subtitle: 'Below is my contact information.'},
        {name: 'portfolio', subtitle: 'Welcome to my project collection.'},
        {name: 'resume', subtitle: 'Are you interested in my skillset?'}
    ]);


    //create states for nav movement
    const [currentOption, setCurrectOption] = useState(navOptions[0]);
    const [displayText, setDisplayText]= useState(true);

    //create state for displaying about, consider changing name
    //const [displayAbout, setDisplayAbout]= useState(false);

    return (
        <div>
            <div className='bg-cover bg-center'>
                <img src={android} alt=''></img>
            </div>
            <a href='/'>
                <h1>Michael Brown</h1>
            </a>
            <Navigation
                navOptions= {navOptions}
                setCurrectOption= {setCurrectOption}
                currentOption= {currentOption}
                displayText= {displayText}
                setDisplayText= {setDisplayText}                
            >

            </Navigation>

        </div>
    );
}

export default Header;

/**
 * displayAbout= {displayAbout}
                setDisplayAbout= {setDisplayAbout}
 */