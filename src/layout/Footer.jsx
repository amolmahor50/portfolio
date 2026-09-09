import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Code2, Instagram } from "lucide-react";

import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";

const Footer = () => {
    const socialPaths = [
        { icon: <Github size={20} />, path: "https://github.com/amolmahor50" },
        {
            icon: <Linkedin size={20} />,
            path: "https://linkedin.com/in/amol-mahor-a57a87202",
        },
        {
            icon: <Instagram size={20} />,
            path: "https://instagram.com/_aesthetic.amol",
        },
        { icon: <Mail size={20} />, path: "mailto:amolmahor50@gmail.com" },
    ];

    return (
        <footer className="w-full bg-white border-t border-gray-200/80 pt-16 pb-12 px-4 md:px-8 mt-20">

            {/* QuirGO CTA BANNER ABOVE FOOTER */}
            <div className="max-w-6xl mx-auto mb-16 p-8 md:p-12 rounded-none bg-linear-to-r from-primary via-secondary to-accent text-white text-center shadow-xl shadow-primary/20 space-y-6">
                <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
                    Ready to build your next digital product?
                </h3>
                <p className="text-white/90 text-sm md:text-base max-w-xl mx-auto font-medium">
                    Let's collaborate to bring your ideas to life with modern architecture, high performance, and exceptional UI/UX.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                    <Link
                        to="/contact"
                        className="px-6 py-2 bg-white text-primary font-medium text-sm md:text-base rounded-none shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
                    >
                        Start a Project
                    </Link>
                    <Link
                        to="/projects"
                        className="px-6 py-2 bg-transparent border-2 border-white/30 text-white font-medium text-sm md:text-base rounded-none hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                    >
                        Explore Works
                    </Link>
                </div>
            </div>

            {/* MAIN FOOTER GRID (QuirGO Style) */}
            <PageLayout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">

                {/* BRAND & TAGLINE */}
                <div className="space-y-4">
                    <Link to="/" className="flex items-center space-x-2 group w-max">
                        <div className="p-2 rounded-none bg-primary/10 border border-primary/20 text-primary">
                            <Code2 size={22} />
                        </div>
                        <span className="text-2xl font-extrabold bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-tight">
                            Portfolio
                        </span>
                    </Link>

                    <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xs">
                        Crafting high-performance web applications with modern architecture, clean code, and user-centric designs.
                    </p>

                    <div className="flex items-center space-x-3 pt-2">
                        {socialPaths.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.path}
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-none bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 border border-gray-200/60 transition-all duration-300"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* NAVIGATION */}
                <div>
                    <h4 className="text-base md:text-lg font-bold text-gray-900 mb-5 tracking-tight">
                        Navigation
                    </h4>
                    <ul className="space-y-3">
                        {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                            <li key={item}>
                                <Link
                                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                    className="text-gray-500 font-normal hover:text-primary transition-colors text-sm md:text-base"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* EXPERTISE / CAPABILITIES */}
                <div>
                    <h4 className="text-base md:text-lg font-bold text-gray-900 mb-5 tracking-tight">
                        Capabilities
                    </h4>
                    <ul className="space-y-3">
                        {[
                            "Frontend Development",
                            "UI/UX Architecture",
                            "API & Cloud Integration",
                            "Performance Optimization",
                            "SEO Best Practices",
                        ].map((item) => (
                            <li key={item} className="text-gray-500 font-normal text-sm md:text-base">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* NEWSLETTER */}
                <div className="space-y-4">
                    <h4 className="text-base md:text-lg font-bold text-gray-900 mb-5 tracking-tight">
                        Stay Connected
                    </h4>
                    <p className="text-gray-500 text-sm md:text-base">
                        Subscribe to get notified about new projects and development articles.
                    </p>
                    <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm md:text-base transition-all outline-none"
                        />
                        <Button>
                            Subscribe
                        </Button>
                    </form>
                </div>

            </PageLayout>

            {/* COPYRIGHT & LEGAL LINKS (QuirGO Style Bottom) */}
            <PageLayout>
                <div className="pt-8 border-t border-gray-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-sm md:text-base text-gray-500">
                    <p>
                        © {new Date().getFullYear()} Amol Mahor. All rights reserved.
                    </p>

                    <div className="flex items-center space-x-6">
                        <Link to="/" className="hover:text-gray-900 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/" className="hover:text-gray-900 transition-colors">
                            Terms &amp; Conditions
                        </Link>
                        <Link to="/" className="hover:text-gray-900 transition-colors">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </PageLayout>

        </footer>
    );
};

export default Footer;