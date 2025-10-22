import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import video from '../assets/video.mp4';
import fallbackImage from '../assets/one.jpg'; // Add a fallback image
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';

const Hero = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [videoError, setVideoError] = useState(false);
    const audioRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio('/background-music.mp3');
        audioRef.current.loop = true;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const handleVideoError = () => {
        console.log("Video failed to load");
        setVideoError(true);
    };

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isMuted) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
            setIsMuted(!isMuted);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            id="home"
            className="md:h-screen h-[60vh] relative flex flex-col items-center pt-32" // Changed from justify-center to pt-32
        >
            {/* Audio Control Button */}
            <motion.button
                onClick={toggleAudio}
                className="absolute top-24 right-8 z-20 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isMuted ? (
                    <SpeakerXMarkIcon className="w-6 h-6 text-white" />
                ) : (
                    <SpeakerWaveIcon className="w-6 h-6 text-white" />
                )}
            </motion.button>

            <div className="absolute inset-0">
                {!videoError ? (
                    <video
                        ref={videoRef} 
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                        className="w-full h-full object-cover" // Remove object-cover for mobile screens
                        onError={handleVideoError}
                        poster={fallbackImage} // Add a poster image while video loads
                    >
                        <source
                            src={video}
                            type="video/mp4"
                            onError={handleVideoError}
                        />
                    </video>
                ) : (
                    <img
                        src={fallbackImage}
                        alt="Laxmi Nilayam"
                        className="w-full h-full" // Remove object-cover for mobile screens
                    />
                )}
                <div className="absolute inset-0 bg-black/40" /> {/* Add overlay */}
            </div>

            {/* Content - Repositioned */}
            <div className="hidden merriweather md:block relative text-white text-center z-10 space-y-6 px-4 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl  md:text-7xl font-bold mb-4 drop-shadow-2xl"
                >
                    Welcome to{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100">
                        Lakshmi Nilayam
                    </span>
                </motion.h1>
            </div>
        </motion.section>
    );
};

export default Hero;
