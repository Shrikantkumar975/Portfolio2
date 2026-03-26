import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../layout/SectionWrapper';

const categories = [
    {
        id:    'LANG',
        label: 'LANGUAGES',
        color: '#f7df1e',
        colorClass: 'text-yellow-300',
        borderClass: 'border-yellow-300/40',
        count: 5,
        skills: [
            { pid: '001', name: 'JavaScript', level: 92, status: 'RUNNING' },
            { pid: '002', name: 'TypeScript', level: 80, status: 'RUNNING' },
            { pid: '003', name: 'Java',       level: 75, status: 'ACTIVE'  },
            { pid: '004', name: 'C++',        level: 70, status: 'ACTIVE'  },
            { pid: '005', name: 'SQL',        level: 82, status: 'RUNNING' },
        ]
    },
    {
        id:    'FRONT',
        label: 'FRONT-END',
        color: '#61DAFB',
        colorClass: 'text-blue-400',
        borderClass: 'border-blue-400/40',
        count: 3,
        skills: [
            { pid: '006', name: 'React.js',     level: 90, status: 'RUNNING' },
            { pid: '007', name: 'Next.js',      level: 78, status: 'ACTIVE'  },
            { pid: '008', name: 'Tailwind CSS', level: 88, status: 'RUNNING' },
        ]
    },
    {
        id:    'BACK',
        label: 'BACK-END',
        color: '#8eff71',
        colorClass: 'text-primary',
        borderClass: 'border-primary/40',
        count: 4,
        skills: [
            { pid: '009', name: 'Node.js',    level: 87, status: 'RUNNING' },
            { pid: '010', name: 'Express.js', level: 85, status: 'RUNNING' },
            { pid: '011', name: 'REST APIs',  level: 90, status: 'RUNNING' },
            { pid: '012', name: 'JWT Auth',   level: 82, status: 'ACTIVE'  },
        ]
    },
    {
        id:    'DB',
        label: 'DATABASES',
        color: '#4CAF50',
        colorClass: 'text-green-400',
        borderClass: 'border-green-400/40',
        count: 4,
        skills: [
            { pid: '013', name: 'MongoDB',    level: 85, status: 'RUNNING' },
            { pid: '014', name: 'MySQL',      level: 78, status: 'ACTIVE'  },
            { pid: '015', name: 'PostgreSQL', level: 72, status: 'ACTIVE'  },
            { pid: '016', name: 'Redis',      level: 68, status: 'IDLE'    },
        ]
    },
    {
        id:    'OPS',
        label: 'DEVOPS & TOOLS',
        color: '#FF9900',
        colorClass: 'text-orange-400',
        borderClass: 'border-orange-400/40',
        count: 4,
        skills: [
            { pid: '017', name: 'Docker',      level: 75, status: 'ACTIVE'  },
            { pid: '018', name: 'Git & GitHub', level: 90, status: 'RUNNING' },
            { pid: '019', name: 'Linux',       level: 72, status: 'ACTIVE'  },
            { pid: '020', name: 'AWS',         level: 65, status: 'IDLE'    },
        ]
    },
];

const statusStyle = {
    RUNNING: { label: '● RUNNING', color: 'text-primary'  },
    ACTIVE:  { label: '● ACTIVE',  color: 'text-blue-400' },
    IDLE:    { label: '○ IDLE',    color: 'text-outline'  },
};

