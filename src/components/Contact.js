import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden bg-white text-gray-900">
            {/* Background Effects */}
            {/* <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animation-delay-2000"></div>
                <div className="absolute bottom-0 left-20 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div> */}

            <div className="container mx-auto px-4 relative">
                {/* Contact Section */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-[#EB6484]">
                        Contact Us
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#F8D1D0] to-[#EB6484] mx-auto mt-4 rounded-full"></div>
                    <p className="mt-4 text-gray-700 text-lg">Your Journey to Lakshmi Nilayam Starts Here</p>
                </motion.div>

                {/* Contact Details and Map */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <motion.div
                        className="p-8 rounded-2xl bg-white backdrop-blur-md shadow-lg"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center mb-4">
                            <MapPinIcon className="w-6 h-6 text-[#EB6484] mr-2" />
                            <h3 className="text-3xl font-bold text-[#EB6484]">Location:</h3>
                        </div>
                        <p className="text-gray-600 mb-4 pl-8">
                            Your Dream home Awaits at<br />
                            Lakshmi Nilayam<br />
                            D.No 272 & 273 11TH Lane syamala nagar Extension, Guntur – 522006
                        </p>
                    </motion.div>

                    {/* Google Maps */}
                    <motion.div
                        className="rounded-2xl overflow-hidden bg-white p-8 shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center mb-4">
                            <PhoneIcon className="w-6 h-6 text-[#EB6484] mr-2" />
                            <h3 className="text-3xl font-bold text-[#EB6484]">Call Now:</h3>
                        </div>
                        <p className="text-gray-600 pl-8">
                            Phone: +91 91212 86881<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            +91 91212 86882
                        </p>

                        <p className="mt-6 text-gray-600 pl-8">
                            Lakshmi Nilayam – Where dreams come to life, and every day feels like a celebration.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;