import { motion } from 'framer-motion';
import SectionWrapper from '../layout/SectionWrapper';

const About = () => {
    return (
        <SectionWrapper id="about">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 border-l-4 border-primary pl-6"
            >
                <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase mb-2">
                    About <span className="text-primary">Me</span>
                </h2>
                <p className="text-on-surface-variant text-sm font-mono tracking-widest uppercase">
                    // human_interface_profile_data
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Picture */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        {/* Corner brackets */}
                        <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-primary" />
                        <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-primary" />
                        <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-primary" />
                        <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-primary" />

                        <div className="w-full h-full border-2 border-outline overflow-hidden">
                            <img
                                src="/profile-pic.png"
                                alt="Shrikant Kumar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className="space-y-5 text-on-surface-variant text-base leading-relaxed">
                        <p>
                            I am a <b>Computer Science Engineering student</b> dedicated to building high-performance systems and solving complex algorithmic challenges. My development journey is fueled by a merge of technical curiosity and a goal to create digital solutions that work seamlessly.
                        </p>

                        <p>
                            With over <b>700+ problems solved on LeetCode</b>, and <b>1600+ rating</b>  on LeetCode, I’ve built a solid foundation in data structures and algorithms. This analytical background allows me to write optimized code and tackle complex bugs with a structured, problem-solving mindset.
                        </p>

                        <p>
                            Currently, I focus on the <b>MERN stack</b>, Java, and SQL to bridge the gap between robust backend systems and intuitive frontend experiences. My objective is simple: to deliver clean, purposeful, and scalable code that solves real-world problems.
                        </p>
                    </div>
                </motion.div>

            </div>
        </SectionWrapper>
    );
};

export default About;
