import React from 'react'; 
import { Link as ScrollLink } from 'react-scroll'; 

export default function Hero() { 
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" 
      style={{backgroundImage: `url('/images/background2.jpg')`}}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/25"></div>
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4" data-aos="zoom-in">
          Hi — I'm <span className="text-yellow-300">Selva Adhityas</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-6" data-aos="fade-up">
          Student • Developer • Data Enthusiast
        </p>
        <div className="flex justify-center gap-4" data-aos="fade-up" data-aos-delay="150">
          <ScrollLink to="projects" smooth offset={-60} className="btn">View Projects</ScrollLink>
          <a href="/resume.pdf" download className="btn">Download Resume</a>
        </div>
      </div>
    </section>
  );
}