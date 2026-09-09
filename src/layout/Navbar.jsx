import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, ChevronRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Reset mobile menu when location changes during navigation
    const [prevPathname, setPrevPathname] = useState(location.pathname);
    if (prevPathname !== location.pathname) {
        setPrevPathname(location.pathname);
        setIsOpen(false);
    }

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl py-3 border-b border-gray-200/80 shadow-xs' : 'bg-white/60 backdrop-blur-md py-4 border-b border-gray-200/50'
                }`}
        >
            <div className="w-full h-16 max-w-6xl mx-auto px-4 md:px-8 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2 group">
                    <div className="p-2 rounded-none bg-primary/10 border border-primary/20 text-primary">
                        <Code2 size={22} />
                    </div>
                    <span className="text-2xl font-extrabold bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-tight">
                        Portfolio
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-6 lg:space-x-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `flex items-center space-x-2 text-base transition-all duration-300 hover:text-primary ${isActive ? 'text-primary font-semibold' : 'text-gray-600 hover:text-gray-900'
                                }`
                            }
                        >
                            <span>{link.name}</span>
                        </NavLink>
                    ))}

                    <Link
                        to="/contact"
                        className="btn-primary px-5 py-2.5 text-sm rounded-none"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center space-x-4">
                    <button
                        className="p-2 text-foreground hover:text-primary transition-colors duration-200"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-x-0 top-17.5 bg-background backdrop-blur-xl border-b border-border transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="flex flex-col p-6 space-y-4">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center justify-between border-b border-gray-100 pb-3 text-base transition-all duration-300 ${isActive ? 'text-primary' : 'text-muted-foreground hover:bg-muted'
                                }`
                            }
                        >
                            <span>{link.name}</span>
                            <ChevronRight size={18} />
                        </NavLink>
                    ))}

                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="btn-primary w-full text-center py-3 text-sm font-semibold rounded-none mt-2"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
