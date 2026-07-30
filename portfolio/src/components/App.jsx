import React, { Fragment } from 'react';
import '../App.css';
import Header from "./Header";
import Hero from "./Hero";
import Resume from "./Resume";
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App
