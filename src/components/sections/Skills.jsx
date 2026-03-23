import { useState, useEffect } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const Skills = () => {
    const [activeDomain, setActiveDomain] = useState(null);
    const [leetcodeStats, setLeetcodeStats] = useState(null);
    const [leetcodeBadges, setLeetcodeBadges] = useState([]);
    const [currentBadgeIndex, setCurrentBadgeIndex] = useState(0);

    useEffect(() => {
        if (leetcodeBadges.length > 0) {
            const interval = setInterval(() => {
                setCurrentBadgeIndex(prev => (prev + 1) % leetcodeBadges.length);
            }, 3000); // Swap every 3 seconds
            return () => clearInterval(interval);
        }
    }, [leetcodeBadges]);
    
    // Replace with your exact LeetCode username
    const leetcodeUsername = 'shrikumar975'; 

    useEffect(() => {
        const fetchLeetCodeData = async () => {
            try {
                // Fetching from a more reliable LeetCode open-source API
                const [statsRes, profileRes, contestRes, badgesRes] = await Promise.all([
                    fetch(`https://alfa-leetcode-api.onrender.com/${leetcodeUsername}/solved`),
                    fetch(`https://alfa-leetcode-api.onrender.com/${leetcodeUsername}`),
                    fetch(`https://alfa-leetcode-api.onrender.com/${leetcodeUsername}/contest`),
                    fetch(`https://alfa-leetcode-api.onrender.com/${leetcodeUsername}/badges`)
                ]);
                
                const statsData = await statsRes.json();
                const profileData = await profileRes.json();
                const contestData = await contestRes.json();
                const badgesData = await badgesRes.json();

                if (badgesData && badgesData.badges) {
                    setLeetcodeBadges(badgesData.badges);
                }

                if (statsData && profileData && contestData) {
                    setLeetcodeStats({
                        totalSolved: statsData.solvedProblem,
                        easySolved: statsData.easySolved,
                        mediumSolved: statsData.mediumSolved,
                        hardSolved: statsData.hardSolved,
                        ranking: profileData.ranking,
                        contestRating: Math.round(contestData.contestRating || 0)
                    });
                }
            } catch (error) {
                console.error("Failed to fetch LeetCode data", error);
            }
        };

        fetchLeetCodeData();
    }, [leetcodeUsername]);

    const domainDetails = {
        'FRONT-END': [
            'React.js / Next.js',
            'Tailwind CSS & Frontend UI',
            'State Management (Redux/Context)',
            'Responsive & Animated Web Design'
        ],
        'BACK-END': [
            'Node.js & Express.js',
            'RESTful API Development',
            'Authentication (JWT)',
            'Microservices Architecture'
        ],
        'DATABASE': [
            'MongoDB / NoSQL Architectures',
            'PostgreSQL / MySQL',
            'Mongoose & Prisma ORM',
            'Database Optimization'
        ],
        'DEPLOYMENT': [
            'Docker Containerization',
            'AWS & Cloud Infrastructure',
            'Linux / Ubuntu Server Config',
            'CI/CD Pipelines'
        ],
        'VERSION CONTROL': [
            'Git & GitHub Workflows',
            'Collaborative Development',
            'Branching Strategies',
            'Code Reviews & Issue Tracking'
        ]
    };

    const techSkills = [
        { name: 'FRONT-END', val: 90 },
        { name: 'BACK-END', val: 85 },
        { name: 'DATABASE', val: 80 },
        { name: 'DEPLOYMENT', val: 75 },
        { name: 'VERSION CONTROL', val: 85 }
    ];

    const radarData = {
        labels: techSkills.map(t => t.name),
        datasets: [
            {
                label: 'Proficiency',
                data: techSkills.map(t => t.val),
                backgroundColor: 'rgba(142, 255, 113, 0.2)', // primary color
                borderColor: 'rgba(142, 255, 113, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(142, 255, 113, 1)',
                pointBorderColor: '#000',
                pointHoverBackgroundColor: '#000',
                pointHoverBorderColor: 'rgba(142, 255, 113, 1)',
                pointRadius: 4,
                pointHoverRadius: 6
            }
        ]
    };

    const radarOptions = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: 30 // Adds breathing room inside the canvas so labels don't get cut off!
        },
        scales: {
            r: {
                angleLines: {
                    color: 'rgba(142, 255, 113, 0.3)'
                },
                grid: {
                    color: 'rgba(142, 255, 113, 0.3)'
                },
                pointLabels: {
                    color: 'rgba(142, 255, 113, 1)',
                    font: {
                        family: "'Inter', sans-serif",
                        size: 10,
                        weight: 'bold'
                    }
                },
                min: 0,
                max: 100,
                ticks: {
                    display: false, // hide the numbers (0, 20, 40)
                    stepSize: 20
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: 'rgba(142, 255, 113, 1)',
                bodyColor: '#fff',
                borderColor: 'rgba(142, 255, 113, 1)',
                borderWidth: 1,
                callbacks: {
                    label: function (context) {
                        return `${context.raw}%`;
                    }
                }
            }
        }
    };
    return (
        <SectionWrapper id="skills" className="pt-24 pb-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <section className="mb-12 border-l-4 border-primary pl-4 md:pl-6">
                    <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-on-background mb-2 leading-none uppercase tracking-tighter md:tracking-normal break-words">
                        SYSTEM_CAPABILITIES
                    </h1>
                    <p className="font-label text-primary tracking-[0.2em] text-xs">
                        [CORE_COMPETENCIES_MAPPING_v1.0]
                    </p>
                </section>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Radar Chart Section */}
                    <div className="md:col-span-8 bg-surface-container border-2 border-outline p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-2 font-label text-[10px] text-outline border-l border-b border-outline">
                            CHART_ID: SIG_098
                        </div>
                        <h2 className="font-headline text-2xl font-black mb-8 flex items-center gap-3 uppercase">
                            <span className="w-3 h-3 bg-primary block"></span>
                            PROFICIENCY_RADAR
                        </h2>

                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
                            {/* Dynamic Radar Chart Block */}
                            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] aspect-square flex items-center justify-center shrink-0 mx-auto">
                                <Radar data={radarData} options={radarOptions} />
                            </div>

                            {/* Tech List */}
                            <div className="flex flex-col gap-4 w-full lg:w-48 shrink-0">
                                {techSkills.map(tech => (
                                    <div key={tech.name} className="border-b border-outline-variant pb-2">
                                        <div className="flex justify-between items-end mb-1">
                                            <span className="font-label text-xs">{tech.name}</span>
                                            <span className="font-headline text-primary text-xl font-bold">{tech.val}%</span>
                                        </div>
                                        <div className="w-full h-1 bg-surface-variant">
                                            <div className="h-full bg-primary" style={{ width: `${tech.val}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Achievement Highlight */}
                    <div className="md:col-span-4 flex flex-col gap-6">
                        {/* LeetCode Card */}
                        <div className="flex-1 bg-surface-container-high border-2 border-outline p-6 flex flex-col justify-center items-center text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[200%] animate-[scanline_3s_linear_infinite] pointer-events-none"></div>
                            <div className="font-headline text-6xl font-black text-on-surface mb-2 tracking-tighter mt-4">
                                {leetcodeStats ? leetcodeStats.contestRating : '...'}
                            </div>
                            <div className="font-label text-primary tracking-widest text-sm mb-4">CONTEST_RATING</div>
                            <div className="bg-black/50 border border-outline px-3 py-1 font-label text-[10px] text-outline mb-6">
                                {leetcodeStats ? `GLOBAL RANK: ${leetcodeStats.ranking}` : 'FETCHING_DATA...'}
                            </div>
                            
                            <div className="w-full grid grid-cols-3 gap-2">
                                <div className="bg-surface-container p-2 border border-outline-variant">
                                    <div className="text-[10px] text-outline mb-1">EASY</div>
                                    <div className="font-headline text-primary">
                                        {leetcodeStats ? leetcodeStats.easySolved : '...'}
                                    </div>
                                </div>
                                <div className="bg-surface-container p-2 border border-outline-variant">
                                    <div className="text-[10px] text-outline mb-1">MEDIUM</div>
                                    <div className="font-headline text-secondary">
                                        {leetcodeStats ? leetcodeStats.mediumSolved : '...'}
                                    </div>
                                </div>
                                <div className="bg-surface-container p-2 border border-outline-variant">
                                    <div className="text-[10px] text-outline mb-1">HARD</div>
                                    <div className="font-headline text-error">
                                        {leetcodeStats ? leetcodeStats.hardSolved : '...'}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Badges Carousel */}
                        <div className="bg-surface-container-highest border-2 border-primary p-6 relative flex flex-col justify-center items-center overflow-hidden min-h-[160px]">
                            <div className="absolute top-2 left-2 font-label text-[10px] text-primary">[ACHIEVEMENT_VAULT]</div>
                            
                            {leetcodeBadges.length > 0 ? (
                                <div className="flex flex-col items-center animate-pulse transition-opacity duration-500" key={currentBadgeIndex}>
                                    <img 
                                        src={leetcodeBadges[currentBadgeIndex].icon.startsWith('http') 
                                            ? leetcodeBadges[currentBadgeIndex].icon 
                                            : `https://leetcode.com${leetcodeBadges[currentBadgeIndex].icon}`} 
                                        alt="Badge" 
                                        className="w-16 h-16 drop-shadow-[0_0_8px_rgba(142,255,113,0.5)] mb-3"
                                    />
                                    <h3 className="font-headline text-sm mb-1 font-black uppercase text-center text-on-surface">
                                        {leetcodeBadges[currentBadgeIndex].displayName}
                                    </h3>
                                    <p className="font-label text-[10px] text-primary">
                                        ACQUIRED: {leetcodeBadges[currentBadgeIndex].creationDate || 'N/A'}
                                    </p>
                                </div>
                            ) : (
                                <div className="text-outline-variant font-mono text-xs uppercase animate-pulse">
                                    Loading Badges...
                                </div>
                            )}

                            {/* Carousel Indicators (Max 10 displayed to prevent overflow) */}
                            {leetcodeBadges.length > 0 && (
                                <div className="absolute bottom-3 flex gap-1 items-center justify-center w-full">
                                    {leetcodeBadges.slice(0, Math.min(10, leetcodeBadges.length)).map((_, idx) => (
                                        <div 
                                            key={idx} 
                                            className={`h-1 transition-all ${idx === (currentBadgeIndex % 10) ? 'w-4 bg-primary' : 'w-1 bg-outline-variant'}`}
                                        ></div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Interactive Domain Details Panel */}
                    <div className="md:col-span-12 bg-black border-2 border-outline overflow-hidden mt-6">
                        <div className="p-4 border-b border-outline flex justify-between items-center bg-surface-container-low">
                            <span className="font-label text-xs tracking-widest uppercase">TECH_STACK_BREAKDOWN</span>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary animate-pulse"></div>
                                    <span className="font-label text-[10px]">AWAITING_INPUT</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 border-b border-outline">
                            {Object.keys(domainDetails).map((domain) => (
                                <button
                                    key={domain}
                                    onMouseEnter={() => setActiveDomain(domain)}
                                    onFocus={() => setActiveDomain(domain)}
                                    onClick={() => setActiveDomain(domain)}
                                    className={`p-4 font-headline flex-1 font-bold text-xs md:text-sm uppercase transition-all text-left sm:text-center border-b md:border-b-0 md:border-r border-outline last:border-r-0 hover:bg-surface-container ${activeDomain === domain ? 'bg-primary text-black hover:text-white' : 'text-on-surface'}`}
                                >
                                    {domain}
                                </button>
                            ))}
                        </div>

                        {/* Details Panel */}
                        <div className="p-6 md:p-8 min-h-[180px] bg-surface-container-lowest flex items-center">
                            {activeDomain ? (
                                <div className="w-full">
                                    <h3 className="font-label text-primary text-sm mb-4 tracking-widest">[{activeDomain}_MODULES]</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                        {domainDetails[activeDomain].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-on-surface-variant group">
                                                <span className="text-secondary">&gt;</span>
                                                <span className="font-mono text-sm group-hover:text-primary transition-colors cursor-default">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <div className="w-full text-center text-outline-variant font-mono text-xs uppercase animate-pulse">
                                    Hover over a domain to decrypt skill data...
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Terminal Output Decorator */}
                <div className="mt-12 bg-surface-container-lowest border border-outline p-4 font-mono text-[10px] text-outline-variant uppercase">
                    <div>&gt; FETCHING SKILLS_DATA_STREAM... DONE</div>
                    <div>&gt; ANALYZING LEETCODE_API_RESULT... 600+ PROBLEMS IDENTIFIED</div>
                    <div>&gt; CALCULATING TECH_WEIGHT_RATIO... READY</div>
                    <div className="text-primary animate-pulse">&gt; SYSTEM_READY_FOR_ENGAGEMENT_</div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Skills;
