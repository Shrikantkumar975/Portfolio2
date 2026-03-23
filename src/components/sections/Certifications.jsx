import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import SectionWrapper from '../layout/SectionWrapper';

const Certifications = () => {
    const certificationsList = [
        {
            title: "API Fundamentals Student Expert",
            issuer: "Postman",
            date: "2023",
            link: "#" // Add credential link
        },
        {
            title: "Problem Solving (Basic & Intermediate)",
            issuer: "HackerRank",
            date: "2023",
            link: "#"
        },
        {
            title: "Programming in Java",
            issuer: "NPTEL",
            date: "2023",
            link: "#"
        },
        {
            title: "Front-End Web UI Frameworks and Tools",
            issuer: "Coursera",
            date: "2022",
            link: "#"
        },
        {
            title: "Responsive Web Design",
            issuer: "FreeCodeCamp",
            date: "2022",
            link: "#"
        }
    ];

    return (
        <SectionWrapper id="certifications">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center gap-2">
                    <Award className="w-8 h-8 text-primary" /> Certifications
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
                {certificationsList.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all group flex flex-col h-full"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Award size={24} />
                            </div>
                            {cert.link !== "#" && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label="View Credential"
                                >
                                    <ExternalLink size={18} />
                                </a>
                            )}
                        </div>

                        <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                            {cert.title}
                        </h3>

                        <div className="mt-auto">
                            <p className="text-sm font-medium text-primary mb-1">
                                {cert.issuer}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Issued: {cert.date}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
