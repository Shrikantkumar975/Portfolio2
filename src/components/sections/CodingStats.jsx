import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionWrapper from '../layout/SectionWrapper';

const CodingStats = () => {
    const platforms = [
        {
            name: 'LeetCode',
            handle: 'shrikumar975',
            stat: '700+',
            statLabel: 'Problems Solved',
            badge: '1624',
            badgeColor: 'text-yellow-400 border-yellow-400/40 bg-yellow-400/5',
            accent: '#FFA116',
            link: 'https://leetcode.com/u/shrikumar975/',
            details: ['Data Structures', 'Algorithms', 'Dynamic Programming'],
        },
        {
            name: 'HackerRank',
            handle: 'shrikumar975',
            stat: '4★',
            statLabel: 'Problem Solving',
            badge: '#',
            badgeColor: 'text-yellow-300 border-yellow-300/40 bg-yellow-300/5',
            accent: '#00EA64',
            link: 'https://www.hackerrank.com/profile/shrikumar975',
            details: ['Problem Solving', 'Java', 'SQL', 'C++'],
        },
        {
            name: 'Codeforces',
            handle: 'shrikumar975',
            stat: '1224',
            statLabel: 'Current Rating',
            badge: 'Pupil',
            badgeColor: 'text-blue-400 border-blue-400/40 bg-blue-400/5',
            accent: '#1F8ACB',
            link: 'https://codeforces.com/profile/shrikumar975',
            details: ['Competitive Programming', 'Contests', 'Div. 2'],
        },
        {
            name: 'CodeChef',
            handle: 'shrikumar975',
            stat: '3★',
            statLabel: 'Rating',
            badge: '1500+',
            badgeColor: 'text-orange-400 border-orange-400/40 bg-orange-400/5',
            accent: '#5B4638',
            link: 'https://www.codechef.com/users/shrikumar975',
            details: ['Long Challenges', 'Cook-Off', 'Lunchtime'],
        },
        {
            name: 'GeeksForGeeks',
            handle: 'shrikumar975',
            stat: '400+',
            statLabel: 'Problems Solved',
            badge: '#',
            badgeColor: 'text-green-400 border-green-400/40 bg-green-400/5',
            accent: '#2F8D46',
            link: 'https://www.geeksforgeeks.org/profile/shrikumar975',
            details: ['Interview Prep', 'DSA', 'Practice'],
        },
    ];

    return (
        <SectionWrapper id="achievements">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 border-l-4 border-primary pl-6"
            >
                <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase mb-2">
                    Coding <span className="text-primary">Stats</span>
                </h2>
                <p className="text-on-surface-variant text-sm font-mono">
                    // competitive_programming_dashboard
                </p>
            </motion.div>

            {/* Platform Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {platforms.map((p, i) => (
                    <motion.a
                        key={p.name}
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className="group relative border-2 border-outline bg-surface-container-lowest p-6 hover:border-primary/60 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:block-shadow-primary"
                        style={{ '--accent': p.accent }}
                    >
                        {/* Top row: name + external link icon */}
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="font-headline font-bold text-lg uppercase tracking-tight text-white group-hover:text-primary transition-colors">
                                    {p.name}
                                </h3>
                                <p className="font-mono text-[11px] text-outline mt-0.5">@{p.handle}</p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-outline group-hover:text-primary transition-colors mt-1 shrink-0" />
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-outline-variant mb-4 opacity-40" />

                        {/* Big stat */}
                        <div className="mb-1">
                            <span
                                className="font-headline font-black text-4xl"
                                style={{ color: p.accent }}
                            >
                                {p.stat}
                            </span>
                        </div>
                        <p className="text-on-surface-variant text-xs font-mono mb-5">{p.statLabel}</p>

                        {/* Badge + tags */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className={`text-[10px] font-bold font-label border px-2 py-0.5 uppercase tracking-widest ${p.badgeColor}`}>
                                {p.badge}
                            </span>
                            {p.details.map((d) => (
                                <span key={d} className="text-[10px] text-outline font-mono">
                                    #{d.toLowerCase().replace(/ /g, '_')}
                                </span>
                            ))}
                        </div>

                        {/* Bottom accent bar */}
                        <div
                            className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                            style={{ backgroundColor: p.accent }}
                        />
                    </motion.a>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default CodingStats;
