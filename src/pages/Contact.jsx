import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "../components/Heading";

// Premium Neon Glass Contact - with particles, AOS, liquid neon button, side indicators, neon pulse, dark/light auto-sync
export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 900, once: true, offset: 120 });

        // Auto dark/light mode sync using prefers-color-scheme
        const mq = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
        const applyTheme = (e) => {
            if ((e && e.matches) || (mq && mq.matches)) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        };

        applyTheme(mq);
        if (mq && mq.addEventListener) mq.addEventListener("change", applyTheme);
        return () => { if (mq && mq.removeEventListener) mq.removeEventListener("change", applyTheme); };
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
            // you can add toast success here
        } catch (err) {
            console.error(err);
            // add toast error if you want
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        { icon: <FaMapMarkerAlt />, title: "Location", text: "Vaishali, Ghaziabad", link: "https://maps.google.com" },
        { icon: <FaEnvelope />, title: "Email", text: "rjsoni107@gmail.com", link: "mailto:rjsoni107@gmail.com" },
        { icon: <FaPhone />, title: "Phone", text: "+91 9524000107", link: "tel:+919524000107" }
    ];

    const socialLinks = [
        { icon: <FaGithub />, url: "https://github.com/rjsoni107", color: "#78a5f4" },
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/kuldeep-soni-560b5b246", color: "#78a5f4" },
        { icon: <FaInstagram />, url: "https://www.instagram.com/raj.soni.rj?igsh=NDUycXVrYTVscTdm", color: "#78a5f4" },
        { icon: <FaFacebook />, url: "https://www.facebook.com/share/1BVBcybbH7/", color: "#78a5f4" }
    ];

    // helper to render floating particles
    const particles = Array.from({ length: 12 }).map((_, i) => ({ id: i }));

    return (
        <section id="contact" className="relative overflow-hidden py-24 bg-[#040617] dark:bg-gradient-to-b dark:from-gray-900 dark:to-black text-white">
            {/* Global styles for keyframes (keeps inside component for single-file portability) */}
            <style>{`
                @keyframes floatY { 0% { transform: translateY(0) } 50% { transform: translateY(-20px) } 100% { transform: translateY(0) } }
                @keyframes floatX { 0% { transform: translateX(0) } 50% { transform: translateX(18px) } 100% { transform: translateX(0) } }
                @keyframes neonPulse { 0% { box-shadow: 0 0 8px rgba(99,102,241,0.12), 0 0 18px rgba(99,102,241,0.06) } 50% { box-shadow: 0 0 18px rgba(99,102,241,0.18), 0 0 36px rgba(124,58,237,0.12) } 100% { box-shadow: 0 0 8px rgba(99,102,241,0.12), 0 0 18px rgba(99,102,241,0.06) } }
                @keyframes pulseBorder { 0% { box-shadow: 0 0 0 0 rgba(99,102,241,0.10) } 70% { box-shadow: 0 0 0 12px rgba(99,102,241,0) } 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0) } }
                .liquid-btn .liquid { transition: all .35s ease; }
            `}</style>

            {/* Background glows */}
            <div className="absolute -left-32 top-8 w-96 h-96 rounded-full bg-gradient-to-br from-emerald-400/30 to-blue-500/20 filter blur-2xl opacity-90 pointer-events-none"></div>
            <div className="absolute -right-32 bottom-8 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-400/20 filter blur-2xl opacity-90 pointer-events-none"></div>

            {/* Floating particles */}
            {particles.map((p, i) => {
                const size = Math.random() * 12 + 6;
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                const delay = Math.random() * 8;
                const dur = 6 + Math.random() * 8;
                const colorClass = i % 3 === 0 ? "bg-emerald-400/60" : i % 3 === 1 ? "bg-purple-400/60" : "bg-blue-400/50";
                return (
                    <div
                        key={p.id}
                        style={{ left: `${left}%`, top: `${top}%`, width: `${size}px`, height: `${size}px`, animationDelay: `${delay}s`, animationDuration: `${dur}s` }}
                        className={`pointer-events-none rounded-full absolute ${colorClass} blur-sm opacity-80 animate-[floatY_8s_ease-in-out_infinite]`}
                    />
                );
            })}

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <Heading title="Get In Touch" subtitle="Contact Me" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
                    {/* Left card with side neon indicator */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        data-aos="fade-right"
                        className="relative"
                    >
                        {/* Vertical neon line */}
                        <div className="absolute -left-8 top-6 h-[calc(100%-2rem)] w-1 flex items-center">
                            <div className="w-1 h-full bg-gradient-to-b from-emerald-400 to-blue-400 rounded-full opacity-80 shadow-[0_0_12px_rgba(56,189,248,0.08)]"></div>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/6 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-[0_12px_60px_rgba(124,58,237,0.08)] transition-all duration-300 relative">
                            {/* Neon pulse border */}
                            <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: 'inset 0 0 0 1px rgba(124,58,237,0.08)' }} />

                            <h3 className="text-2xl font-semibold mb-3 text-white">Let’s Talk About Your Project</h3>
                            <p className="text-gray-300 mb-6">I’m open to new projects, collaborations, or just a friendly hello. Drop a message and I’ll get back within 24-48 hours.</p>

                            <div className="space-y-5">
                                {contactInfo.map((item, idx) => (
                                    <a key={idx} href={item.link} target="_blank" rel="noreferrer" className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200">
                                        <div className="text-2xl p-2 rounded-lg bg-white/5 text-emerald-300 flex items-center justify-center shadow-[0_6px_22px_rgba(14,165,233,0.03)]">{item.icon}</div>
                                        <div>
                                            <h4 className="font-semibold text-white">{item.title}</h4>
                                            <p className="text-gray-300 text-sm">{item.text}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* <div className="flex items-center gap-3 mt-8">
                                {socialLinks.map((s, i) => (
                                    <a key={i} href={s.url} target="_blank" rel="noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/6 border border-white/8 text-gray-200 hover:bg-white/8 transition-shadow duration-200`}>
                                        {s.icon}
                                    </a>
                                ))}
                            </div> */}

                            {/* subtle neon pulse circle */}
                            <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 filter blur-2xl opacity-80 animate-[pulseBorder_2.8s_linear_infinite] pointer-events-none"></div>
                        </div>
                    </motion.div>

                    {/* Right - form with liquid neon button */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        data-aos="fade-left"
                    >
                        <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white/6 border border-white/10 backdrop-blur-xl shadow-xl relative">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="p-3 rounded-lg bg-transparent border border-white/10 focus:border-emerald-400 outline-none" required />
                                <input name="email" value={formData.email} onChange={handleChange} placeholder="Your email" className="p-3 rounded-lg bg-transparent border border-white/10 focus:border-emerald-400 outline-none" required />
                            </div>

                            <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="mt-4 w-full p-3 rounded-lg bg-transparent border border-white/10 focus:border-emerald-400 outline-none" required />

                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message" rows={5} className="mt-4 w-full p-3 rounded-lg bg-transparent border border-white/10 focus:border-emerald-400 outline-none" required />

                            {/* Liquid neon button */}
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="relative overflow-hidden w-full py-3 rounded-xl text-lg font-semibold liquid-btn bg-gradient-to-r from-emerald-800 to-blue-800 text-white flex items-center justify-center gap-3"
                                >
                                    {/* liquid layer - moves on hover */}
                                    <span className="liquid absolute inset-0 bg-white/10 transform -translate-x-6 -translate-y-6 rotate-12" style={{ mixBlendMode: 'overlay' }} />
                                    <span className="relative flex items-center gap-2">{isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane /></span>
                                </button>

                                {/* neon border pulse */}
                                <div className="mt-3 h-0.5 w-full rounded-full bg-gradient-to-r from-emerald-800 to-blue-800 opacity-60 animate-[neonPulse_3s_ease-in-out_infinite]"></div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}