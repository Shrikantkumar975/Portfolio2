import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [loadingText, setLoadingText] = useState('INITIALIZING_KERNEL');
  const [progress, setProgress] = useState(0);

  const messages = [
    'CHECKING_SYSTEM_INTEGRITY...',
    'LOADING_USER_ASSETS...',
    'COMPILING_SHADERS...',
    'ESTABLISHING_NEURAL_LINK...',
    'FETCHING_MERN_STACK_MODULES...',
    'ACCESS_GRANTED'
  ];

  useEffect(() => {
    let currentMsg = 0;
    const msgInterval = setInterval(() => {
      setLoadingText(messages[currentMsg % messages.length]);
      currentMsg++;
    }, 450);

    const progInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 25); // ~2.5s for 100%

    return () => {
      clearInterval(msgInterval);
      clearInterval(progInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        filter: "blur(40px)"
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-surface-container-lowest flex flex-col items-center justify-center font-mono overflow-hidden"
    >
      {/* Scanline overlay from index.css logic */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-linear-to-b from-transparent via-primary/20 to-transparent bg-[length:100%_4px] animate-scanline" />
      
      <div className="w-full max-w-sm px-6 space-y-10 relative">
        {/* Main Loading Header */}
        <div className="flex flex-col items-center gap-3">
          <motion.div 
            animate={{ 
              opacity: [1, 0.6, 1],
              textShadow: ["0 0 8px rgba(167, 243, 148, 0.4)", "0 0 16px rgba(167, 243, 148, 0.8)", "0 0 8px rgba(167, 243, 148, 0.4)"]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary text-sm md:text-base font-bold tracking-[0.4em] uppercase terminal-glow text-center"
          >
            [ {loadingText} ]
          </motion.div>
        </div>

        {/* Progress Container */}
        <div className="space-y-3">
            <div className="flex justify-between text-[10px] text-outline font-bold uppercase tracking-widest px-1">
                <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary animate-pulse rounded-full"></span>
                    SYSTEM_BOOT
                </span>
                <span>{progress}%</span>
            </div>
            <div className="h-1.5 w-full bg-surface-container-highest border border-outline/20 overflow-hidden relative">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-primary shadow-[0_0_10px_#a7f394]"
                />
            </div>
        </div>

        {/* Footer info */}
        <div className="flex justify-center flex-col items-center gap-2 opacity-40">
            <p className="text-[9px] text-outline uppercase tracking-[0.2em] font-mono">
                S_KUMAR // VERSION 1.0.4 // STABLE
            </p>
            <div className="flex gap-1.5">
                {[...Array(4)].map((_, i) => (
                    <motion.div 
                        key={i}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        className="w-1 h-3 bg-outline/40"
                    />
                ))}
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
