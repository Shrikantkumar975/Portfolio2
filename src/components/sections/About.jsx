import { motion } from 'framer-motion';
import { Server, Database, Code, Terminal, User } from 'lucide-react';
import SectionWrapper from '../layout/SectionWrapper';

const About = () => {
    const highlights = [
        {
            icon: <Server className="w-6 h-6 text-primary" />,
            title: "Backend Focus",
            description: "Specializing in microservices, REST APIs, and scalable architectures."
        },
        {
            icon: <Database className="w-6 h-6 text-purple-500" />,
            title: "Performance",
            description: "Optimizing queries, caching strategies, and reducing latency."
        },
        {
            icon: <Code className="w-6 h-6 text-pink-500" />,
            title: "Problem Solving",
            description: "Strong DSA fundamentals with 700+ problems solved on LeetCode."
        },
        {
            icon: <Terminal className="w-6 h-6 text-blue-500" />,
            title: "Clean Code",
            description: "Writing maintainable, testable, and well-documented software."
        }
    ];

    return (
        <SectionWrapper id="about" className="bg-muted/30">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                {/* Left text content */}
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-2">
                            <User className="w-8 h-8 text-primary" /> About Me
                        </h2>

                        <div className="space-y-4 text-muted-foreground text-lg mb-8">
                            <p>
                                Hello! I'm Shrikant, a highly motivated B.Tech Computer Science student
                                with a deep passion for backend development and software architecture.
                            </p>
                            <p>
                                My journey in tech is driven by the thrill of solving complex problems and
                                building systems that handle data efficiently at scale. I thrive in environments
                                where performance and reliability are critical.
                            </p>
                            <p>
                                Beyond coding, I'm constantly challenging myself with algorithmic problems,
                                having built a strong foundation in Data Structures and Algorithms with a
                                significant presence on platforms like LeetCode and HackerRank.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Right card grid */}
                <div className="flex-1 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all group"
                            >
                                <div className="mb-4 p-3 bg-muted rounded-lg inline-block group-hover:bg-primary/10 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Quick Metrics */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-6 flex flex-wrap gap-4"
                    >
                        <div className="flex-1 bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/20 rounded-xl p-4 flex items-center gap-4">
                            <span className="text-3xl font-bold text-foreground">700+</span>
                            <span className="text-sm font-medium text-muted-foreground leading-tight">LeetCode<br />Solved</span>
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 rounded-xl p-4 flex items-center gap-4">
                            <span className="text-3xl font-bold text-foreground">4★</span>
                            <span className="text-sm font-medium text-muted-foreground leading-tight">HackerRank<br />Problem Solving</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
