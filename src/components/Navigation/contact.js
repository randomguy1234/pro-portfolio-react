import React from "react";
import {capFirstLetter} from '../../utils/helpers';

function Contact(props)
{
  const subtitle= 'Below is my contact information.';
  const context= ['email address: michael.brown.pgrad@gmail.com '
  ,'phone number: 914-309-0594 '];
  
  const {currentOption}= props;
    return (
        <main>
            <h2>{capFirstLetter(currentOption.name)}</h2>
            <p>Below is my contact information.</p>
            <p>{currentOption.content}</p>

        </main>
    );
}

export default Contact;

//<p>{currentOption.message}</p>

/** might need this later
 * <Header></Header>
          
          <h1>Contact</h1>
          <form id="contact">
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" rows="5" />
            </div>
            <button type="submit">Submit</button>
          </form>
 * @returns 
 */