import React, { useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ParallaxText from "./ParallaxText";
import five from '../assets/about.jpg';
import bg from '../assets/one.jpg';
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';

import { ChartBarIcon, HomeIcon, UserGroupIcon, SparklesIcon, LightBulbIcon, StarIcon, ShieldCheckIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Banner from './Banner';
import IlluminatedCard from './IlluminatedCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: "linear"
    };

    const highlights = [
        {
            title: "Projects Completed",
            value: "50+",
            icon: <HomeIcon className="w-8 h-8" />,
            color: "bg-blue-500"
        },
        {
            title: "Happy Families",
            value: "200+",
            icon: <UserGroupIcon className="w-8 h-8" />,
            color: "bg-purple-500"
        },
        {
            title: "Years Experience",
            value: "10+",
            icon: <ChartBarIcon className="w-8 h-8" />,
            color: "bg-green-500"
        },
        {
            title: "Awards Won",
            value: "15+",
            icon: <SparklesIcon className="w-8 h-8" />,
            color: "bg-yellow-500"
        }
    ];

    // Add scroll-based animations
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    // Add gallery images
    const galleryImages = [
        {
            src: one,
            title: 'Luxury Apartments',
            description: 'Modern living spaces'
        },
        {
            src: two,
            title: 'Premium Apartments',
            description: 'World-class facilities'
        },
        {
            src: three,
            title: 'World class BedRoom',
            description: 'Comfortable living spaces'
        }
    ];

    // Add floating animation variant
    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const missionAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const values = [
        {
            title: "Innovation",
            icon: <LightBulbIcon className="w-8 h-8" />,
            description: "Pioneering new standards in real estate development",
            color: "from-blue-500 to-blue-600"
        },
        {
            title: "Excellence",
            icon: <StarIcon className="w-8 h-8" />,
            description: "Committed to delivering outstanding quality",
            color: "from-purple-500 to-purple-600"
        },
        {
            title: "Integrity",
            icon: <ShieldCheckIcon className="w-8 h-8" />,
            description: "Building trust through transparent practices",
            color: "from-green-500 to-green-600"
        },
        {
            title: "Sustainability",
            icon: <GlobeAltIcon className="w-8 h-8" />,
            description: "Creating eco-friendly living spaces",
            color: "from-yellow-500 to-yellow-600"
        }
    ];

    const floatingElements = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4
            }
        }
    };

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <Banner />
            <section id="about" className=" relative overflow-hidden">
                {/* Background decoration */}
                {/* <motion.div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                /> */}

                {/* Main content */}
                <div className="max-w-7xl mx-auto relative">
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={staggerContainer}
                        className="space-y-6 md:space-y-16"
                    >
                        {/* Image Gallery Section with Fly-eye Swiper */}
                        <div className="mb-6 md:mb-16">
                            <Swiper
                                effect={'creative'}
                                creativeEffect={{
                                    prev: {
                                        translate: [0, 0, -400],
                                        rotate: [0, 0, -8],
                                        scale: 0.8,
                                        origin: 'left center'
                                    },
                                    next: {
                                        translate: [0, 0, -400],
                                        rotate: [0, 0, 8],
                                        scale: 0.8,
                                        origin: 'right center'
                                    }
                                }}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={1}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true
                                }}
                                navigation={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                                modules={[EffectCreative, Pagination, Navigation, Autoplay]}
                                className="w-full h-[250px] sm:h-[350px] md:h-[500px]"
                            >
                                {galleryImages.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: activeIndex === index ? 1 : 0.5,
                                                scale: activeIndex === index ? 1 : 0.9
                                            }}
                                            transition={{ duration: 0.5 }}
                                            className="relative h-full w-full rounded-xl overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                                            <img
                                                src={image.src}
                                                alt={image.title}
                                                className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
                                            />
                                            <motion.div
                                                className="absolute inset-0 flex flex-col justify-end p-4 md:p-8"
                                                initial={{ y: 100, opacity: 0 }}
                                                animate={{
                                                    y: activeIndex === index ? 0 : 50,
                                                    opacity: activeIndex === index ? 1 : 0
                                                }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{image.title}</h3>
                                                <p className="text-base md:text-lg text-white/60">{image.description}</p>
                                            </motion.div>
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Features Section with Enhanced Animations */}
                        <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center">
                            <motion.div
                                variants={fadeIn}
                                className="relative order-2 md:order-1"
                                animate={floatingAnimation}
                            >
                                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl"> {/* Changed aspect ratio */}
                                    <img
                                        src={five}
                                        alt="About Us"
                                        className="w-full h-full object-cover" // Added proper image styling
                                    />
                                </div>
                                {/* Floating stats card */}
                                <motion.div
                                    className="absolute -bottom-4 right-4 md:-bottom-8 md:-right-8 bg-white p-4 md:p-6 rounded-xl shadow-xl"
                                    variants={scaleIn}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="text-center">
                                        <span className="block text-3xl font-bold text-blue-600">10+</span>
                                        <span className="text-gray-600">Years Experience</span>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                variants={staggerContainer}
                                className="space-y-4 md:space-y-8 order-1 md:order-2 px-4"
                            >
                                <motion.h3
                                    variants={fadeIn}
                                    className="text-xl md:text-3xl font-semibold text-gray-900"
                                >
                                    Lakshmi Nilayam Apartments  -  Home that breathes with nature
                                </motion.h3>

                                <motion.p variants={fadeIn} className=" text-sm md:text-lg text-gray-700 leading-relaxed">
                                    {/* Lakshmi Nilayam is a place where your dream home becomes a reality. This Gated community apartment in Guntur is designed to offer a perfect mix of comfort, style and convenience.<br /><br /> */}
                                    {/* <a className='font-bold' href='https://madhuinfra.in/'>Madhu Infrastructure</a> Pvt Ltd is reinventing real estate spaces by pairing the industry’s top talents with technology. The brightest minds in engineering, design and strategy work behind the scenes to offer the innovative and futuristic real estate developments across Telangana and Andhra Pradesh. Our journey is driven by a vision to build more than just structures – we build homes, communities, and lasting relationships. From building modern <a className='font-bold' href='https://parkville.in'>gated community apartments </a> , or commercial spaces, each project is crafted with attention to detail, using the finest materials and sustainable practices.<br /><br /> */}
                                    {/* We believe in working closely with our clients, understanding their needs, and delivering tailored solutions that exceed expectations. Our team of skilled architects, engineers, and project managers are committed to ensuring timely delivery, transparency, and excellence in every step of the process. With a decade of experience, we move forward with a vision to build futuristic constructions that could bring a significant change in the <a className='font-bold'>real estate </a> industry of our country. */}
                                    Welcome to Lakshmi Nilayam - <a className='font-bold'>Gated community apartments in Guntur</a>, Offering an exceptional opportunity for those seeking a luxury  2 & 3 Bhk <a className='font-bold'>apartments and flats in Guntur</a>. Ideally positioned near the Future capital city of Andhra Pradesh - Amravati, making an Excellent investment opportunity.                                     <br/><br/>

                                    We <a className='font-bold'>Madhu Infra's Presenting -  Lakshmi Nilayam</a>, gated <a className='font-bold'>community 2 & 3 Bhk apartments in Guntur</a> that offers a premium state of high luxury living art, developed all across 1.6 acres. Enjoy our access to the most advanced  modern amenities like clubhouse etc for relaxation and socializing. Strategically positioned with the ease of access to the capital city of Andhra Pradesh - Amravati in just 35 minutes drive away. 
                                </motion.p>

                                {/* Enhanced Features Grid */}
                                <motion.div
                                    variants={staggerContainer}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mt-4 md:mt-8"
                                >
                                    {[
                                        {
                                            title: "Prime Location",
                                            icon: "🏢",
                                            description: "Strategically Located in Guntur , with ease of access to major hubs."
                                        },
                                        {
                                            title: "Apartments sizes",
                                            icon: "✨",
                                            description: "Ranging from 1430 Sft to 1790 Sft"
                                        },
                                        {
                                            title: "Towers And floors",
                                            icon: "🏗️",
                                            description: "2 stunning high-rise towers with ground +5 floors"
                                        },
                                        {
                                            title: "Total Land Area",
                                            icon: "👥",
                                            description: "1.6 Acres of scenic landscapes and open spaces"
                                        }
                                    ].map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            variants={scaleIn}
                                            whileHover={{ scale: 1.05 }}
                                            className="bg-white p-4 rounded-lg shadow-md"
                                        >
                                            

                                            <div className="flex items-left gap-2 mb-1">
                                                <span className="text-2xl">{feature.icon}</span>
                                                <h4 className="font-semibold">{feature.title}</h4>
                                            </div>
                                            <p className="text-sm text-gray-600">{feature.description}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Enhanced Mission & Values Section */}
                        <motion.div
                            variants={fadeIn}
                            className="relative bg-white rounded-xl md:rounded-3xl p-4 md:p-16 mt-8 md:mt-12 overflow-hidden"
                        >
                            {/* Animated background patterns */}
                            {/* <motion.div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)'
                                }}
                            /> */}

                            {/* Mission Section */}
                            <div className="relative z-10 mb-8 md:mb-16">
                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="max-w-5xl mx-auto text-center mb-8 md:mb-12"
                                >
                                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6">
                                        Our Mission
                                    </h2>
                                    <IlluminatedCard className="bg-white/90 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                        <p className="text-base text-left md:text-xl text-gray-700  leading-relaxed">
                                            {/* Our mission is to build innovative <a className='font-bold' href='https://madhuinfra.in/'>real estate development projects </a>  in Andhra Pradesh and Telangana. We believe in the ability to convert challenging situations into opportunities. Teamwork being our foundation, we embrace values with an open mind. We follow high ethical standards, aim to overcome expectations and excel in every project we undertake. <a className='font-bold' href='https://www.laxminilayam.com/'>At Lakshmi Nilayam</a>, every detail is thoughtfully created to make your life easier and more enjoyable. It’s not just a home—it’s a place you’ll be proud to call home. */}
                                            Our mission at <a className='font-bold'>Lakshmi Nilayam 2 & 3 BHK gated Community apartments in Guntur</a> is to redefine urban living by creating homes that blend comfort, quality, and ease of convenience at one place.
                                        </p>
                                    </IlluminatedCard>
                                </motion.div>
                            </div>

                            {/* Values Section */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative z-10"
                            >
                                <h2 className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 md:mb-12">
                                    Our Values
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                                    {[
                                        {
                                            title: "Integrity",
                                            icon: <LightBulbIcon className="w-10 h-10" />,
                                            // description: "Pioneering new standards in real estate development",
                                            description: "We believe transparency, and honesty, are central to how we operate — from planning and construction to our sales and service.",
                                            gradient: "from-blue-500 via-blue-400 to-blue-300"
                                        },
                                        {
                                            title: "Quality Without Compromise",
                                            icon: <StarIcon className="w-10 h-10" />,
                                            description: "Starting from design to delivery, we uphold the highest standards of construction materials.",
                                            gradient: "from-purple-500 via-purple-400 to-purple-300"
                                        },
                                        {
                                            title: "Sustainability & Responsibility",
                                            icon: <ShieldCheckIcon className="w-10 h-10" />,
                                            description: "We are building homes that are not just comfortable, but also sustainable for our future generations.",
                                            gradient: "from-emerald-500 via-emerald-400 to-emerald-300"
                                        },
                                        {
                                            title: "Community & Belonging",
                                            icon: <GlobeAltIcon className="w-10 h-10" />,
                                            description: "Lakshmi Nilayam Gated community in Guntur is well designed where families and neighbours can connect.",
                                            gradient: "from-pink-500 via-pink-400 to-pink-300"
                                        }
                                    ].map((value, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ y: -8, scale: 1.02 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <IlluminatedCard className={`h-full bg-gradient-to-br ${value.gradient} text-white rounded-2xl p-8 shadow-xl`}>
                                                <div className="flex flex-col items-center text-center space-y-4">
                                                    <motion.div
                                                        whileHover={{ rotate: 360 }}
                                                        transition={{ duration: 0.5 }}
                                                        className="bg-white/20 rounded-full p-4 backdrop-blur-sm"
                                                    >
                                                        {value.icon}
                                                    </motion.div>
                                                    <h3 className="text-2xl font-bold">{value.title}</h3>
                                                    <p className="text-white/90">{value.description}</p>
                                                </div>
                                            </IlluminatedCard>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
                {/* Add Parallax Text before main content */}
                {/* <div className="flex flex-col md:flex-row text-xl md:text-5xl justify-around py-4 md:py-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                    <div className="text-center md:text-left mb-2 md:mb-0">LUXURY LIVING STATIC</div>
                    <div className="text-center md:text-right">MODERN LIFESTYLE</div>
                </div> */}
            </section>
        </>
    );
};

export default About;