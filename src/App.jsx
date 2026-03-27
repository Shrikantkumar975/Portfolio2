import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/layout/LoadingScreen';
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans text-foreground min-h-screen relative overflow-x-hidden bg-background">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10"
      >
        <InteractiveBackground />
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
      </motion.div>
    </div>
  );
}

export default App;
