'use client'

import * as React from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  const icons = ['💊', '🩺', '🧬', '⚕️', '🩹'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative w-80 h-80">
        {/* Outer rotating circles */}
        <motion.div
          className="absolute inset-0 border-4 border-blue-500 rounded-full"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-2 border-4 border-blue-300 rounded-full"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: -360 }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="absolute inset-4 border-4 border-blue-100 rounded-full"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, delay: 0.4 }}
        />
        {/* Logo and tagline */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="font-bold text-4xl text-blue-500 mb-2">HealthHub</h2>
          <p className="text-gray-500 font-medium text-xl">Your Wellness, Our Priority</p>
        </motion.div>
      </div>
      {/* Floating icons */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center">
        <motion.div
          className="flex space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {icons.map((emoji, index) => (
            <motion.span
              key={index}
              className="text-3xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.8 }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
