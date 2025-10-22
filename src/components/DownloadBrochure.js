import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownTrayIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const DownloadBrochure = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleDownload = () => {
        // Replace with your actual brochure PDF URL
        const brochureUrl = 'https://drive.google.com/file/d/114mE3lUhqYCOoucijP97lYbPm1B0hRNQ/view?usp=sharing';

        // Animated feedback
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 3000);

        // Open in new tab
        window.open(brochureUrl, '_blank');
    };

    return (
        <div>
            <a href="/Brochure.pdf" target="_blank" rel="noopener noreferrer">
            <button
                className="flex items-center gap-2 bg-gradient-to-r from-[#F8D1D0] to-[#EB6484] text-white px-4 py-3 rounded-full shadow-lg"
                // onClick={handleDownload}
            >
                <div className="relative flex items-center gap-2">
                    <div className="relative">
                        <DocumentTextIcon className="w-5 h-5" />
                    </div>
                    <span className="hidden sm:inline whitespace-nowrap">Download Brochure</span>
                    <div>
                        <ArrowDownTrayIcon className="w-5 h-5" />
                    </div>
                </div>
            </button>
            </a>

            {/* Download Tooltip */}
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed bottom-24 right-8 z-[60] bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
                    >
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Opening brochure...</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DownloadBrochure;
