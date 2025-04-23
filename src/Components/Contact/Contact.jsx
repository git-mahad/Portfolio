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

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
            className={`min-h-screen text-white ${isMobile ? 'px-4 py-8' : 'ml-64 p-6 md:p-12'
                }`}
        >
            <div className="max-w-6xl mx-auto">
                <h2 className={`font-bold mb-8 ${isMobile ? 'text-3xl' : 'text-4xl'}`}>CONTACT ME</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-900 bg-opacity-70 rounded-lg p-6 md:p-8">
                            <h3 className={`font-bold mb-4 ${isMobile ? 'text-xl' : 'text-2xl'}`}>Get In Touch</h3>

                            <div className="space-y-4 md:space-y-6">
                                {/* Email */}
                                <a
                                    href="mailto:mahad.dev3@gmail.com"
                                    className="flex items-center group hover:text-blue-400 transition-colors"
                                >
                                    <div className={`flex justify-center items-center ${isMobile ? 'h-10 w-10' : 'h-12 w-12'
                                        } min-w-[2.5rem] md:min-w-[3rem] rounded-full bg-gray-800 group-hover:bg-blue-900 transition-colors mr-3 md:mr-4`}>
                                        <Mail className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                                    </div>
                                    <div className="overflow-hidden">
                                        <h4 className="font-medium text-sm md:text-base">Email</h4>
                                        <p className="text-gray-400 group-hover:text-blue-300 transition-colors break-words text-xs md:text-sm">
                                            mahad.dev3@gmail.com
                                        </p>
                                    </div>
                                </a>

                                {/* Phone */}
                                <a
                                    href="tel:+923051479956"
                                    className="flex items-center group hover:text-green-400 transition-colors"
                                >
                                    <div className={`flex justify-center items-center ${isMobile ? 'h-10 w-10' : 'h-12 w-12'
                                        } min-w-[2.5rem] md:min-w-[3rem] rounded-full bg-gray-800 group-hover:bg-green-900 transition-colors mr-3 md:mr-4`}>
                                        <Phone className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-sm md:text-base">Phone</h4>
                                        <p className="text-gray-400 group-hover:text-green-300 transition-colors text-xs md:text-sm">
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
                                    <div className={`flex justify-center items-center ${isMobile ? 'h-10 w-10' : 'h-12 w-12'
                                        } min-w-[2.5rem] md:min-w-[3rem] rounded-full bg-gray-800 group-hover:bg-green-900 transition-colors mr-3 md:mr-4`}>
                                        <MessageCircle className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-sm md:text-base">WhatsApp</h4>
                                        <p className="text-gray-400 group-hover:text-green-300 transition-colors text-xs md:text-sm">
                                            +92 3051479956
                                        </p>
                                    </div>
                                </a>

                                {/* Location */}
                                <div className="flex items-center">
                                    <div className={`flex justify-center items-center ${isMobile ? 'h-10 w-10' : 'h-12 w-12'
                                        } min-w-[2.5rem] md:min-w-[3rem] rounded-full bg-gray-800 mr-3 md:mr-4`}>
                                        <MapPin className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-sm md:text-base">Location</h4>
                                        <p className="text-gray-400 text-xs md:text-sm">Lahore, Pakistan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-gray-900 bg-opacity-70 rounded-lg p-6 md:p-8">
                            <h3 className={`font-bold mb-4 ${isMobile ? 'text-xl' : 'text-2xl'}`}>Send Me A Message</h3>

                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-1 md:mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 md:px-4 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-1 md:mb-2">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 md:px-4 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-4 md:mb-6">
                                    <label htmlFor="subject" className="block text-xs md:text-sm font-medium mb-1 md:mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 md:px-4 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                                        required
                                    />
                                </div>

                                <div className="mb-4 md:mb-6">
                                    <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-1 md:mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={isMobile ? 4 : 6}
                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 md:px-4 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg transition-colors text-sm md:text-base w-full md:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <span>Sending...</span>
                                        ) : (
                                            <>
                                                <span className="mr-2">Send Message</span>
                                                <Send size={isMobile ? 14 : 16} />
                                            </>
                                        )}
                                    </button>

                                    {submitStatus === 'success' && (
                                        <p className="text-green-400 text-sm md:text-base text-center md:text-left w-full md:w-auto">
                                            Message sent successfully!
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;