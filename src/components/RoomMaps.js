import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import one from "../assets/suone.jpg";
import two from "../assets/sutwo.jpg";
import three from "../assets/suthree.jpg";
import four from "../assets/sufour.jpg";
// import five from "../assets/sufive.jpg";
// import six from "../assets/susix.jpg";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const RoomMaps = () => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const [zoomedPlan, setZoomedPlan] = useState(null);

    const handleImageClick = (plan) => {
        setZoomedPlan(plan);
    };

    const closeZoomedPlan = () => {
        setZoomedPlan(null);
    };

    const floorPlans = [
        {
            title: "3 BHK West Facing",
            image: one,
            description: "Perfect for small families"
        },
        {
            title: "3 BHK West Facing",
            image: two,
            description: "Luxury living with extra space"
        },
        {
            title: "3 BHK East Facing",
            image: three,
            description: "Spacious family living"
        },
        {
            title: "2 BHK West Facing",
            image: four,
            description: "perfect for small families"
        },
        // {
        //     title: "",
        //     image: five,
        //     description: ""
        // }
    ];

    return (
        <section className="py-8 md:py-16 bg-gray-50" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Floor Layout Maps
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1}
                        navigation
                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            // Mobile first approach
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            480: {
                                slidesPerView: 1.2,
                                spaceBetween: 15
                            },
                            640: {
                                slidesPerView: 1.5,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 25
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        }}
                        className="py-4 md:py-8 px-2 md:px-0"
                    >
                        {floorPlans.map((plan, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="relative group h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl cursor-pointer"
                                    onClick={() => handleImageClick(plan)}
                                >
                                    <img
                                        src={plan.image}
                                        alt={plan.title}
                                        className="w-full h-full object-cover transform md:group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                                        opacity-100 sm:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                            <h3 className="text-xl md:text-2xl font-semibold text-white">
                                                {plan.title}
                                            </h3>
                                            {plan.description && (
                                                <p className="text-sm md:text-base text-gray-200 mt-2 line-clamp-2">
                                                    {plan.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>

            {/* Zoomed Plan Modal */}
            <AnimatePresence>
                {zoomedPlan && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 overflow-y-auto"
                        onClick={closeZoomedPlan}
                    >
                        <motion.div
                            className="relative max-w-5xl w-full bg-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="relative">
                                {/* Image Section */}
                                <div className="relative max-h-[85vh] overflow-y-auto">
                                    <img
                                        src={zoomedPlan.image}
                                        alt={zoomedPlan.title}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <button
                                    onClick={closeZoomedPlan}
                                    className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-sm rounded-full text-black hover:bg-white hover:text-black transition-colors duration-200"
                                    aria-label="Close"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default RoomMaps;
