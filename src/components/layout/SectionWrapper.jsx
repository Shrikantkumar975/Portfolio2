import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`py-16 flex flex-col justify-center ${className}`}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    hidden: { opacity: 0, y: 50 }
                }}
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
