import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import SectionWrapper from '../layout/SectionWrapper';

const Education = () => {
    const educationData = [
        {
            degree: "B.Tech in Computer Science",
            institution: "Lovely Professional University", // Replace with actual
            location: "Phagwara, Punjab", // Replace with actual
            period: "2023 - Present",
            details: [
                "Current CGPA: 8.90"
            ]
        },
        {
            degree: "Intermediate",
            institution: "A.N College", // Replace with actual
            location: "Patna, Bihar", // Replace with actual
            period: "2020 - 2022",
            details: [
                "Percentage: 82.4"
            ]
        },
        {
            degree: "Matriculation (10th Grade)",
            institution: "Christ Church Diocesan School", // Replace with actual
            location: "Patna, Bihar", // Replace with actual
            period: "2020",
            details: [
                "Percentage: 87.6"
            ]
        }
    ];

    return (
        <SectionWrapper id="education">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 border-l-4 border-primary pl-6"
            >
                <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase mb-2">
                    Academic <span className="text-primary">Background</span>
                </h2>
                <p className="text-on-surface-variant text-sm font-mono tracking-widest uppercase">
                    // educational_history_repository
                </p>
            </motion.div>

            <div>
                <div className="relative border-l-2 border-primary/30 ml-4 md:ml-6 space-y-12">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-background border-4 border-primary shadow-sm" />

                            <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <GraduationCap size={100} className="text-primary transform rotate-12" />
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 z-10 relative">
                                    {item.degree}
                                </h3>

                                <h4 className="text-lg text-primary font-medium mb-4 z-10 relative flex items-center gap-2">
                                    {item.institution}
                                </h4>

                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-muted-foreground mb-4 z-10 relative">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={16} />
                                        <span>{item.period}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <MapPin size={16} />
                                        <span>{item.location}</span>
                                    </div>
                                </div>

                                <ul className="space-y-2 text-muted-foreground text-sm z-10 relative">
                                    {item.details.map((detail, dIndex) => (
                                        <li key={dIndex} className="flex items-start gap-2">
                                            <span className="text-primary mt-1 text-xs">▹</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Education;
