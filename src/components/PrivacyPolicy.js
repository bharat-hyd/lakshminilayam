// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const PrivacyPolicy = () => {
//     return (
//         <motion.div
//             className="container mx-auto px-4 py-16"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//         >
//             <div className="max-w-4xl mx-auto">
//                 <h1 className="text-4xl font-bold mb-8 text-blue-700">Privacy Policy</h1>

//                 <div className="prose prose-lg">
//                     <p className="mb-4">Last updated: [Current Date]</p>

//                     <section className="mb-8">
//                         <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
//                         <p>We collect information that you provide directly to us when you:</p>
//                         <ul className="list-disc pl-6 mb-4">
//                             <li>Fill out our contact forms</li>
//                             <li>Subscribe to our newsletter</li>
//                             <li>Request information about our properties</li>
//                         </ul>
//                     </section>

//                     <section className="mb-8">
//                         <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
//                         <p>We use the information we collect to:</p>
//                         <ul className="list-disc pl-6 mb-4">
//                             <li>Respond to your inquiries</li>
//                             <li>Send you updates about our properties</li>
//                             <li>Improve our services</li>
//                         </ul>
//                     </section>

//                     {/* Add more sections as needed */}
//                 </div>

//                 <div className="mt-8">
//                     <Link
//                         to="/"
//                         className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                     >
//                         Back to Home
//                     </Link>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default PrivacyPolicy;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <motion.div
            className="container mx-auto px-4 py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-gradient-to-r from-[#F8D1D0] to-[#EB6484]">Privacy Policy</h1>

                <div className="prose prose-lg">
                    <p className="mb-4">Welcome to Laxmi Nilayam</p>
                    <p className="mb-4">At Laxmi Nilayam, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the details you share with us when visiting our website. By accessing or using our website, you agree to the terms outlined below.</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                        <p>When you interact with our website, we may collect the following types of information:</p>
                        <ul className="list-disc pl-6 mb-4">
                            <li><strong>Personal Information:</strong> Your name, phone number, email address, and any other details you provide when contacting us or inquiring about our properties.</li>
                            <li><strong>Browsing Information:</strong> We may collect data such as your IP address, device type, browser details, and pages visited to improve our website experience.</li>
                            <li><strong>Cookies and Tracking:</strong> Our website may use cookies to enhance functionality and personalize your experience. You can manage or disable cookies in your browser settings.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                        <p>We use the information collected for the following purposes:</p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>To respond to your inquiries and provide details about Laxmi Nilayam.</li>
                            <li>To improve our website’s functionality and user experience.</li>
                            <li>To send you updates, offers, or relevant property information (only if you opt in).</li>
                            <li>To ensure the security and protection of our website.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
                        <p>We respect your privacy and do not sell, rent, or trade your personal details. However, we may share information in the following cases:</p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>With trusted service providers who help manage our website or communications (under strict confidentiality agreements).</li>
                            <li>When required by law, such as in response to legal requests or regulatory obligations.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                        <p>We take appropriate security measures to protect your personal information. While we strive to safeguard your data, no method of transmission over the internet is 100% secure. We encourage you to exercise caution when sharing personal details online.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Your Choices and Rights</h2>
                        <ul className="list-disc pl-6 mb-4">
                            <li>You can contact us at any time to update or request deletion of your personal data.</li>
                            <li>If you no longer wish to receive marketing updates, you can unsubscribe by following the instructions in our emails.</li>
                            <li>You can manage cookie preferences through your browser settings.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">6. Links to Other Websites</h2>
                        <p>Our website may contain links to external sites. We are not responsible for the privacy practices of other websites and encourage you to review their policies before providing personal information.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">7. Updates to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
                        <p>If you have any questions or concerns about this Privacy Policy, feel free to reach out to us:</p>
                        <p><strong>📍 Laxmi Nilayam</strong><br />D.No 272 & 273, Logos Public School Lane,<br />Syamalanagar Extension, Guntur – 522006</p>
                        <p><strong>📞 Phone:</strong> 91212 86881</p>
                        {/* <p><strong>💌 Gmail:</strong> [Your Email]</p> */}
                        <p><strong>🌐 Website:</strong> https://www.laxminilayam.com</p>
                    </section>
                </div>

                <div className="mt-8">
                    <Link
                        to="/"
                        className="inline-block bg-gradient-to-r from-[#F8D1D0] to-[#EB6484] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default PrivacyPolicy;
