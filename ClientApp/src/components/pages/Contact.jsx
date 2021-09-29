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
          <li>Email: xyzrecruitment@gmail.com</li><br />
          <li>Cellphone: 071 696 5982</li><br />
          <li>Tel: 011 - 696 3358</li>
        </ul>
        </main>
        <aside>
        <ul socialMediaList>
          <li><i class="fa fa-facebook-official" aria-hidden="true"></i></li>
          <li><i class="fa fa-twitter-square" aria-hidden="true"></i></li>3
          <li><i class="fa fa-linkedin-square" aria-hidden="true"></i></li>
        </ul>
        </aside>
        <footer>
        Footer
        </footer>
        </div>
    </>
  );
}

export default Contact;
