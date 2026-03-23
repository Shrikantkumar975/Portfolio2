import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import SectionWrapper from '../layout/SectionWrapper';

const Projects = () => {
    const projectsList = [
        {
            title: "Lynqer",
            description: "A comprehensive developer toolkit built to streamline daily workflows. Includes features like URL shortening, QR code generation, strong password generation, and advanced analytics tracking.",
            techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
            githubLink: "https://github.com/Shrikantkumar975/lynqer",
            liveLink: "https://lynqer.vercel.app/",
            highlights: [
                "Implemented secure JWT authentication",
                "Built custom rate-limiting for API endpoints",
                "Designed responsive, accessible UI components"
            ]
        },
        {
            title: "Agroinnovate",
            description: "An agricultural technology platform connecting farmers with modern farming practices and market trends. Provides real-time weather data, crop disease prediction, and marketplace access.",
            techStack: ["React", "Python", "FastAPI", "PostgreSQL", "Machine Learning"],
            githubLink: "https://github.com/yourusername/agroinnovate",
            liveLink: "https://agroinnovate.demo.com",
            highlights: [
                "Integrated machine learning models for disease prediction",
                "Built robust API with complex data aggregation",
                "Optimized database queries for fast localized data retrieval"
            ]
        }
    ];

    return (
        <SectionWrapper id="projects" className="bg-muted/30">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center gap-2">
                    <FolderGit2 className="w-8 h-8 text-primary" /> Featured Projects
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
                {projectsList.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all flex flex-col h-full"
                    >
                        {/* Visual Header / Banner */}
                        <div className="h-48 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 p-6 flex items-end justify-between border-b border-border relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-primary/10 transition-colors"></div>

                            <h3 className="text-2xl font-bold text-foreground z-10">{project.title}</h3>

                            <div className="flex gap-3 z-10">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-background/80 hover:bg-background text-muted-foreground hover:text-foreground rounded-full backdrop-blur-sm transition-colors shadow-sm"
                                    aria-label="GitHub Repository"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-background/80 hover:bg-background text-muted-foreground hover:text-foreground rounded-full backdrop-blur-sm transition-colors shadow-sm"
                                    aria-label="Live Demo"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-6 md:p-8 flex-grow flex flex-col">
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Key Highlights
                                </h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {project.highlights.map((highlight, hIndex) => (
                                        <li key={hIndex} className="flex items-start gap-2">
                                            <span className="text-primary/50 mt-1">▹</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack Tags - Pushed to bottom */}
                            <div className="mt-auto pt-6 border-t border-border flex flex-wrap gap-2">
                                {project.techStack.map((tech, tIndex) => (
                                    <span
                                        key={tIndex}
                                        className="px-3 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
