import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
    // Prevent scrolling when modal is open
    if (typeof window !== 'undefined') {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-5xl h-[90vh] bg-surface-container-lowest border-2 border-outline block-shadow-primary flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-surface-container-highest border-b-2 border-outline p-4 flex justify-between items-center z-10">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded">
                                    <FileText className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-headline font-bold text-sm md:text-base tracking-tight text-white uppercase">
                                        SYSTEM_CORE_RESUME_VIEWER
                                    </h3>
                                    <p className="font-mono text-[10px] text-on-surface-variant flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-primary animate-pulse rounded-full"></span>
                                        LIVE_PREVIEW_READY
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 md:gap-4">
                                <a
                                    href="/resume.pdf"
                                    download="My_Resume.pdf"
                                    className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary font-label font-bold text-xs border-2 border-on-primary-fixed hover:bg-primary-container hover:text-black transition-all cursor-pointer"
                                >
                                    <Download size={16} />
                                    <span className="hidden sm:inline">DOWNLOAD_CV</span>
                                </a>
                                <button
                                    onClick={onClose}
                                    className="p-2 text-outline hover:text-primary transition-colors cursor-pointer"
                                    aria-label="Close modal"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer Body */}
                        <div className="flex-grow bg-white/5 relative overflow-auto custom-scrollbar">
                            <iframe
                                src="/resume.pdf#toolbar=0"
                                title="Resume PDF View"
                                className="w-full h-full border-none"
                            />
                        </div>

                        {/* Footer Status Bar */}
                        <div className="bg-surface-container-highest border-t-2 border-outline px-4 py-2 flex justify-between items-center text-[10px] font-mono text-outline uppercase tracking-widest">
                            <span>MODE: SECURE_VIEW</span>
                            <span className="hidden sm:block">SOURCE: /PUBLIC/RESUME.PDF</span>
                            <span>STATUS: OK</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
