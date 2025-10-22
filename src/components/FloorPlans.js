import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import ParallaxText from "./ParallaxText";
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import four from '../assets/eleven.jpeg';
import five from '../assets/seven.jpg';
import six from '../assets/ten.jpg';
// import seven from '../assets/nine.jpg';



import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/outline';

const FloorPlans = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredPlans, setFilteredPlans] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const containerRef = useRef(null);
    const [lockedPlans, setLockedPlans] = useState(new Set());
    const [zoomedImage, setZoomedImage] = useState(null);

    const categories = [
        { id: 'all', label: 'All Plans' },
        { id: '2bhk', label: '2 BHK' },
        { id: '3bhk', label: '3 BHK' },
    ];

    const plans = [
        {
            id: 1,
            type: "3 BHK",
            facing: "East Facing",
            area: "1772 sq. ft.",
            category: ["3bhk", "east"],
            image: one,
            highlights: ["Spacious Balcony", "Premium Fixtures", "Modern Kitchen"],
            details: {
                bedrooms: 3,
                bathrooms: 3,
                balconies: 2,
                supBuiltUpArea: "1772 sq. ft.",
                carpetArea: "1350 sq. ft.",
                floorRise: "₹50 per sq. ft."
            }
        },
        {
            id: 2,
            type: "3 BHK",
            facing: "East Facing",
            area: "1470 sq. ft.",
            category: ["3bhk", "east"],
            image: two,
            highlights: ["Ventilated Rooms", "Garden View", "Walk-in Closet"],
            details: {
                bedrooms: 3,
                bathrooms: 3,
                balconies: 1,
                supBuiltUpArea: "1470 sq. ft.",
                carpetArea: "1150 sq. ft.",
                floorRise: "₹50 per sq. ft."
            }
        },
        {
            id: 3,
            type: "3 BHK",
            facing: "West Facing",
            area: "1719 sq. ft.",
            category: ["3bhk", "west"],
            image: three,
            highlights: ["Corner Unit", "Double Balcony", "Luxury Fittings"],
            details: {
                bedrooms: 3,
                bathrooms: 3,
                balconies: 2,
                supBuiltUpArea: "1719 sq. ft.",
                carpetArea: "1300 sq. ft.",
                floorRise: "₹50 per sq. ft."
            }
        },
        {
            id: 4,
            type: "3 BHK",
            facing: "East Facing",
            area: "1490 sq. ft.",
            category: ["3bhk", "east"],
            image: four,
            highlights: ["Optimal Layout", "Modern Design", "Quality Materials"],
            details: {
                bedrooms: 3,
                bathrooms: 3,
                balconies: 1,
                supBuiltUpArea: "1490 sq. ft.",
                carpetArea: "1170 sq. ft.",
                floorRise: "₹50 per sq. ft."
            }
        },
        {
            id: 5,
            type: "2 BHK",
            facing: "East Facing",
            area: "1470 sq. ft.",
            category: ["2bhk", "east"],
            image: five,
            highlights: ["Optimal Layout", "Modern Design", "Quality Materials"],
            details: {
                bedrooms: 2,
                bathrooms: 2,
                balconies: 1,
                supBuiltUpArea: "1470 sq. ft.",
                carpetArea: "1150 sq. ft.",
                floorRise: "₹50 per sq. ft."
            }
        },
        {
            id: 6,
            type: "2 BHK",
            facing: "East Facing",
            area: "1490 sq. ft.",
            category: ["2bhk", "east"],
            image: six,
            highlights: ["Optimal Layout", "Modern Design", "Quality Materials"],
            details: {
                bedrooms: 2,
                bathrooms: 2,
                balconies: 1,
                supBuiltUpArea: "1490 sq. ft.",
                carpetArea: "1170 sq. ft.",
                floorRise: "₹50 per sq. ft."
            }
        }
    ];

    useEffect(() => {
        setFilteredPlans(
            selectedCategory === 'all'
                ? plans
                : plans.filter(plan => plan.category.includes(selectedCategory))
        );
    }, [selectedCategory]);

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    const toggleLock = (planId) => {
        const newLockedPlans = new Set(lockedPlans);
        if (newLockedPlans.has(planId)) {
            newLockedPlans.delete(planId);
        } else {
            newLockedPlans.add(planId);
            // Scroll to contact form when locking a plan
            setTimeout(scrollToContact, 500);
        }
        setLockedPlans(newLockedPlans);
    };

    const handleImageClick = (plan) => {
        if (window.innerWidth >= 768) { // Only allow zoom for screens larger than mobile
            setZoomedImage(plan);
        }
    };

    const closeZoomedImage = () => {
        setZoomedImage(null);
    };

    // Add floating animation
    const floatingAnimation = {
        y: [-10, 10],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
    };

    return (
        <section id="floor-plans" className="relative min-h-screen py-20 bg-gradient-to-b from-white via-blue-50 to-white">
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-6xl font-bold"
                        animate={{
                            backgroundImage: [
                                'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)',
                                'linear-gradient(to right, #10b981, #3b82f6, #8b5cf6)',
                                'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)'
                            ]
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                        style={{
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            backgroundSize: '200% auto'
                        }}
                    >
                        Floor Plans
                    </motion.h2>
                    <p className="text-gray-600 mt-4">Explore our detailed floor plans to find the perfect home for you.</p>

                    <motion.div className="flex flex-wrap justify-center gap-4 mt-12">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm
                                    ${selectedCategory === category.id
                                        ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category.label}
                            </motion.button>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Enhanced Floor Plans Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="wait">
                        {filteredPlans.map((plan) => (
                            <motion.div
                                key={plan.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="relative group"
                                style={{ perspective: '1000px' }}
                                onClick={() => handleImageClick(plan)}
                            >
                                <motion.div
                                    animate={floatingAnimation}
                                    className="relative overflow-hidden rounded-xl backdrop-blur-lg bg-white 
                                             border border-gray-200 shadow-xl transform-gpu transition-all duration-500 hover:border-blue-200"
                                >
                                    {/* Image and content container */}
                                    <div className="aspect-w-16 aspect-h-12 relative">
                                        <img
                                            src={plan.image}
                                            alt={plan.type}
                                            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Add a dark overlay */}
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                                        {/* Update the content section */}

                                        <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between flex-wrap gap-2">
                                                    <h3 className="text-xl md:text-2xl font-bold text-white">
                                                        {plan.type}
                                                    </h3>
                                                    <span className="text-white font-semibold">{plan.area}</span>
                                                </div>
                                                <p className="text-white text-sm md:text-base">{plan.facing}</p>

                                                {/* Features pills with improved responsiveness */}
                                                <motion.div
                                                    className="pt-2 flex flex-wrap gap-1.5"
                                                    variants={{
                                                        hover: {
                                                            y: 0,
                                                            opacity: 1,
                                                            transition: { staggerChildren: 0.1 }
                                                        }
                                                    }}
                                                >
                                                    {plan.highlights.map((highlight, index) => (
                                                        <motion.span
                                                            key={index}
                                                            className="px-2 py-0.5 bg-blue-50 rounded-full 
                                                                     text-blue-600 text-xs md:text-sm border border-blue-200"
                                                            whileHover={{ scale: 1.05 }}
                                                        >
                                                            {highlight}
                                                        </motion.span>
                                                    ))}
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Enhanced Modal */}
                <AnimatePresence>
                    {selectedPlan && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                            style={{
                                backgroundImage: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.2) 0%, rgba(0,0,0,0.95) 100%)',
                                backdropFilter: 'blur(10px)'
                            }}
                            onClick={() => setSelectedPlan(null)}
                        >
                            {/* Updated modal content */}
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                transition={{ type: "spring", bounce: 0.3 }}
                                className="relative max-w-4xl w-full bg-white 
                                         overflow-hidden border border-gray-200"
                                onClick={e => e.stopPropagation()}
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Image Section */}
                                    <div className="relative aspect-w-16 aspect-h-12">
                                        <img
                                            src={selectedPlan.image}
                                            alt={selectedPlan.type}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Details Section */}
                                    <div className="p-6 space-y-6">
                                        <div>
                                            <h3 className="text-3xl font-bold text-white mb-2">
                                                {selectedPlan.type}
                                            </h3>
                                        </div>

                                        {/* Specifications */}
                                        <div className="space-y-4">
                                            <h4 className="text-lg font-semibold text-gray-600">Specifications</h4>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="text-gray-500">
                                                    <p>Bedrooms: {selectedPlan.details.bedrooms}</p>
                                                    <p>Bathrooms: {selectedPlan.details.bathrooms}</p>
                                                    <p>Balconies: {selectedPlan.details.balconies}</p>
                                                </div>
                                                <div className="text-gray-500">
                                                    <p>Super Built-up Area: {selectedPlan.details.supBuiltUpArea}</p>
                                                    <p>Carpet Area: {selectedPlan.details.carpetArea}</p>
                                                    <p>Floor Rise: {selectedPlan.details.floorRise}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Highlights */}
                                        <div className="space-y-4">
                                            <h4 className="text-lg font-semibold text-gray-600">Highlights</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedPlan.highlights.map((highlight, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-blue-50 rounded-full text-blue-600 text-sm"
                                                    >
                                                        {highlight}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Close Button */}
                                        <button
                                            onClick={() => setSelectedPlan(null)}
                                            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

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
                                className="relative max-w-4xl w-full bg-white 
                                         overflow-hidden border border-gray-200"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                onClick={e => e.stopPropagation()}
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Image Section */}
                                    <div className="relative aspect-w-16 aspect-h-12">
                                        <img
                                            src={zoomedImage.image}
                                            alt={zoomedImage.type}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Details Section */}
                                    <div className="p-6 space-y-6">
                                        <div>
                                            <h3 className="text-3xl font-bold text-gray-800 mb-2">
                                                {zoomedImage.type}
                                            </h3>
                                            <p className="text-blue-600 text-xl">{zoomedImage.price}</p>
                                        </div>

                                        {/* Specifications */}
                                        <div className="space-y-4">
                                            <h4 className="text-lg font-semibold text-gray-600">Specifications</h4>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="text-gray-500">
                                                    <p>Bedrooms: {zoomedImage.details.bedrooms}</p>
                                                    <p>Bathrooms: {zoomedImage.details.bathrooms}</p>
                                                    <p>Balconies: {zoomedImage.details.balconies}</p>
                                                </div>
                                                <div className="text-gray-500">
                                                    <p>Super Built-up Area: {zoomedImage.details.supBuiltUpArea}</p>
                                                    <p>Carpet Area: {zoomedImage.details.carpetArea}</p>
                                                    <p>Floor Rise: {zoomedImage.details.floorRise}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Highlights */}
                                        <div className="space-y-4">
                                            <h4 className="text-lg font-semibold text-gray-600">Highlights</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {zoomedImage.highlights.map((highlight, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-blue-50 rounded-full text-blue-600 text-sm"
                                                    >
                                                        {highlight}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Close Button */}
                                        <button
                                            onClick={closeZoomedImage}
                                            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default FloorPlans;