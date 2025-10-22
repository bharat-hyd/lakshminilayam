import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/BlogData';

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <motion.div
          key={post.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            className="h-48 w-full object-cover" 
            src={post.imageUrl} 
            alt={post.title} 
          />
          <div className="p-6">
            <span className="text-sm text-[#EB6484] font-medium">{post.category}</span>
            <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{post.date}</span>
              <Link 
                to={`/blog/${post.id}`}
                className="px-4 py-2 bg-[#EB6484] text-white rounded-lg hover:bg-[#d54d6d] transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogList;
