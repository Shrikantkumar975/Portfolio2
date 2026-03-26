import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import SectionWrapper from '../layout/SectionWrapper';

const certificationsList = [
    {
        title: "API Fundamentals Student Expert",
        issuer: "Postman",
        date: "2025",
        image: "/certificates/postman.png",
        pdf: "/certificates/postman.pdf",
        link: "#"
    },
    {
        title: "Java (Basic) Certificate",
        issuer: "HackerRank",
        date: "2025",
        image: "/certificates/Java-basic.png",
        pdf: "/certificates/java_basic certificate.pdf",
        link: "#"
    },
    {
        title: "JavaScript (Basic) Certificate",
        issuer: "HackerRank",
        date: "2026",
        image: "/certificates/javascript-basic.png",
        pdf: "/certificates/javascript_basic certificate.pdf",
        link: "#"
    },
    {
        title: "Oracle Cloud Infrastructure DevOps",
        issuer: "Oracle",
        date: "2025",
        image: "/certificates/OCI-Devops.png",
        pdf: "/certificates/Oracle DevOPS.pdf",
        link: "#"
    },
    {
        title: "Oracle Cloud Infrastructure Foundations Associate",
        issuer: "Oracle",
        date: "2025",
        image: "/certificates/Oracle-Certified-Foundation-Asssociate.png",
        pdf: "/certificates/Oracle-Certified-Foundation-Associate.pdf",
        link: "#"
    },
    {
        title: "Cloud Computing - NPTEL",
        issuer: "NPTEL",
        date: "2025",
        image: "/certificates/Cloud-Computing.png",
        pdf: "/certificates/Cloud Computing - NPTEL.pdf",
        link: "#"
    },
    {
        title: "DSA Summer Training",
        issuer: "Hitbullseye",
        date: "2025",
        image: "/certificates/DSA-Training.png",
        pdf: "/certificates/DSA Summer Training - hitbullseye.pdf",
        link: "#"
    }
];

const CertificationModal = ({ cert, isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative max-w-5xl w-full bg-surface-container-low border-2 border-outline-variant p-2 rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute -top-12 right-0 md:-right-12 text-white hover:text-primary transition-colors p-2"
                        >
                            <X size={32} />
                        </button>
                        
                        <div className="relative overflow-hidden rounded-md bg-black">
                            {/* Certificate Image */}
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-auto max-h-[80vh] object-contain"
                                onError={(e) => {
                                    e.target.src = 'https://placehold.co/1200x800/1a1a1a/8eff71?text=Certificate+Preview';
                                }}
                            />
                            
                            {/* Info Banner at Bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent border-t border-outline-variant/30">
                                <h3 className="font-headline text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
                                    {cert.title}
                                </h3>
                                <div className="flex items-center justify-between mt-2 flex-wrap gap-4">
                                    <p className="font-mono text-sm text-primary uppercase tracking-widest">
                                        // issued_by: {cert.issuer}
                                    </p>
                                    <div className="flex items-center gap-6">
                                        {cert.pdf && (
                                            <a
                                                href={cert.pdf}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-xs font-label uppercase tracking-widest text-primary hover:text-white transition-colors"
                                            >
                                                View PDF Original <ExternalLink size={14} />
                                            </a>
                                        )}
                                        {cert.link !== "#" && (
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-xs font-label uppercase tracking-widest text-outline hover:text-white transition-colors"
                                            >
                                                Verify Credential <ExternalLink size={14} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const Certifications = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedCert, setSelectedCert] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const itemsToShow = 3;
    const totalItems = certificationsList.length;
    const numPages = Math.ceil(totalItems / itemsToShow);

    const next = () => {
        setCurrentPage((prev) => (prev + 1) % numPages);
    };

    const prev = () => {
        setCurrentPage((prev) => (prev - 1 + numPages) % numPages);
    };

    const handleOpenModal = (cert) => {
        setSelectedCert(cert);
        setIsModalOpen(true);
    };

    // Helper to get visible items (circular)
    const getVisibleItems = () => {
        const items = [];
        const startIndex = currentPage * itemsToShow;
        for (let i = 0; i < itemsToShow; i++) {
            items.push(certificationsList[(startIndex + i) % totalItems]);
        }
        return items;
    };

    return (
        <SectionWrapper id="certifications">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header Row */}
                <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="border-l-4 border-primary pl-6"
                    >
                        <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase mb-2">
                            Certifications
                        </h2>
                        <p className="text-on-surface-variant text-sm font-mono tracking-widest uppercase">
                            // technical_certifications_repository
                        </p>
                    </motion.div>

                    {/* Navigation buttons */}
                    <div className="flex gap-2">
                        <button
                            onClick={prev}
                            aria-label="Previous certificates"
                            className="w-12 h-12 border-2 border-outline flex items-center justify-center text-outline hover:border-primary hover:text-primary transition-all active:scale-95"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={next}
                            aria-label="Next certificates"
                            className="w-12 h-12 border-2 border-outline flex items-center justify-center text-outline hover:border-primary hover:text-primary transition-all active:scale-95"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Carousel Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative overflow-visible">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {getVisibleItems().map((cert, index) => (
                            <motion.div
                                key={`${cert.title}-${currentPage}-${index}`}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                onClick={() => handleOpenModal(cert)}
                                className="group relative cursor-pointer border-2 border-outline bg-surface-container-lowest overflow-hidden hover:border-primary/50 transition-all duration-300"
                            >
                                {/* Certificate Preview Image */}
                                <div className="aspect-[4/3] bg-black relative overflow-hidden group">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                        onError={(e) => {
                                            e.target.src = 'https://placehold.co/600x400/1a1a1a/8eff71?text=' + cert.title;
                                        }}
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-12 h-12 bg-primary text-black rounded-full flex items-center justify-center shadow-2xl">
                                            <ZoomIn size={24} />
                                        </div>
                                    </div>
                                    
                                    {/* Corner Badge */}
                                    <div className="absolute top-0 right-0 p-2">
                                        <div className="w-8 h-8 border-t-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 border-t-2 border-outline">
                                    <div className="flex items-center gap-2 text-primary font-mono text-[10px] tracking-widest uppercase mb-2">
                                        <Award size={12} /> {cert.issuer}
                                    </div>
                                    <h3 className="font-headline font-bold text-lg text-white uppercase tracking-tight group-hover:text-primary transition-colors line-clamp-2 min-h-[56px]">
                                        {cert.title}
                                    </h3>
                                    <p className="mt-4 text-xs font-mono text-outline uppercase tracking-widest">
                                        Issued: {cert.date}
                                    </p>
                                </div>

                                {/* Decorative bottom line */}
                                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Status bar */}
                <div className="mt-12 flex justify-center">
                    <div className="font-mono text-[10px] text-outline tracking-widest uppercase flex items-center gap-4">
                        <span>[ status: secure_vault_active ]</span>
                        <div className="flex gap-2">
                            {Array.from({ length: numPages }).map((_, i) => (
                                <div 
                                    key={i} 
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                        i === currentPage ? 'bg-primary scale-125' : 'bg-outline/30'
                                    }`} 
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedCert && (
                <CertificationModal
                    cert={selectedCert}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </SectionWrapper>
    );
};

export default Certifications;
