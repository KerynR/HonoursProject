import React from 'react';
import './Contact.css';
import MainSection from '../MainSection';
import Footer from '../Footer';

function Contact() {
  return (
    <>
        <div class="gridContact">
      <header className="ContactUsHeader">
        Contact Us
      </header>
        <main className="contactLeft">
         
        <ul>
        
          <h2 className="h2Contact">Feel free to contact us via any of the following:</h2>
          <br /><br />
          <li>xyzrecruitment@gmail.com <i class="fa fa-envelope" aria-hidden="true"></i></li>
          <br />
          <li>071 696 5982<i class="fa fa-mobile" aria-hidden="true"></i></li>
          <br />
          <li>011 696 3358<i class="fa fa-phone" aria-hidden="true"></i></li>
          <br />
        </ul>
        </main>
        <aside >
          <ul>
            <div className="contactRight">
              <h3 className="h3Contact">Find us on Social Media:</h3>
              <br /><br />
              <li> <i class="fab fa-facebook" aria-hidden="true"></i>Facebook</li>
              <br />
              <li> <i class="fab fa-twitter" aria-hidden="true"></i>Twitter</li>
              <br />
              <li> <i class="fab fa-linkedin" aria-hidden="true"></i>LinkedIn</li>
              <br />
              <li> <i class="fab fa-instagram" aria-hidden="true"></i>Instagram</li>
            </div>
          </ul>
        </aside>
        </div>
        <Footer/>
    </>
  );
}

export default Contact;
