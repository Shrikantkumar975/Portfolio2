import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionWrapper from '../layout/SectionWrapper';

const projectsList = [
    {
        title: 'Lynqer',
        tagline: 'MERN Stack Developer Toolkit',
        description: 'A modern, full-stack toolkit featuring a URL shortener and QR code generator with high-performance caching.',
        features: [
            'URL Shortener & Analytics',
            'QR Code Generator (URL/UPI)',
            'Redis Redirect Caching',
            'JWT Auth & User Dashboard',
            'Password Generator'
        ],
        techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Redis', 'Tailwind'],
        image: '/lynqer.png',
        accent: '#8eff71',
        githubLink: 'https://github.com/Shrikantkumar975/lynqer',
        liveLink: 'https://essential-kit.vercel.app/',
    },
    {
        title: 'AgroInnovate',
        tagline: 'Agri-tech Platform for Farmers',
        description: 'Empowers Indian farmers with technology-driven tools for weather, market prices, and community knowledge.',
        features: [
            'Real-time Weather Forecasts',
            'Live Market Prices & Analytics',
            'Community Forum & Sharing',
            'Multi-language Support',
            'Agricultural Education Portal'
        ],
        techStack: ['PHP 8', 'MySQL', 'REST APIs', 'OpenWeather'],
        image: '/agroinnovate.png',
        accent: '#4CAF50',
        githubLink: 'https://github.com/Shrikantkumar975/agroinnovate',
        liveLink: '#',
    },
];

const ProjectCard = ({ project }) => {
    const hasImage = Boolean(project.image);
    const bgGradient = hasImage
        ? 'none'
        : `linear-gradient(135deg, ${project.accent}10 0%, #0a0a0a 60%)`;

    return (
        <div
            className="group border-2 border-outline overflow-hidden flex flex-col"
            style={{ boxShadow: `4px 4px 0 ${project.accent}30` }}
        >
            {/* Top: image + info */}
            <div className="grid grid-cols-1 md:grid-cols-2">

                {/* LEFT — Image */}
                <div
                    className="relative min-h-[300px] md:min-h-[450px] overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-outline bg-black"
                    style={{ background: bgGradient }}
                >
                    {hasImage ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-90 group-hover:object-contain transition-all duration-500 ease-in-out"
                        />
                    ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center select-none">
                            <p
                                className="font-headline font-black text-6xl tracking-tighter"
                                style={{ color: project.accent }}
                            >
                                {project.title.charAt(0)}
                            </p>
                            <p className="font-mono text-[10px] text-outline mt-2 tracking-widest uppercase">
                                [no_preview_available]
                            </p>
                        </div>
                    )}
                    {/* Corner brackets */}
                    <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 z-10"
                         style={{ borderColor: project.accent }} />
                    <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 z-10"
                         style={{ borderColor: project.accent }} />
                </div>

                {/* RIGHT — Info */}
                <div className="p-6 md:p-8 flex flex-col bg-surface-container-lowest">
                    <div className="flex-1">
                        <p
                            className="font-mono text-[10px] tracking-widest mb-2 uppercase"
                            style={{ color: project.accent }}
                        >
                            // featured_project
                        </p>
                        <h3 className="font-headline font-black text-3xl md:text-4xl text-white uppercase tracking-tight mb-1">
                            {project.title}
                        </h3>
                        <p className="font-mono text-xs text-outline mb-6">{project.tagline}</p>
                        
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                            {project.description}
                        </p>

                        {project.features && (
                            <div className="mb-8">
                                <p className="font-mono text-[10px] text-outline tracking-widest uppercase mb-3 text-primary">
                                    [key_capabilities]
                                </p>
                                <ul className="space-y-2">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-on-surface-variant group/item">
                                            <span className="text-primary mt-1 text-[10px]">▶</span>
                                            <span className="font-headline text-xs md:text-sm group-hover/item:text-white transition-colors">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Group Tech Stack and Links together at the bottom */}
                    <div className="mt-auto flex flex-col gap-6">
                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="font-mono text-[10px] px-2 py-1 border border-outline-variant text-outline bg-surface-container-low hover:text-white hover:border-primary transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-4">
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 md:flex-none flex items-center justify-center gap-3 font-label text-xs uppercase tracking-widest px-6 py-3 border-2 border-outline text-white hover:bg-white hover:text-black transition-all group"
                            >
                                <Github size={16} className="group-hover:scale-110 transition-transform" /> 
                                <span className="font-bold">Source_Code</span>
                            </a>
                            {project.liveLink && project.liveLink !== '#' && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 md:flex-none flex items-center justify-center gap-3 font-label text-xs uppercase tracking-widest px-6 py-3 border-2 text-black font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    style={{ backgroundColor: project.accent, borderColor: project.accent }}
                                >
                                    <ExternalLink size={16} /> Live_Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [current, setCurrent] = useState(0);
    const total = projectsList.length;

    const prev = () => setCurrent((c) => (c - 1 + total) % total);
    const next = () => setCurrent((c) => (c + 1) % total);

    return (
        <SectionWrapper id="projects">
            <div className="max-w-6xl mx-auto px-4">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-end justify-between mb-12 flex-wrap gap-6"
                >
                    <div className="border-l-4 border-primary pl-6">
                        <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-2">
                            Projects
                        </h2>
                        <p className="text-on-surface-variant text-sm font-mono tracking-widest uppercase">
                            // system_deployments active: {total}
                        </p>
                    </div>

                    {/* Navigator buttons */}
                    <div className="flex gap-2">
                        <button
                            onClick={prev}
                            aria-label="Previous project"
                            className="w-12 h-12 border-2 border-outline flex items-center justify-center text-outline hover:border-primary hover:text-primary transition-all active:scale-95"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={next}
                            aria-label="Next project"
                            className="w-12 h-12 border-2 border-outline flex items-center justify-center text-outline hover:border-primary hover:text-primary transition-all active:scale-95"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </motion.div>

                {/* Carousel */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <ProjectCard project={projectsList[current]} />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Progress bar / Indicators */}
                <div className="flex justify-center gap-3 mt-10">
                    {projectsList.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            aria-label={`Go to project ${i + 1}`}
                            className={`h-[4px] rounded-full transition-all duration-500 ease-in-out ${
                                i === current 
                                    ? 'w-16 bg-primary shadow-[0_0_10px_rgba(142,255,113,0.5)]' 
                                    : 'w-4 bg-outline hover:bg-outline-variant'
                            }`}
                        />
                    ))}
                </div>

            </div>
        </SectionWrapper>
    );
};

export default Projects;
