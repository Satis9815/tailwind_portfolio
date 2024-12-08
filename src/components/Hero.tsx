import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { urls } from '../utils/urlUtils';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white to-blue-50">
      {/* Animated bubbles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-100/30"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-32 relative z-10 h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Frontend Developer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Crafting beautiful and performant web experiences with modern technologies
          </p>
          <div className="flex justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={urls.GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={urls.LINKEDIN__URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${urls.EMAIL}`}
              className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;