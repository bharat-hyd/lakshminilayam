import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Thankyou from './Thankyou';
import banner from '../assets/banner.jpg';
import banner_mob from '../assets/banner_mob.jpg';
import logo from '../assets/logo.png';
import sidebanner from '../assets/about.jpg'
import video from  '../assets/video.mp4'
import premium from '../assets/one_two.jpeg'
import moden from '../assets/five_5.jpg'
import world from '../assets/susix.jpg'
import nine from '../assets/nine.jpg'
import heart from '../assets/abouts.jpg'
import plan1 from '../assets/suone.jpg'
import plan2 from '../assets/sutwo.jpg'
import plan3 from '../assets/suthree.jpg'
import plan4 from '../assets/sufour.jpg'
import am2 from '../assets/one_three.jpeg'
import am3 from '../assets/susix.jpg'
import am4 from '../assets/am4.jpg'
import am5 from '../assets/am5.jpg'
import am6 from '../assets/am6.jpg'

function Landing() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    flatType: '2BHK',
    landing: "apartment-guntur",
  });

  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const [showBrochureForm, setShowBrochureForm] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBrochureForm(true);
    }, 3000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (videoRef.current && videoRef.current.paused) {
            videoRef.current.play().catch(error => {
              console.log("Video play failed:", error);
            });
          }
        } else {
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const floorPlans = [
    { image: plan1, title: "Master Plan", description: "Overall layout of Lakshmi Nilayam" },
    { image: plan2, title: "2 BHK - 1430 Sft", description: "Compact and efficiently designed" },
    { image: plan3, title: "2 BHK - 1560 Sft", description: "Spacious layout with balcony" },
    { image: plan4, title: "3 BHK - 1790 Sft", description: "Premium family apartment" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === floorPlans.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? floorPlans.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    const formElement = e.target;
    const formDataToSend = new FormData(formElement);
    formDataToSend.append("Page address", window.location.href);
    
    try {
      const response = await fetch('https://formsubmit.co/lakshminilayam776@gmail.com', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        },
      });
      
      if (response.ok) {
        console.log('Form submission successful');
        sessionStorage.setItem('enquiryData', JSON.stringify(formData));
        navigate('/thank-you');
        setFormData({ name: '', phone: '', email: '', flatType: '2BHKdd' });
      } else {
        const errorData = await response.text();
        console.error('Form submission failed:', response.status, errorData);
        throw new Error(`Form submission failed: ${response.status}. ${errorData || ''}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(`Failed to submit form. ${error.message || 'Please try again or contact us directly.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openBrochure = () => {
    // window.open("https://drive.google.com/file/d/114mE3lUhqYCOoucijP97lYbPm1B0hRNQ/view", "_blank");
    // window.open("https://lakshminilayam.com/Brochure.pdf", "_blank");
    setTimeout(() => {
      // window.location.href = "/apartment-guntur?Brochure=click";
      // setShowBrochureForm(false);
    }, 2000);

  };
const handleBrochureFormSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitError('');

  window.open("https://lakshminilayam.com/Brochure.pdf", "_blank");

  try {
    const formElement = e.target;

    // Step 1: Get total count (optional)
    // const countRes = await fetch('https://lakshminilayam.com/submit_brochure.php?count=true');
    // const countData = await countRes.json();
    // const currentCount = countData.total_submit || 0;

    // Step 2: Prepare FormData
    const brochureFormData = new FormData(formElement);
    brochureFormData.append("formType", "brochureRequest");
    brochureFormData.append("page_address", window.location.href);
    // brochureFormData.append("total_submit", currentCount);

    // Step 3: Submit to your PHP server
    const response = await fetch('https://lakshminilayam.com/submit_brochure.php', {
      method: 'POST',
      body: brochureFormData,
    });

    if (response.ok) {
      const result = await response.json();
      if (result.success) {
        setShowBrochureForm(false);
        setFormData({ name: '', phone: '', email: '', flatType: '2BHK-ffhdj' });
        openBrochure();
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } else {
      const errorText = await response.text();
      throw new Error(errorText || `Server returned ${response.status}`);
    }

  } catch (error) {
    console.error('Error submitting brochure form:', error);
    setSubmitError(`Failed to submit brochure request. ${error.message || 'Please try again later.'}`);
  } finally {
    setIsSubmitting(false);
  }
};


  const copyEmailToClipboard = () => {
    const email = "lakshminilayam776@gmail.com";
    navigator.clipboard.writeText(email)
      .then(() => {
        setShowCopyNotification(true);
        setTimeout(() => {
          setShowCopyNotification(false);
        }, 2000);
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  };

  const scrollToEnquireForm = () => {
    document.getElementById('contact').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="w-full overflow-x-hidden">
      <header className="flex justify-between items-center py-5 px-[5%] bg-white shadow-md sticky top-0 z-50">
        <div className="logo-container">
          <img src={logo} alt="Lakshmi Nilayam Logo" className="h-10" />
        </div>
        <nav className="hidden md:block">
          <ul className="flex list-none">
            <li className="ml-8"><a href="#home" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-[#EC6786]">Home</a></li>
            <li className="ml-8"><a href="#features" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-[#EC6786]">Features</a></li>
            <li className="ml-8"><a href="#location" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-[#EC6786]">Location</a></li>
            <li className="ml-8"><a href="#floor-plans" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-[#EC6786]">Floor Plans</a></li>
            <li className="ml-8"><a href="#amenities" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-[#EC6786]">Amenities</a></li>
            <li className="ml-8"><a href="#contact" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-[#EC6786]">Contact</a></li>
          </ul>
        </nav>
        <a 
          href="tel:+919440996805" 
          className="block md:hidden bg-[#EC6786] text-white p-2 rounded-full hover:bg-[#F08A9E] transition-all"
          aria-label="Call Us"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </header>

      <section id="home" className="">
        <div className="w-full">
          <img src={window.innerWidth < 768 ? banner_mob : banner} alt="Lakshmi Nilayam Apartments" className="w-screen shadow-md object-cover" />
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between px-[5%] py-16 gap-8">
          <div className="md:w-1/2 w-full">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#EC6786] to-[#F08A9E]  text-transparent bg-clip-text">Lakshmi Nilayam – Premium Living, Peacefully Designed</h1>
            <p className="mb-6 text-gray-700">Step into a world of comfort and convenience at Lakshmi Nilayam. These thoughtfully crafted 2 & 3 BHK Gated Community apartments in Guntur offer a serene, gated community lifestyle where modern design meets peaceful surroundings.</p>
            <ul className="list-none my-5 text-left">
              <li className="mb-3"><strong className="text-[#F08A9E]">Total Land Area:</strong> 1.6 Acres of scenic landscapes and open spaces</li>
              <li className="mb-3"><strong className="text-[#F08A9E]">Towers:</strong> 2 stunning high-rise towers offering panoramic views</li>
              <li className="mb-3"><strong className="text-[#F08A9E]">Floors:</strong> Ground + 5 levels with a modern architectural design</li>
              <li className="mb-3"><strong className="text-[#F08A9E]">Total Apartments:</strong> 100 spacious homes</li>
              <li className="mb-3"><strong className="text-[#F08A9E]">Apartment Sizes:</strong> Ranging from 1430 Sft to 1790 Sft</li>
            </ul>
            <div className="flex flex-col items-center">
              <button 
                onClick={() => setShowBrochureForm(true)} 
                className="mt-4 py-3 px-6 bg-[#EC6786] text-white border-none rounded font-bold cursor-pointer transition-colors hover:bg-[#F08A9E]"
              >
                Get Brochure
              </button>
            </div> 
          </div>
          <div className="md:w-1/2 md:block hidden">
            <img src={sidebanner} alt="Lakshmi Nilayam Interior" className="w-full rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      <section className="text-center bg-white">
        <div className="">
          <video 
            ref={videoRef}
            src={video} 
            controls 
            className="w-full"
            playsInline
            preload="metadata"
            loop={false}
            muted={false}
          />
        </div>
      </section>

      <section id="features" className="flex justify-between gap-5 text-center py-0 md:py-16 px-[5%] flex-wrap md:flex-nowrap">
        <div className="flex-1 p-5 bg-white rounded-lg shadow-md min-w-[100%] md:min-w-0 mb-5 md:mb-0">
          <h3 className="text-xl font-bold mb-3 text-[#EC6786]">Premium Location</h3>
          <p className="text-gray-700">Lakshmi Nilayam is strategically located in Guntur, providing easy access to major roads, educational institutions, hospitals, shopping centers, and entertainment hubs.</p>
        </div>
        
        <div className="flex-1 p-5 bg-white rounded-lg shadow-md min-w-[100%] md:min-w-0 mb-5 md:mb-0">
          <h3 className="text-xl font-bold mb-3 text-[#EC6786]">Modern Design</h3>
          <p className="text-gray-700">Lakshmi Nilayam is more than just a place to live—it's a place to thrive. Stylish interiors and quality brands not only make your home aesthetic, but also comfort.</p>
        </div>
        
        <div className="flex-1 p-5 bg-white rounded-lg shadow-md min-w-[100%] md:min-w-0 mb-5 md:mb-0">
          <h3 className="text-xl font-bold mb-3 text-[#EC6786]">World-Class Amenities</h3>
          <p className="text-gray-700">Indulge in beautifully landscaped gardens, a state-of-the-art clubhouse, and secure play areas, all designed to elevate your living experience.</p>
        </div>
        
        <div className="flex-1 p-5 bg-white rounded-lg shadow-md min-w-[100%] md:min-w-0 mb-5 md:mb-0">
          <h3 className="text-xl font-bold mb-3 text-[#EC6786]">Reimagined High Rise Living</h3>
          <p className="text-gray-700">Step into spacious 2 & 3 BHK flats (1430-1790 sq. ft.) with modern interiors, abundant natural light, and premium modular designs, offering a perfect blend of luxury and comfort.</p>
        </div>
      </section>

      <section id="location" className="bg-white py-0 md:py-16 px-[5%]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 md:order-2">
            <img src={heart} alt="Lakshmi Nilayam Location" className="w-full h-full md:h-[100vh] rounded-lg shadow-md" />
          </div>
          
          <div className="md:w-1/2 md:order-1 text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#EC6786] mb-2">At the Heart of Guntur</h2>
            <h3 className="text-xl font-medium text-gray-700 mb-8">In the midst of Serenity, Close to Pulse of Amravati</h3>
            
            <p className="mb-5 text-gray-700">Guntur, a vibrant city in Andhra Pradesh, is gaining attention as a prime real estate destination. The city's unique blend of tradition and modernity creates an appealing environment for both residents and investors. The demand for residential and commercial properties is on the rise, making Guntur an attractive option for investment.</p>
            
            <p className="mb-8 text-gray-700">We Madhu infra's Presenting Lakshmi Nilayam, a high-rise gated community 2 & 3 Bhk apartments in Guntur that offers premium luxury living, With more than 100 luxury 2 & 3 Bhk flats, developed across 1.6 acres. Enjoy access to a state-of-the-art clubhouse for relaxation and socializing. Conveniently located with easy access to the capital of Andhra Pradesh - Amravati in just 45 minutes drive, our community offers the perfect blend of comfort and connectivity.</p>
            <div className='flex flex-col items-center'>
            <button 
              onClick={scrollToEnquireForm} 
              className="py-3 px-6 bg-[#EC6786] text-white border-none rounded font-bold cursor-pointer transition-colors hover:bg-[#F08A9E]"
            >
              Enquire Now
            </button>
            </div>
          </div>
        </div>
      </section>

      <section id="floor-plans" className="text-center bg-white py-16 ">
        <h2 className="text-2xl md:text-3xl font-bold text-[#EC6786] mb-8">Master Plan and Floor Plan</h2>
        
        <div className="">
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div className="relative h-[70vh] max-h-[700px]">
                {floorPlans.map((plan, index) => (
                  <div 
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out transform ${
                      index === currentSlide ? "opacity-100 translate-x-0" : 
                      index < currentSlide ? "opacity-0 -translate-x-full" : 
                      "opacity-0 translate-x-full"
                    }`}
                  >
                    <img 
                      src={plan.image} 
                      alt={plan.title} 
                      className="w-full h-full object-contain bg-white" 
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#EC6786] bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-100 transition-all"
              onClick={prevSlide}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#EC6786] bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-100 transition-all"
              onClick={nextSlide}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex gap-3 justify-center mb-4">
            {floorPlans.map((plan, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-[#EC6786] scale-125" : "bg-[#F5B5C2]"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      <section id="amenities" className="text-center py-0 md:py-16 px-[5%]">
        <h2 className="text-2xl md:text-3xl font-bold text-[#EC6786] mb-8">World Class Amenities</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={am6} alt="Swimming Pool" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#EC6786]">Swimming Pool</h3>
                <p className="text-gray-600 text-sm">Enjoy a refreshing swim in our well-maintained pool</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={am5} alt="Fitness Center" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#EC6786]">Fitness Center</h3>
                <p className="text-gray-600 text-sm">State-of-the-art equipment for your workout routine</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={am4} alt="Children's Play Area" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#EC6786]">Children's Play Area</h3>
                <p className="text-gray-600 text-sm">Safe and fun environment for your kids</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={am2} alt="Landscaped Gardens" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#EC6786]">Landscaped Gardens</h3>
                <p className="text-gray-600 text-sm">Beautiful green spaces to relax and unwind</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={am3} alt="Clubhouse" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#EC6786]">Clubhouse</h3>
                <p className="text-gray-600 text-sm">Modern clubhouse for community gatherings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-0 md:py-20 px-[5%] bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-[#EC6786] mb-3">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Experience premium living at Lakshmi Nilayam. Fill the form below and our team will get back to you shortly.</p>
        </div>
        
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#EC6786] to-[#F08A9E] py-6 px-8">
            <h3 className="text-white text-2xl font-bold">Enquire Now</h3>
            <p className="text-white/80">Find your dream home at Lakshmi Nilayam</p>
          </div>
            <div class="hs-form-frame mt-[-40px]" data-region="na2" data-form-id="1db60a97-079c-4d80-be2a-c984eb1cf291" data-portal-id="243777808"></div>

          {/* <form 
            className="p-8" 
            onSubmit={handleSubmit}
            action="https://formsubmit.co/lakshminilayam776@gmail.com" 
            method="POST"
          >
            <input type="hidden" name="_subject" value="New enquiry from Lakshmi Nilayam website" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC6786] focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="phone" className="block mb-2 font-semibold text-gray-700">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleInputChange}
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC6786] focus:border-transparent transition-all"
                placeholder="Your contact number"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC6786] focus:border-transparent transition-all"
                placeholder="example@email.com"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="flatType" className="block mb-2 font-semibold text-gray-700">Select Your Preferred Flat Type</label>
              <div className="relative">
                <select 
                  id="flatType" 
                  name="flatType" 
                  value={formData.flatType}
                  onChange={handleInputChange}
                  required 
                  className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#EC6786] focus:border-transparent transition-all cursor-pointer pr-10"
                >
                  <option value="2BHK">2BHK</option>
                  <option value="3BHK">3BHK</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#EC6786]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {submitError && (
              <div className="mb-6 p-3 bg-red-50 text-red-600 rounded-lg border border-red-200 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {submitError}
              </div>
            )}
            
            <button 
              type="submit" 
              className="w-full py-4 bg-gradient-to-r from-[#EC6786] to-[#F08A9E] text-white border-none rounded-lg text-base font-bold cursor-pointer transition-all hover:shadow-lg hover:opacity-95 disabled:opacity-70 disabled:shadow-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </div>
              ) : 'Submit Enquiry'}
            </button>
          </form> */}
        </div>
      </section>

      {showBrochureForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-1">
          <div className="bg-white rounded-lg p-1 pt-3 w-full max-w-md relative animate-fadeIn">
            <button 
              onClick={() => setShowBrochureForm(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-xl font-bold text-[#EC6786] mb-4 text-center">Download Brochure</h3>


            <div class="hs-form-frame mt-[-40px]" data-region="na2" data-form-id="1db60a97-079c-4d80-be2a-c984eb1cf291" data-portal-id="243777808"></div>
            {/* <form onSubmit={handleBrochureFormSubmit} method="POST">
              <input type="hidden" name="_subject" value="Brochure request from Lakshmi Nilayam website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="mb-4">
                <label htmlFor="brochure-name" className="block mb-2 font-medium">Name</label>
                <input 
                  type="text" 
                  id="brochure-name" 
                  name="name" 
                  required 
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="brochure-phone" className="block mb-2 font-medium">Phone Number</label>
                <input 
                  type="tel" 
                  id="brochure-phone" 
                  name="phone" 
                  required 
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="brochure-email" className="block mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  id="brochure-email" 
                  name="email" 
                  required 
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              
              {submitError && (
                <div className="mb-4 p-2 bg-red-50 text-red-600 rounded text-sm border border-red-200">
                  {submitError}
                </div>
              )}
              
              <button 
                type="submit" 
                className="w-full py-2 bg-[#EC6786] text-white border-none rounded font-bold cursor-pointer transition-colors hover:bg-[#F08A9E] disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Download Now'}
              </button>
            </form> */}


          </div>
        </div>
      )}

      <footer className="bg-gray-900 text-white py-0 md:py-16 px-[5%] pt-16 pb-5">
        <div className="flex flex-col md:flex-row justify-between mb-10 gap-8">
          <div className="flex-1">
            <img src={logo} alt="Lakshmi Nilayam Logo" className="h-12 mb-4" />
            <p className="mb-4">Premium Living, Peacefully Designed</p>
            <p className="text-sm text-gray-300 mb-6">
              Experience the pinnacle of comfortable living with our thoughtfully designed 
              2 & 3 BHK apartments in Guntur, offering a perfect blend of luxury and peace.
            </p>
          </div>
          
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-4 text-[#EC6786]">Contact Information</h4>
            <div className="mb-4">
              <p className="font-medium mb-1">Location:</p>
              <p className="text-gray-300 mb-2">D.No 272 & 273 & 11TH Lane Syamala Nagar Extension, Guntur - 522006</p>
              {/* <p className="text-gray-300 mb-2">Syamalanagar Extension, Guntur – </p> */}
            </div>
            <div className="mb-4">
              <p className="font-medium mb-1">Call Now:</p>
              <p className="mb-1">
                <a href="tel:+919121286881" className="text-gray-300 hover:text-[#EC6786] transition-colors">
                  +91 91212 86881
                </a><br/>
                <a href="tel:+919121286882" className="text-gray-300 hover:text-[#EC6786] transition-colors">
                  +91 91212 86882
                </a>
              </p>
            </div>
            <div className="relative mb-4">
              <p className="font-medium mb-1">Email:</p>
              <button 
                onClick={copyEmailToClipboard} 
                className="text-gray-300 hover:text-[#EC6786] transition-colors cursor-pointer bg-transparent border-none p-0 font-normal text-left"
              >
                lakshminilayam776@gmail.com
              </button>
              {showCopyNotification && (
                <div className="absolute -right-20 -top-1 bg-gray-800 text-[#EC6786] text-xs py-1 px-2 rounded shadow-md">
                  Copied!
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://www.facebook.com/people/Lakshmi-Nilayam/61573385609772/" className="p-2 bg-[#EC6786] text-white rounded-full hover:bg-[#F08A9E] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/lakshmi_nilayam/" className="p-2 bg-[#EC6786] text-white rounded-full hover:bg-[#F08A9E] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="https://x.com/Lakshmi11963341" className="p-2 bg-[#EC6786] text-white rounded-full hover:bg-[#F08A9E] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a href="https://www.youtube.com/@Lakshmi-Nilayam" className="p-2 bg-[#EC6786] text-white rounded-full hover:bg-[#F08A9E] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
        </div>
        
        <div className="text-center pt-5 border-t border-gray-700">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Lakshmi Nilayam. All Rights Reserved.</p>
        </div>
      </footer>

      <a href="https://wa.me/+919121286882?text=I'm%20interested%20in%20Lakshmi%20Nilayam%20apartments"  target="_blank"  rel="noopener noreferrer" className="fixed bottom-20 right-5 z-50 animate-bounce">
        <div className="bg-[#25D366] p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512" 
            className="w-8 h-8 text-white"
            fill="currentColor"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </div>
      </a>
    </div>
  );
}

export default Landing;