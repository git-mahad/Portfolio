import React, { useState, useEffect } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 640);
            setIsTablet(width >= 640 && width < 1024);
            setIsDesktop(width >= 1024);

            // Match sidebar behavior - automatically adjust margin based on screen size
            if (width >= 1024) {
                setSidebarOpen(true); // Desktop always has sidebar
            } else {
                setSidebarOpen(false); // Mobile/tablet has collapsed sidebar
            }
        };

        // Initialize and add event listener
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getLayoutClasses = () => {
        if (isMobile) {
            return 'text-3xl';
        } else if (isTablet) {
            return 'text-4xl';
        } else {
            return 'text-5xl';
        }
    };

    const titleClass = getLayoutClasses();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => {
                setSubmitStatus(null);
            }, 3000);
        }, 1000);
    };

    return (
        <section
            id="contact"
            className={`min-h-screen text-white transition-all duration-300 ${
                // Match sidebar behavior - Full width on mobile, margin on desktop
                isMobile ? 'px-4 py-16' :
                    isTablet ? 'px-6 py-16' :
                        'ml-72 p-12'
                }`}
        >
            <div className="max-w-6xl mx-auto">
                <h2 className={`font-bold mb-8 ${titleClass}`}>
                    CONTACT ME
                    <div className="h-1 w-12 bg-blue-500 mt-3"></div>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-900 bg-opacity-70 rounded-lg p-6 shadow-lg">
                            <h3 className="text-xl md:text-2xl font-bold mb-6">Get In Touch</h3>

                            <div className="space-y-5">
                                {/* Email */}
                                <a
                                    href="mailto:mahad.dev3@gmail.com"
                                    className="flex items-center group hover:text-blue-400 transition-colors"
                                >
                                    <div className="flex justify-center items-center h-12 w-12 rounded-full bg-gray-800 group-hover:bg-blue-900 transition-colors mr-4">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <h4 className="font-medium">Email</h4>
                                        <p className="text-gray-400 group-hover:text-blue-300 transition-colors break-words">
                                            mahad.dev3@gmail.com
                                        </p>
                                    </div>
                                </a>

                                {/* Phone */}
                                <a
                                    href="tel:+923051479956"
                                    className="flex items-center group hover:text-green-400 transition-colors"
                                >
                                    <div className="flex justify-center items-center h-12 w-12 rounded-full bg-gray-800 group-hover:bg-green-900 transition-colors mr-4">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Phone</h4>
                                        <p className="text-gray-400 group-hover:text-green-300 transition-colors">
                                            +92 3051479956
                                        </p>
                                    </div>
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/923051479956"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center group hover:text-green-400 transition-colors"
                                >
                                    <div className="flex justify-center items-center h-12 w-12 rounded-full bg-gray-800 group-hover:bg-green-900 transition-colors mr-4">
                                        <MessageCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">WhatsApp</h4>
                                        <p className="text-gray-400 group-hover:text-green-300 transition-colors">
                                            +92 3051479956
                                        </p>
                                    </div>
                                </a>

                                {/* Location */}
                                <div className="flex items-center">
                                    <div className="flex justify-center items-center h-12 w-12 rounded-full bg-gray-800 mr-4">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Location</h4>
                                        <p className="text-gray-400">Lahore, Pakistan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-gray-900 bg-opacity-70 rounded-lg p-6 shadow-lg">
                            <h3 className="text-xl md:text-2xl font-bold mb-6">Send Me A Message</h3>

                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full min-h-[150px] bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <button
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className={`flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full sm:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <span>Sending...</span>
                                        ) : (
                                            <>
                                                <span className="mr-2">Send Message</span>
                                                <Send size={16} />
                                            </>
                                        )}
                                    </button>

                                    {submitStatus === 'success' && (
                                        <p className="text-green-400 text-center sm:text-left w-full sm:w-auto">
                                            Message sent successfully!
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;