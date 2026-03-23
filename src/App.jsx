import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SectionWrapper from './components/layout/SectionWrapper';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Certifications from './components/sections/Certifications';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="font-sans bg-background text-foreground min-h-screen">
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Education />

        <Achievements />

        <Certifications />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
