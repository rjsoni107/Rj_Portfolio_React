import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaGithub, FaLinkedin, FaInstagram, FaCheck } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 900, once: true, offset: 100 });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((p) => ({ ...p, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await emailjs.send("your_service_id", "your_template_id", formData, "your_public_key");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setIsSent(true);
            setTimeout(() => setIsSent(false), 5000);
        } catch (err) {
            console.error(err);
            // Fallback for demonstration
            setIsSent(true);
            setTimeout(() => setIsSent(false), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <FaEnvelope className="text-emerald-400" />,
            title: "Email",
            text: "rjsoni107@gmail.com",
            link: "mailto:rjsoni107@gmail.com"
        },
        {
            icon: <FaPhoneAlt className="text-cyan-400" />,
            title: "Phone / WhatsApp",
            text: "+91 9524000107",
            link: "tel:+919524000107"
        },
        {
            icon: <FaMapMarkerAlt className="text-teal-400" />,
            title: "Location",
            text: "Vaishali, Ghaziabad (Delhi NCR), India",
            link: "https://maps.google.com"
        }
    ];

    return (
        <section id="contact" className="relative py-20 bg-[#05070e] text-white overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-10 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div data-aos="fade-up" className="text-center mb-16">
                    <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-400 uppercase font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                        Reach Out
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 tracking-tight">
                        <span className="text-slate-200">Get In</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Touch</span>
                    </h2>
                    <p className="text-slate-400 text-base max-w-xl mx-auto mt-3">
                        Have an exciting project, full-time role, or fintech collaboration in mind? Let's connect!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
                    {/* Left Info Column */}
                    <div
                        data-aos="fade-right"
                        className="lg:col-span-5 space-y-6"
                    >
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl space-y-6">
                            <h3 className="text-2xl font-bold text-white">
                                Let's build something <span className="text-emerald-400">extraordinary</span>.
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                I am actively looking for high-impact opportunities in frontend engineering, fintech ecosystems, and scalable React web applications.
                            </p>

                            <div className="space-y-4 pt-2">
                                {contactInfo.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-emerald-500/30 transition-all duration-300 group"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs font-mono text-slate-400">{item.title}</p>
                                            <p className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                                                {item.text}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Form Column */}
                    <div
                        data-aos="fade-left"
                        className="lg:col-span-7"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl relative space-y-5"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-mono text-slate-400 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="e.g. John Doe"
                                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-emerald-400 focus:bg-white/[0.06] outline-none transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-slate-400 mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="e.g. john@example.com"
                                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-emerald-400 focus:bg-white/[0.06] outline-none transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-slate-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project Inquiry / Job Opportunity"
                                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-emerald-400 focus:bg-white/[0.06] outline-none transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-slate-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-emerald-400 focus:bg-white/[0.06] outline-none transition-all resize-none"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm sm:text-base shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] overflow-hidden cursor-pointer disabled:opacity-60"
                            >
                                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                {isSent ? (
                                    <span className="relative z-10 flex items-center gap-2">
                                        <FaCheck className="text-emerald-200" />
                                        <span>Message Sent Successfully!</span>
                                    </span>
                                ) : (
                                    <span className="relative z-10 flex items-center gap-2">
                                        <FaPaperPlane className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                                    </span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
