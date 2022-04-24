import React from 'react';
import Nav from '../Navigation/navigation';


function Header()
{
    return (
        <div>
            <a href='/'>
                <h1>Michael Brown</h1>
            </a>
            <Nav></Nav>
        </div>
    );
}

export default Header;