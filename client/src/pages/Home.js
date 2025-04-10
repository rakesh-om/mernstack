import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero-section';
import Services from '../components/Services';
import AboutMe from '../components/About';
import Skills from '../components/skills';

import ContactForm from '../components/contact-form';
import Footer from '../components/Footer';
import '../components/Navbar.css';
import '../styles.css';

const Home = () => {
  return (
    <>
      <Header />

      <main className="site-main">
        <Hero />
        <AboutMe />
        <Skills />
        <Services />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
};

export default Home;
