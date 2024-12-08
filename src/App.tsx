import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Timeline />
      <TechStack />
      <Projects />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;