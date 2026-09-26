import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

export default function Loader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 3000; // 3 seconds
    const interval = 50;
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  // Particle positions
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center md:-mb-48 sm:-mb-48 justify-center bg-[#0e0e0e] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #a20021 0%, transparent 50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Rotating gradient ring */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'conic-gradient(from 0deg at 50% 50%, #a20021 0deg, transparent 60deg, transparent 300deg, #a20021 360deg)',
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#a20021] rounded-full blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [particle.scale, particle.scale * 1.5, particle.scale],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.id * 0.1,
          }}
        />
      ))}

      {/* Main loader container */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Circular loader with glow effect */}
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#a20021] opacity-20 blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Rotating border */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #a20021, #dc143c, #a20021)',
              padding: '3px',
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div className="w-full h-full rounded-full bg-[#0e0e0e]" />
          </motion.div>

          {/* Inner circle with glassmorphism */}
          <div className="absolute inset-3 rounded-full bg-[#1a1a1a] bg-opacity-40 backdrop-blur-md border border-[#a20021] border-opacity-30 flex items-center justify-center shadow-[0_0_30px_rgba(162,0,33,0.3)]">
            <motion.div
              className="text-3xl md:text-4xl text-[#a20021]"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {Math.round(progress)}%
            </motion.div>
          </div>
        </div>

        {/* LoginXol text with animation */}
        <div className="flex flex-col size-80 items-center gap-4">
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-9xl tracking-wider bg-gradient-to-r from-[#dc143c] via-[#a20021] to-[#dc143c] bg-clip-text text-transparent"
              style={{
                fontWeight: 700,
                textShadow: '0 0 40px rgba(162, 0, 33, 0.5)',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
             <img src={logo} alt="" />
            </motion.h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-gray-400 tracking-widest text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.8] }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            INNOVATIVE IT SOLUTIONS
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="w-64 md:w-80 h-1 bg-[#2a2a2a] rounded-full overflow-hidden mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#a20021] to-[#dc143c] relative"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Glow effect on progress bar */}
              <motion.div
                className="absolute inset-0 bg-white opacity-50 blur-sm"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>

          {/* Loading dots */}
          <div className="flex gap-2 mt-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-[#a20021] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </div>

        {/* Rotating hexagon decoration */}
        <motion.div
          className="absolute -z-10 w-64 h-64 md:w-96 md:h-96"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full opacity-10"
            fill="none"
            stroke="#a20021"
            strokeWidth="0.5"
          >
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
            <polygon points="50,15 80,30 80,70 50,85 20,70 20,30" />
          </svg>
        </motion.div>
      </div>

      {/* Corner accents */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#a20021] opacity-30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#a20021] opacity-30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </motion.div>
  );
}
