import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/#about' },
        { title: 'Gallery', href: '/#gallery' },
        { title: 'Floor Plans', href: '/#floor-plans' },
        { title: 'Amenities', href: '/#amenities' },
        { title: 'Blogs', href: '/blog' },
        { title: 'Contact', href: '/#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`bg-white w-full z-50 transition-all duration-300`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex-shrink-0"
                    >
                        <a href="/" className="flex items-center space-x-1">
                            <img src={logo} alt="Logo" className="h-16 w-auto" />
                        </a>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="flex space-x-8">
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.title}
                                    href={item.href}
                                    whileHover={{ scale: 1.1 }}
                                    className={`text-black hover:text-blue-600 transition-colors duration-200`}
                                >
                                    {item.title}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`text-black p-2`}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.title}
                                    href={item.href}
                                    whileHover={{ scale: 1.05, x: 10 }}
                                    className="block px-3 py-2 text-gray-900 hover:text-blue-600"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.title}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
