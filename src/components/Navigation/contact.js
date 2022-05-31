import React from "react";
import {capFirstLetter} from '../../utils/helpers';

function Contact(props)
{

  const contactInfo= ['email address: michael.brown.pgrad@gmail.com '
  ,'phone number: 914-309-0594 '];
  const mainText= 'If you need to contact me for any reason, please use any of the info below (or use my github/linkedin).';
  
  const {currentOption}= props;
    return (
        <main>
            <h2>{capFirstLetter(currentOption.name)}</h2>
            <p>{currentOption.subtitle}</p>
            <br /><br />
            <p>{mainText}</p>
            <br />

            <ul>
              {contactInfo.map((info) => 
              (
                <li>{info}</li>
              ))}
            </ul>
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