import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}
