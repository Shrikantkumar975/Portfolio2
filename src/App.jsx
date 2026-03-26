import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SectionWrapper from './components/layout/SectionWrapper';
import InteractiveBackground from './components/layout/InteractiveBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import CodingStats from './components/sections/CodingStats';
import Certifications from './components/sections/Certifications';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="font-sans text-foreground min-h-screen relative overflow-x-hidden">
      <InteractiveBackground />
      
      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <CodingStats />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
