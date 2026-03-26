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
                            Hello! I'm <span className="text-white font-semibold">Shrikant Kumar</span>, a B.Tech Computer Science student
                            with a deep passion for full-stack development and software architecture.
                        </p>
                        <p>
                            My journey in tech is driven by the thrill of solving complex problems and
                            building systems that handle data efficiently at scale. I thrive in environments
                            where performance and reliability are critical.
                        </p>
                        <p>
                            I specialize in the <span className="text-white font-semibold">MERN stack</span> and enjoy crafting scalable
                            REST APIs, clean UI interfaces, and robust backend systems. I'm also comfortable
                            with Docker and containerized deployments.
                        </p>
                        <p>
                            Beyond coding, I constantly challenge myself with algorithmic problems —
                            having solved <span className="text-primary font-semibold">700+ problems</span> on LeetCode and holding a
                            4-star rating on HackerRank.
                        </p>
                    </div>
                </motion.div>

            </div>
        </SectionWrapper>
    );
};

export default About;
