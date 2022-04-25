import React, {useState} from 'react';
import Navigation from '../Navigation/navigation';


function Header()
{
    const [navOptions]= useState([
        {name: 'about', content: 'I loved technology ever since I was a kid. Fast forward to the' 
        +' beginning of college and I was exposed to programming for the' 
        +' first time in my life. Now I have a degree in computer science and' 
        +' have acquired some experience with various technologies. I am excited'
        +' about what software I will build next.'},
        {name: 'contact', content: 'email address: michael.brown.pgrad@gmail.com'
        +' phone number: 914-309-0594'},
        {name: 'portfolio', content: 'Here is the list of some of my projects.'},
        {name: 'resume', content: 'Here is a list of some of the skills that I have.'}
    ]);

    const [currentOption, setCurrectOption] = useState(navOptions[0]);

    return (
        <div>
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