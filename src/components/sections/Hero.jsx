import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import SectionWrapper from '../layout/SectionWrapper';

const Hero = () => {
    const [terminalStep, setTerminalStep] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setTerminalStep(1), 500),
            setTimeout(() => setTerminalStep(2), 1100),
            setTimeout(() => setTerminalStep(3), 1300),
            setTimeout(() => setTerminalStep(4), 1500),
            setTimeout(() => setTerminalStep(5), 1700),
            setTimeout(() => setTerminalStep(6), 1900),
            setTimeout(() => setTerminalStep(7), 2100),
            setTimeout(() => setTerminalStep(8), 2600)
        ];

        return () => timers.forEach(t => clearTimeout(t));
    }, []);

    return (
        <SectionWrapper id="home" className="pt-24 md:pt-32 pb-12">
            <section className="py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 w-full">
                <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="mb-4 inline-block px-3 py-1 bg-surface-container-highest border border-primary/30 text-primary font-label text-[10px] tracking-[0.2em] w-max animate-pulse">
                        [STATUS: OPEN_TO_WORK]
                    </div>
                    
                    <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6">
                        SHRIKANT<br/>
                        <span className="text-primary terminal-glow">KUMAR</span>
                    </h1>
                    
                    <p className="font-headline text-xl md:text-2xl text-on-surface-variant uppercase tracking-tight mb-8 max-w-xl">
                        FULL-STACK DEVELOPER <br />
                        <span className="text-secondary font-mono text-xs md:text-sm tracking-widest mt-1 block px-2 border-l-2 border-secondary/40 bg-secondary/5 italic opacity-80">
                            // OPTIMIZING_FOR_SPEED_AND_SCALABILITY
                        </span>
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        <Link 
                            to="contact" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500} 
                            className="bg-primary text-on-primary px-8 py-4 font-label font-bold border-2 border-on-primary-fixed block-shadow-secondary active:translate-x-1 active:translate-y-1 transition-all cursor-pointer"
                        >
                            INITIATE_COLLAB
                        </Link>
                        <a 
                            href="https://github.com/Shrikantkumar975" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="border-2 border-outline px-8 py-4 font-label font-bold text-on-surface hover:bg-surface-container-high transition-all cursor-pointer"
                        >
                            VIEW_REPOSITORIES
                        </a>
                    </div>
                </div>
                
                <div className="lg:col-span-5 relative mt-8 lg:mt-0">
                    <div className="border-2 border-outline bg-surface-container-lowest p-1 block-shadow-primary h-full">
                        <div className="bg-surface-container-highest p-3 border-b-2 border-outline flex justify-between items-center">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 bg-error"></div>
                                <div className="w-3 h-3 bg-secondary"></div>
                                <div className="w-3 h-3 bg-primary"></div>
                            </div>
                            <span className="font-label text-[10px] text-on-surface-variant">NODE_01_CORE_TERMINAL</span>
                        </div>
                        <div className="p-6 font-mono text-sm md:text-base leading-relaxed overflow-hidden">
                            <div className="flex gap-4 mb-2">
                                <span className="text-secondary">$</span>
                                {terminalStep >= 1 ? (
                                    <TypeAnimation
                                        sequence={['fetch --tech-stack']}
                                        wrapper="span"
                                        speed={50}
                                        cursor={false}
                                        className="text-on-surface"
                                    />
                                ) : (
                                    <span className="text-on-surface animate-pulse">_</span>
                                )}
                            </div>
                            
                            {terminalStep >= 2 && (
                                <div className="text-on-surface-variant mb-4">Fetching core modules...</div>
                            )}
                            
                            <div className="grid grid-cols-1 gap-2">
                                {/* <div className="flex items-center gap-3 group">
                                    <span className="text-primary">[OK]</span>
                                    <span className="text-on-surface font-bold">REACT.JS</span>
                                    <div className="h-[2px] flex-grow bg-outline-variant opacity-20"></div>
                                    <span className="text-xs text-outline pl-2">UI_LAYER</span>
                                </div>
                                <div className="flex items-center gap-3 group mt-1">
                                    <span className="text-primary">[OK]</span>
                                    <span className="text-on-surface font-bold">NODE.JS</span>
                                    <div className="h-[2px] flex-grow bg-outline-variant opacity-20"></div>
                                    <span className="text-xs text-outline pl-2">RUNTIME</span>
                                </div>
                                <div className="flex items-center gap-3 group mt-1">
                                    <span className="text-primary">[OK]</span>
                                    <span className="text-on-surface font-bold">EXPRESS</span>
                                    <div className="h-[2px] flex-grow bg-outline-variant opacity-20"></div>
                                    <span className="text-xs text-outline pl-2">MIDDLEWARE</span>
                                </div>
                                <div className="flex items-center gap-3 group mt-1">
                                    <span className="text-primary">[OK]</span>
                                    <span className="text-on-surface font-bold">MONGODB</span>
                                    <div className="h-[2px] flex-grow bg-outline-variant opacity-20"></div>
                                    <span className="text-xs text-outline pl-2">PERSISTENCE</span>
                                </div> */}
                                {terminalStep >= 3 && (
                                    <div className="flex items-center gap-3 group mt-1">
                                        <span className="text-primary">[OK]</span>
                                        <span className="text-on-surface font-bold">MERN STACK</span>
                                        <div className="h-[2px] flex-grow bg-outline-variant opacity-20"></div>
                                        <span className="text-xs text-outline pl-2">ARCHITECTURE</span>
                                    </div>
                                )}
                                {terminalStep >= 4 && (
                                    <div className="flex items-center gap-3 group mt-1">
                                        <span className="text-primary">[OK]</span>
                                        <span className="text-on-surface font-bold">TAILWIND CSS</span>
                                        <div className="h-[2px] flex-grow bg-outline-variant opacity-20"></div>
                                        <span className="text-xs text-outline pl-2">STYLING</span>
                                    </div>
                                )}
                                {terminalStep >= 5 && (
                                    <div className="flex items-center gap-3 group mt-1">
                                        <span className="text-primary">[OK]</span>
                                        <span className="text-on-surface font-bold">DOCKER</span>
                                        <div className="h-[2px] flex-grow bg-outline-variant opacity-20"></div>
                                        <span className="text-xs text-outline pl-2">CONTAINERIZATION</span>
                                    </div>
                                )}
                                {terminalStep >= 6 && (
                                    <div className="flex items-center gap-3 group mt-1">
                                        <span className="text-primary">[OK]</span>
                                        <span className="text-on-surface font-bold">GIT & GITHUB</span>
                                        <div className="h-[2px] flex-grow bg-outline-variant opacity-20"></div>
                                        <span className="text-xs text-outline pl-2">VERSION_CONTROL</span>
                                    </div>
                                )}
                                {terminalStep >= 7 && (
                                    <div className="flex items-center gap-3 group mt-1">
                                        <span className="text-primary">[OK]</span>
                                        <span className="text-on-surface font-bold">ALGO & DSA</span>
                                        <div className="h-[2px] flex-grow bg-outline-variant opacity-20"></div>
                                        <span className="text-xs text-outline pl-2">SOLUTIONS</span>
                                    </div>
                                )}
                            </div>
                            
                            {terminalStep >= 8 && (
                                <div className="mt-6 flex gap-4">
                                    <span className="text-secondary">$</span>
                                    <span className="text-on-surface animate-pulse">_</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </SectionWrapper>
    );
};

export default Hero;
