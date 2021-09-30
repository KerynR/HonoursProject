import React from 'react';
import './About.css';
import MainSection from '../MainSection';
import Footer from '../Footer';

function About() {
  return (
    <>
        <div class="grid">
        <header className="AboutUsHeader">
        About Us
        </header>
        <main>
        Blog Post
        </main>
        <aside>
        Sidebar
        </aside>
        
        </div>
        <Footer/>
    </>
  );
}

export default About;
