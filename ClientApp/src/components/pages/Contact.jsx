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
        
          <h2 className="h2Contact">Feel free to contact us via any of the following:</h2>
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
            <h3 className="h3Contact">Find us on Social Media:</h3>
            <br /><br />
            <li> <i class="fa fa-facebook" aria-hidden="true"></i>Facebook</li>
            <li> <i class="fa fa-twitter" aria-hidden="true"></i>Twitter</li>
            <li> <i class="fa fa-linkedin" aria-hidden="true"></i>LinkedIn</li>
            <li> <i class="fa fa-instagram" aria-hidden="true"></i>Instagram</li>
          </div>
        </aside>
        </div>
        <Footer/>
    </>
  );
}

export default Contact;
