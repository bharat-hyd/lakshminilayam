import React from 'react';
import { motion } from 'framer-motion';
import BlogList from './BlogList';

const Blog = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white text-gray-900">
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-[#EB6484]">
            Our Blog
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F8D1D0] to-[#EB6484] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-700 text-lg">Stay Updated with News and Insights</p>
        </motion.div>

        <BlogList />
      </div>
    </section>
  );
};

export default Blog;
