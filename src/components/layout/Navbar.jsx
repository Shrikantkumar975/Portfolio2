import { Link } from 'react-scroll';
import { Menu, X, Headphones } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'ABOUT', to: 'about' },
        { name: 'SKILLS', to: 'skills' },
        { name: 'PROJECTS', to: 'projects' },
        { name: 'ACHIEVEMENTS', to: 'achievements' },
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
                        className="text-white hover:bg-primary-container hover:text-black transition-colors duration-100 cursor-pointer pb-1"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
            
            <div className="hidden md:block">
                <a 
                    href="/resume.pdf" 
                    download="My_Resume.pdf"
                    className="inline-block px-4 py-1 border-2 border-primary text-primary hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
                >
                    RESUME_PDF
                </a>
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
                        <a 
                            href="/resume.pdf" 
                            download="My_Resume.pdf"
                            className="block w-full text-left px-4 py-2 mt-2 border-2 border-primary text-primary hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
                        >
                            RESUME_PDF
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
