import React from "react";
import Header from "./header";
import Footer from "../Footer/footer";

function Contact()
{
    return (
        <section>
          <Header></Header>
          
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

          <Footer></Footer>
        </section>
    );
}

export default Contact;