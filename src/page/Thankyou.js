import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Thankyou() {
  const [enquiryData, setEnquiryData] = useState(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem('enquiryData');
    if (storedData) {
      const data = JSON.parse(storedData);
      setEnquiryData(data);
      console.log('Retrieved enquiry data:', data);
    }
  }, []);

  const styles = {
    bgPink: {
      backgroundColor: '#FBE3DC'
    },
    textPink: {
      color: '#EC6786'
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={styles.bgPink}>
      <div className="flex-1 flex items-center justify-center p-5">
        <div className="bg-white max-w-lg w-full rounded-lg shadow-xl p-8 text-center">
          <div className="text-5xl mb-6" style={styles.textPink}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4" style={styles.textPink}>Thank You!</h1>
          <p className="text-gray-700 mb-6">We've received your enquiry and will get back to you shortly. Our team is excited to help you find your dream home at Lakshmi Nilayam.</p>
          <div className="mt-8">
            <Link to="/" className="py-3 px-6 bg-[#EC6786] text-white rounded font-bold cursor-pointer transition-colors hover:bg-[#F08A9E] inline-block">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
      <footer className="bg-[#EC6786] bg-opacity-50 text-white p-4 text-center">
        <p>© 2023 Lakshmi Nilayam. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Thankyou;
