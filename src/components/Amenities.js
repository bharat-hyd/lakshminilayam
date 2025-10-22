import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import swimmingPool from '../assets/am6.jpg';
import totLots from '../assets/am4.jpg';
import multiPurposeHall from '../assets/am3.jpg';
import gymnasium from '../assets/am5.jpg';
import indoorGames from '../assets/am1.jpg';
import IlluminatedCard from './IlluminatedCard';

const Amenities = () => {
    const [zoomedImage, setZoomedImage] = useState(null);

    const handleImageClick = (image, title, description) => {
        setZoomedImage({ image, title, description });
    };

    const closeZoomedImage = () => {
        setZoomedImage(null);
    };

    return (
        <section id="amenities" className="py-20 relative overflow-hidden bg-white text-gray-900">
            {/* Background Effects */}
            {/* <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-20 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div> */}

            <div className="container mx-auto px-4 relative">
                {/* Amenities Section */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-800">
                        Amenities
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-800 mx-auto mt-4 rounded-full"></div>
                    <p className="mt-4 text-gray-700 text-lg">A World of Amenities, Just for You</p>
                </motion.div>

                {/* Amenities List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-8">
                    {/* Swimming Pool */}
                    <AmenityCard
                        title="Swimming Pool"
                        description="A crystal clear oasis for relaxation and fun."
                        image={swimmingPool}
                        onClick={handleImageClick}
                    />

                    {/* Tot Lots */}
                    <AmenityCard
                        title="Gymnasium"
                        description="Stay fit and active with a modern fitness training equipment."
                        image={gymnasium}
                        onClick={handleImageClick}
                    />

                    {/* Multi-Purpose Halls */}
                    <AmenityCard
                        title="Multi purpose House"
                        description="Perfect for gatherings,hosting events and community activities — bringing up neighbors and making celebrations together."
                        image={multiPurposeHall}
                        onClick={handleImageClick}
                    />

                    {/* Gymnasium */}
                    <AmenityCard
                        title="Children Play spaces /  Grounds"
                        description="A safe and vibrant area where kids can enjoy and build sweet memories."
                        image={totLots}
                        onClick={handleImageClick}
                    />

                    {/* Indoor Games & Billiards Table */}
                    <AmenityCard
                        title="Indoor Games & Billboards"
                        description="A cosy area dedicated to classic board games — ideal for quality time with family, and neighbours."
                        image={indoorGames}
                        onClick={handleImageClick}
                    />
                </div>

                {/* Built to Last Section */}
                <motion.div
                    className="mt-16 p-8 rounded-2xl bg-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold bg-clip-text bg-white mb-8 text-center">
                        Built to Last, Designed for You
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Structural Excellence",
                            icon: (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 22h16v-2H4v2z" fill="#EB6484"/>
                                    <path d="M6 2h12v14H6V2z" fill="#EB6484"/>
                                </svg>
                            ),
                            items: [
                                "R.C.C. framed structure",
                                "Seismic load resistance",
                                "9-inch thick external walls",
                                "Superior insulation"
                            ]
                        },
                        {
                            title: "Premium Finishes",
                            icon: (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="#EB6484" strokeWidth="2"/>
                                    <path d="M8 12l2 2 4-4" stroke="#EB6484" strokeWidth="2" fill="none"/>
                                </svg>
                            ),
                            items: [
                                "High-quality exterior paint",
                                "Elegant interior finishes",
                                "Designer wall textures",
                                "Weather-resistant coating"
                            ]
                        },
                        {
                            title: "Doors & Windows",
                            icon: (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="4" width="16" height="16" stroke="#EB6484" strokeWidth="2"/>
                                    <line x1="4" y1="12" x2="20" y2="12" stroke="#EB6484" strokeWidth="2"/>
                                </svg>
                            ),
                            items: [
                                "Teak wood main doors",
                                "Smooth-finished internal doors",
                                "PVC/UPVC windows",
                                "Designer hardware fittings"
                            ]
                        },
                        {
                            title: "Flooring & Tiles",
                            icon: (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="3" width="18" height="18" stroke="#EB6484" strokeWidth="2"/>
                                    <path d="M3 9h18M9 3v18" stroke="#EB6484" strokeWidth="2"/>
                                </svg>
                            ),
                            items: [
                                "Vitrified tiles in living areas",
                                "Anti-skid bathroom tiles",
                                "Acid-resistant kitchen tiles",
                                "Premium marble in common areas"
                            ]
                        },
                        {
                            title: "Kitchen Excellence",
                            icon: (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4h16v16H4V4z" stroke="#EB6484" strokeWidth="2"/>
                                    <rect x="8" y="8" width="8" height="8" fill="#EB6484"/>
                                </svg>
                            ),
                            items: [
                                "Granite countertops",
                                "Stainless steel sink",
                                "Water purifier provision",
                                "Modular kitchen setup"
                            ]
                        },
                        {
                            title: "Utility & Convenience",
                            icon: (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 12h20" stroke="#EB6484" strokeWidth="2"/>
                                    <path d="M12 2v20" stroke="#EB6484" strokeWidth="2"/>
                                </svg>
                            ),
                            items: [
                                "Washing machine area",
                                "Dedicated wet kitchen space",
                                "Utility balcony",
                                "Service area provisions"
                            ]
                    }].map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <IlluminatedCard className="h-full bg-white/80 hover:bg-white/95 transition-all duration-300 rounded-xl p-6">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="space-y-4"
                                    >
                                        <div className="flex items-center space-x-3 mb-4">
                                            {category.icon}
                                            <h3 className="text-xl font-semibold text-gray-800">
                                                {category.title}
                                            </h3>
                                        </div>

                                        <motion.ul className="space-y-3">
                                            {category.items.map((item, itemIndex) => (
                                                <motion.li
                                                    key={itemIndex}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: itemIndex * 0.1 }}
                                                    className="flex items-start space-x-2"
                                                >
                                                    <span className="text-[#EB6484] mt-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-gray-700 ">{item}</span>
                                                </motion.li>
                                            ))}
                                        </motion.ul>

                                        <motion.div
                                            className="absolute inset-0 rounded-xl"
                                            initial={false}
                                            animate={{ scale: [0.95, 1] }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                </IlluminatedCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Discover the Joy Section */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="text-3xl font-bold text-blue-700">Discover the Joy of Living at Lakshmi Nilayam - Designed For today, Built for tomorrow</h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        Begin with your journey with <a className='font-bold'>Lakshmi Nilyam 2 & 3 BHK apartments in Guntur</a> -  Where Every brick is built with care, and every detail reflects our commitment, quality of living.
                    </p>
                    <a href="#enquire">
                        <button className='font-bold mt-5 hover:bg-white hover:text-black/30 bg-gradient-to-r from-[#F8D1D0] to-[#EB6484] text-white py-2 px-4 rounded-lg'>Enquire Now</button>
                    </a>
                </motion.div>

                {/* Zoomed Image Modal */}
                <AnimatePresence>
                    {zoomedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
                            onClick={closeZoomedImage}
                        >
                            <motion.div
                                className="relative max-w-5xl w-full overflow-hidden"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                onClick={e => e.stopPropagation()}
                            >
                                <img
                                    src={zoomedImage.image}
                                    alt={zoomedImage.title}
                                    className="w-full h-auto max-h-[80vh] object-contain"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-60">
                                    <h3 className="text-2xl font-semibold text-white mb-2">{zoomedImage.title}</h3>
                                    <p className="text-gray-200">{zoomedImage.description}</p>
                                </div>
                                <button
                                    onClick={closeZoomedImage}
                                    className="absolute top-4 right-4 p-2 text-white hover:text-gray-300"
                                >
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

const AmenityCard = ({ title, description, image, onClick }) => {
    return (
        <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => onClick(image, title, description)}
        >
            <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40">
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
                    <p className="text-gray-200">{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Amenities;