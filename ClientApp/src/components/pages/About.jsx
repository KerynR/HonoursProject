import React from 'react';
import './About.css';
import MainSection from '../MainSection';
import Footer from '../Footer';

function About() {
  return (
    <>
        <div class="gridAbout">
        <header className="AboutUsHeader">
        About Us
        </header>
        <main className="mainAbout">
        XYZ Recruiters have identified, what is known as a 'skills gap' between graduates 
        and the workplace. Employers have noticed that graduates are missing various softskills 
        and that graduates are struggling to integrate into the workplace.
        <br /><br />
        XYZ Recruiters therefore aim to bridge that gap by providing a convientient platform
        for graduates, recruiters, and companies to connect with one another.
        <br /><br />
        Graduates are able to view available jobs, company profiles, upload CVs, 
        view MOOCs, and apply for available positions. Companies are able to upload
         available job opportunities, review applications, and to create their company profile.
        </main>
        <aside>
        <img src="images/hunters-race-MYbhN8KaaEc-unsplash.jpg" />
        </aside>
        </div>
        <Footer/>
    </>
  );
}

export default About;
