import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import SectionWrapper from '../layout/SectionWrapper';

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Technology in Computer Science",
            institution: "Your University Name", // Replace with actual
            location: "Your City, State", // Replace with actual
            period: "2022 - 2026 (Expected)",
            details: [
                "Pre-final year student with a focus on Backend Systems and Data Structures.",
                "Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks.",
                "Current CGPA: 8.5/10 (Adjust as needed)"
            ]
        },
        {
            degree: "Higher Secondary (12th Grade)",
            institution: "Your College/School Name", // Replace with actual
            location: "Your City, State", // Replace with actual
            period: "2020 - 2022",
            details: [
                "Completed with a focus on Physics, Chemistry, and Mathematics (PCM).",
                "Percentage/Grade: 90% (Adjust as needed)"
            ]
        }
    ];

    return (
        <SectionWrapper id="education">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center gap-2">
                    <GraduationCap className="w-8 h-8 text-primary" /> Education
                </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
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
