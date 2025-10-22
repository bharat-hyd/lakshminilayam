import React from 'react';
import { motion } from 'framer-motion';

const GalleryItem = ({ item, onSelect }) => {
    return (
        <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(item)}
        >
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-60 transition-colors duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                </div>
            </div>
        </motion.div>
    );
};

export default GalleryItem;
