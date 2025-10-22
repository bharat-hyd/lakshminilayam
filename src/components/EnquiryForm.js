import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const faqs = [
  {
    question: <>What makes a great choice to choose <a className='font-bold'>2 Bhk & Bhk flats</a> in Lakshmi Nilayam in Guntur?</>,
    answer: <>Lakshmi Nilayam gated community offer’s <a className='font-bold'>2 Bhk flats and 3 Bhk flats</a> with a unique blend of modern amenities, including quality & construction, and a prime location in Guntur. Thoughtfully designed to cater families, professionals, and investors looking for luxury, comfort, and value altogether at one destination.</>,
  },
  {
    question: <>Why to choose Lakshmi Nilayam Apartments in Guntur?</>,
    answer: <><a className='font-bold'>Lakshmi Nilayam</a> offers <a className='font-bold'>2 & 3 BHK apartments</a> with a wide range of extensive amenities including a Multipurpose halls, Gymnasium , Swimming pool, Indoor games- Billboard games, a well connected water backup and Parking lots with 24/7 security service - Prioritizing Comfort and convenience at one place.</>,
  },
  {
    question: <>Is the Lakshmi Nilayam apartment well located?</>,
    answer: <>Absolutely yes. <a className='font-bold'>Lakshmi Nilayam gated community apartments</a> are strategically well positioned near the key landmarks that include major educational institutions, hospitals, and major commercial hubs which makes life easier and well-connected.</>,
  },
  {
    question: <>What are the types of apartments that are available in Lakshmi Nilayam?</>,
    answer: <>Lakshmi Nilayam Apartments offers spacious <a className='font-bold'>2 & 3 Bhk flats</a> with high-quality finishes, natural ventilation, and smart layouts to meet your family’s needs.</>,
  },
  {
    question: <>How do I visit or book a flat in Lakshmi Nilayam?</>,
    answer: <>You can schedule a site visit directly through our <a className='font-bold'>website</a> or contact our sales team for a personalized walkthrough and booking assistance.</>,
  },
];

const EnquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="enquire" className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side FAQ Section */}
        <div className="lg:col-span-6">
          <h2 className="text-3xl font-bold mb-6">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg">
                    <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start justify-between gap-4 px-4 py-3 font-medium bg-white hover:bg-gray-100 focus:outline-none text-left"
                    >
                    <span className="flex-1">{faq.question}</span>
                    <ChevronDownIcon
                        className={`h-5 w-5 mt-1 shrink-0 transition-transform duration-300 ${
                        activeIndex === index ? 'rotate-180' : ''
                        }`}
                    />
                    </button>
                {activeIndex === index && (
                  <div className="px-4 py-2 bg-gray-50 text-gray-700">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Enquiry Form */}
        <div className="lg:col-span-6">
          {/* <h2 className="text-3xl font-bold text-center mb-8">Enquire Now</h2> */}
          {submitted ? (
            <div className="text-center p-6 bg-green-100 rounded-lg">
              <p className="text-green-700">Thank you for your enquiry! We'll get back to you soon.</p>
            </div>
          ) : (
              <div class="hs-form-frame mt-[-40px] border-2" data-region="na2" data-form-id="1db60a97-079c-4d80-be2a-c984eb1cf291" data-portal-id="243777808"></div>
            // <form
            //   action="https://formsubmit.co/lakshminilayam776@gmail.com"
            //   method="POST"
            //   className="space-y-4"
            // >
            //   <input type="text" name="_honey" style={{ display: 'none' }} />
            //   <input type="hidden" name="_captcha" value="false" />
            //   <input type="hidden" name="_next" value={window.location.href} />

            //   <div>
            //     <input
            //       type="text"
            //       name="name"
            //       placeholder="Your Name"
            //       className="w-full p-3 border rounded-lg"
            //       required
            //     />
            //   </div>
            //   <div>
            //     <input
            //       type="email"
            //       name="email"
            //       placeholder="Email Address"
            //       className="w-full p-3 border rounded-lg"
            //       required
            //     />
            //   </div>
            //   <div>
            //     <input
            //       type="tel"
            //       name="phone"
            //       placeholder="Phone Number"
            //       className="w-full p-3 border rounded-lg"
            //       required
            //     />
            //   </div>
            //   <div>
            //     <textarea
            //       name="message"
            //       placeholder="Your Message"
            //       rows="4"
            //       className="w-full p-3 border rounded-lg resize-none"
            //       required
            //     ></textarea>
            //   </div>
            //   <button
            //     type="submit"
            //     className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#F8D1D0] to-[#EB6484] text-white rounded-lg hover:bg-blue-700 transition-colors"
            //   >
            //     Submit Enquiry
            //   </button>
            // </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
