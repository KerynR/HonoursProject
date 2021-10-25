import React from 'react';
import './Contact.css';
import Footer from '../../components/Footer';

/*STYLING BEING STUBBORN -- FIX THIS MORE */

function Contact() {
  return (
    <>
        <div class="gridContact">
          <header className="ContactUsHeader">
            Contact Us
          </header>
        <div className="contactUsDetails">
          <ul>
            <div className="contactTop">
            <h2 className="h2Contact">Feel free to contact us:</h2>
            <br /><br />
            <li><i class="fa fa-envelope" aria-hidden="true"></i>xyzrecruitment@gmail.com</li>
            <br />
            <li><i class="fa fa-mobile" aria-hidden="true"></i>071 696 5982</li>
            <br />
            <li><i class="fa fa-phone" aria-hidden="true"></i>011 696 3358</li>
            <br />
            <li><i class="fa fa-map-marker" aria-hidden="true"></i>South Africa</li>
            </div>
          </ul>
        </div>
        <div className="socialMediaContact" >
            <ul>
              <div className="contactRight">
                <h3 className="h3Contact">Find us on Social Media:</h3>
                <br /><br />
                <li> <i class="fab fa-facebook" aria-hidden="true"></i><a href="https://www.facebook.com/">Facebook</a></li>
                <br />
                <li> <i class="fab fa-twitter" aria-hidden="true"></i><a href="https://twitter.com/">Twitter</a></li>
                <br />
                <li> <i class="fab fa-linkedin" aria-hidden="true"></i><a href="https://www.linkedin.com/">LinkedIn</a></li>
                <br />
                <li> <i class="fab fa-instagram" aria-hidden="true"></i><a href="https://www.instagram.com/">Instagram</a></li>
              </div>
            </ul>
        </div>
        </div>
        <Footer/>
    </>
  );
}

export default Contact;
