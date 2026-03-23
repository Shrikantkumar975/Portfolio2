import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionWrapper from '../layout/SectionWrapper';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call or form submission
        setTimeout(() => {
            alert("Thanks for reaching out! I'll get back to you soon.");
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <SectionWrapper id="contact">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center gap-2">
                    <Mail className="w-8 h-8 text-primary" /> Get In Touch
                </h2>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto w-full">
                {/* Contact Information */}
                <div className="flex-1 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
                        <p className="text-muted-foreground mb-8 text-lg">
                            I'm currently looking for new opportunities and internships.
                            Whether you have a question, a project proposal, or just want to
                            say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer group">
                                <div className="p-4 bg-muted rounded-full group-hover:bg-primary/10 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Email</p>
                                    <p>your.email@example.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer group">
                                <div className="p-4 bg-muted rounded-full group-hover:bg-primary/10 transition-colors">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Phone</p>
                                    <p>+91 9876543210</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer group">
                                <div className="p-4 bg-muted rounded-full group-hover:bg-primary/10 transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Location</p>
                                    <p>Your City, State</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-1"
                >
                    <form
                        onSubmit={handleSubmit}
                        className="bg-card border border-border rounded-2xl p-8 shadow-sm"
                    >
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                                placeholder="John Doe"
                                autocomplete="name"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                                placeholder="john@example.com"
                                autocomplete="email"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                                placeholder="Hello Shrikant, I'd like to discuss..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${isSubmitting
                                    ? 'bg-primary/70 cursor-not-allowed'
                                    : 'bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 cursor-pointer text-primary-foreground'
                                }`}
                        >
                            {isSubmitting ? (
                                <span className="animate-pulse">Sending...</span>
                            ) : (
                                <>
                                    Send Message <Send size={20} />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