const Skills = () => {
    const [activeId, setActiveId] = useState(null);

    const totalProcesses = categories.reduce((sum, c) => sum + c.skills.length, 0);
    const activeGroup = categories.find(c => c.id === activeId);

    return (
        <SectionWrapper id="skills">
            <div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase mb-2">
                        Skills <span className="text-primary">&</span> Tools
                    </h2>
                    <p className="text-on-surface-variant text-sm font-mono">
                        // select a process group to inspect active modules
                    </p>
                </motion.div>

                {/* Terminal window */}
                <div className="border-2 border-outline bg-surface-container-lowest block-shadow-primary">

                    {/* Title bar */}
                    <div className="bg-surface-container-highest border-b-2 border-outline px-4 py-2 flex items-center justify-between">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 bg-error" />
                            <div className="w-3 h-3 bg-secondary" />
                            <div className="w-3 h-3 bg-primary" />
                        </div>
                        <span className="font-mono text-[10px] text-outline tracking-widest">
                            PROCESS_MANAGER — GROUPS: {categories.length} — TOTAL: {totalProcesses}
                        </span>
                        <span className="font-mono text-[10px] text-primary animate-pulse">● LIVE</span>
                    </div>

                    {/* Category group buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-b-2 border-outline">
                        {categories.map((cat, i) => (
                            <motion.button
                                key={cat.id}
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.07 }}
                                onMouseEnter={() => setActiveId(cat.id)}
                                onClick={() => setActiveId(activeId === cat.id ? null : cat.id)}
                                className={`relative p-4 text-left border-r border-outline last:border-r-0 transition-all duration-200 group cursor-pointer
                                    ${activeId === cat.id
                                        ? 'bg-surface-container-highest'
                                        : 'hover:bg-surface-container'
                                    }`}
                            >
                                {/* Active indicator bar */}
                                {activeId === cat.id && (
                                    <motion.div
                                        layoutId="activebar"
                                        className="absolute top-0 left-0 right-0 h-[2px]"
                                        style={{ backgroundColor: cat.color }}
                                    />
                                )}

                                <p className={`font-label text-[9px] tracking-[0.2em] mb-2 ${cat.colorClass}`}>
                                    [{cat.label}]
                                </p>
                                <p className="font-headline font-black text-xl text-white">
                                    {String(cat.count).padStart(2, '0')}
                                </p>
                                <p className="font-mono text-[10px] text-outline mt-1">
                                    processes
                                </p>

                                {/* Active arrow */}
                                {activeId === cat.id && (
                                    <span className={`absolute bottom-2 right-3 font-mono text-[10px] ${cat.colorClass}`}>▼</span>
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Expandable process list */}
                    <AnimatePresence mode="wait">
                        {activeGroup ? (
                            <motion.div
                                key={activeGroup.id}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                className="overflow-hidden"
                            >
                                {/* Column headers */}
                                <div
                                    className="grid px-4 py-2 border-b border-outline bg-surface-container text-outline font-label text-[10px] tracking-widest uppercase"
                                    style={{ gridTemplateColumns: '3rem 1fr 10rem 4rem 6rem' }}
                                >
                                    <span>PID</span>
                                    <span>PROCESS_NAME</span>
                                    <span>CPU_USAGE</span>
                                    <span className="text-right">LEVEL</span>
                                    <span className="text-right">STATUS</span>
                                </div>

                                {/* Skill rows */}
                                {activeGroup.skills.map((skill, i) => {
                                    const status = statusStyle[skill.status];
                                    return (
                                        <motion.div
                                            key={skill.pid}
                                            initial={{ opacity: 0, x: -16 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.25, delay: i * 0.06 }}
                                            className="grid items-center gap-4 px-4 py-3 border-b border-outline-variant/30 hover:bg-white/[0.03] transition-colors group"
                                            style={{ gridTemplateColumns: '3rem 1fr 10rem 4rem 6rem' }}
                                        >
                                            <span className="font-mono text-[11px] text-outline">{skill.pid}</span>

                                            <span className="font-headline font-bold text-sm text-white group-hover:text-primary transition-colors">
                                                {skill.name}
                                            </span>

                                            {/* Animated bar */}
                                            <div className="h-[4px] bg-surface-container-highest rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 0.7, delay: i * 0.06 + 0.1, ease: 'easeOut' }}
                                                    className="h-full rounded-full"
                                                    style={{ backgroundColor: activeGroup.color }}
                                                />
                                            </div>

                                            <span
                                                className="font-headline font-black text-base text-right"
                                                style={{ color: activeGroup.color }}
                                            >
                                                {skill.level}%
                                            </span>

                                            <span className={`font-mono text-[10px] text-right ${status.color}`}>
                                                {status.label}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="px-4 py-10 text-center font-mono text-xs text-outline-variant uppercase animate-pulse"
                            >
                                ▶ click a process group to inspect modules...
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Footer */}
                    <div className="px-4 py-2 border-t border-outline bg-surface-container-highest flex justify-between items-center text-[10px] font-mono text-outline uppercase">
                        <span>
                            {activeGroup
                                ? `VIEWING: [${activeGroup.label}] — ${activeGroup.skills.length} PROCESSES`
                                : 'NO GROUP SELECTED'}
                        </span>
                        <span className="text-primary">SYS_OK</span>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
};

export default Skills;
