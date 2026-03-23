import { motion } from 'framer-motion';
import { Trophy, Star, Code2 } from 'lucide-react';
import SectionWrapper from '../layout/SectionWrapper';

const Achievements = () => {
    const achievements = [
        {
            icon: <Code2 className="w-8 h-8 text-primary" />,
            title: "LeetCode Enthusiast",
            metric: "400+",
            description: "Problems solved with a focus on Data Structures and Algorithms.",
            link: "https://leetcode.com/yourusername"
        },
        {
            icon: <Star className="w-8 h-8 text-yellow-500" />,
            title: "HackerRank Problem Solving",
            metric: "5 Stars",
            description: "Achieved 5-star rating in Problem Solving domain.",
            link: "https://hackerrank.com/yourusername"
        },
        {
            icon: <Trophy className="w-8 h-8 text-purple-500" />,
            title: "Competitive Programming",
            metric: "Top 5%",
            description: "Consistent participant in weekly coding contests and hackathons.",
            link: "#"
        }
    ];

    return (
        <SectionWrapper id="achievements" className="bg-muted/30">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center gap-2">
                    <Trophy className="w-8 h-8 text-primary" /> Achievements
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
                {achievements.map((item, index) => (
                    <motion.a
                        href={item.link}
                        target={item.link !== "#" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all group flex flex-col items-center cursor-pointer"
                    >
                        <div className="mb-4 p-4 bg-muted rounded-full group-hover:scale-110 transition-transform">
                            {item.icon}
                        </div>

                        <h3 className="text-4xl font-bold text-foreground mb-2">
                            {item.metric}
                        </h3>

                        <h4 className="text-lg font-semibold text-primary mb-3">
                            {item.title}
                        </h4>

                        <p className="text-sm text-muted-foreground">
                            {item.description}
                        </p>
                    </motion.a>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Achievements;
