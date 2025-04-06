import React from 'react';
import Header from './Header';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Team from './Team';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';

function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Testimonials />
      <ContactUs />
    </>
  );
}

export default Home;
