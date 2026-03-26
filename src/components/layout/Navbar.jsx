import { Link } from 'react-scroll';
import { Menu, X, Headphones } from 'lucide-react';
import { useState } from 'react';
import ResumeModal from './ResumeModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    const navLinks = [
        { name: 'ABOUT', to: 'about' },
        { name: 'SKILLS', to: 'skills' },
        { name: 'PROJECTS', to: 'projects' },
        { name: 'CODING_STATS', to: 'achievements' },
        { name: 'CONTACT', to: 'contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-black border-b-2 border-outline font-headline uppercase tracking-tighter font-bold">
            <div className="text-2xl font-black tracking-tighter text-primary cursor-pointer">
                <Link to="home" smooth={true} duration={500}>
                   <Headphones color="rgb(142,255,113)" />
                </Link>
            </div>
            
            <nav className="hidden md:flex gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        activeClass="text-primary border-b-2 border-primary pb-1"
                        className="text-white hover:bg-primary-container hover:text-black transition-all duration-150 cursor-pointer px-3 py-1"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
            
            <div className="hidden md:block">
                <button 
                    onClick={() => setIsResumeOpen(true)}
                    className="inline-block px-4 py-1 border-2 border-primary text-primary hover:bg-primary hover:text-on-primary transition-all cursor-pointer font-bold"
                >
                    VIEW_PDF
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-primary hover:text-white p-2"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-[100%] left-0 w-full bg-black border-b-2 border-outline md:hidden">
                    <div className="px-6 py-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:bg-primary-container hover:text-black transition-colors duration-100 cursor-pointer block py-2 border-b border-surface-variant"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-3 mt-4">
                            <button 
                                onClick={() => {
                                    setIsResumeOpen(true);
                                    setIsOpen(false);
                                }}
                                className="block w-full text-center px-4 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-on-primary transition-all cursor-pointer font-bold"
                            >
                                VIEW_PDF
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <ResumeModal 
                isOpen={isResumeOpen} 
                onClose={() => setIsResumeOpen(false)} 
            />
        </header>
    );
};

export default Navbar;
