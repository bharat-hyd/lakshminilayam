import React, { useState } from 'react';
import { motion } from 'framer-motion';

const IlluminatedCard = ({ children, className = '' }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <motion.div
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div
                className="absolute pointer-events-none"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2) 0%, transparent 50%)`,
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                }}
            />
            {children}
        </motion.div>
    );
};

export default IlluminatedCard;
