import React from 'react';
import './Contact.css';
import MainSection from '../MainSection';
import Footer from '../Footer';

function Contact() {
  return (
    <>
        <div class="gridContact">
        {/*<header className="ContactUsHeader">
        Contact Us
  </header>*/}
        <main className="contactLeft">
         
        <ul>
        <h1 className="h1Contact">Contact Us</h1>
        
          Feel free to contact us via any of the following:
          <br /><br />
          <li>xyzrecruitment@gmail.com <i class="fa fa-envelope" aria-hidden="true"></i></li>
          <br />
          <li>071 696 5982 <i class="fa fa-mobile" aria-hidden="true"></i></li>
          <br />
          <li>011 - 696 3358 <i class="fa fa-phone" aria-hidden="true"></i></li>
          <br />
        </ul>
        </main>
        <aside >
          <div className="contactRight">
            <div className="transparentbox">
              <input className="transInput" type="text" placeholder=" Enter your name"/>
              <br />
              <input className="transInput" type="text" placeholder="Enter a valid email address"/>
              <br />
              <input className="transInput" type="text" placeholder="Enter your message"/>
            </div>
            <button className="SubmitButton" >Submit</button>
          </div>
        </aside>
        </div>
        <Footer/>
    </>
  );
}

export default Contact;
