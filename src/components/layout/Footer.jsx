const Footer = () => {
    return (
        <footer className="w-full py-8 px-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-surface-variant border-t-2 border-outline font-headline text-xs uppercase tracking-widest relative z-50">
            <div className="text-primary font-bold">
                ©{new Date().getFullYear()}_SHRIKANT_KUMAR_CORE_SYSTEMS
            </div>
            
            <div className="flex gap-8">
                <a 
                    className="text-outline hover:text-secondary transition-colors" 
                    href="https://github.com/Shrikantkumar975"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GITHUB
                </a>
                <a 
                    className="text-outline hover:text-secondary transition-colors" 
                    href="http://www.linkedin.com/in/shrikantkumar01"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LINKEDIN
                </a>
                <a 
                    className="text-outline hover:text-secondary transition-colors" 
                    href="mailto:shrikumar975@gmail.com"
                >
                    SHRIKUMAR975@GMAIL.COM
                </a>
            </div>
            
            <div className="flex items-center gap-2 text-on-surface-variant mt-4 md:mt-0">
                <span className="w-2 h-2 bg-primary animate-pulse shadow-[0_0_8px_rgba(142,255,113,0.8)]"></span>
                <span>SYSTEM_ONLINE</span>
            </div>
        </footer>
    );
};

export default Footer;
