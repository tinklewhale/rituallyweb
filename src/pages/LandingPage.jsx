import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/hero_bg.jpg';
import bgImage from '../assets/Y1.jpg';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = bgImage;
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
        {/* Fallback Background Color */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 z-0" />
        
        {/* Base Background Image */}
        {!imageError && (
          <div 
              className={`absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 transition-opacity duration-1000 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${bgImage})` }}
          />
        )}
        
        {/* Animated Gradient Overlay */}
        <motion.div 
            className="absolute top-0 left-0 w-full h-full z-1 pointer-events-none opacity-60"
            animate={{
                background: [
                    "linear-gradient(45deg, rgba(245,181,145,0.4) 0%, rgba(255,250,240,0.2) 100%)",
                    "linear-gradient(45deg, rgba(255,250,240,0.2) 0%, rgba(245,181,145,0.4) 100%)",
                    "linear-gradient(45deg, rgba(245,181,145,0.4) 0%, rgba(255,250,240,0.2) 100%)"
                ]
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />

        {/* Content Container */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 flex flex-col items-center max-w-md w-full text-center"
        >
            {/* Logo Section - User requested hero_bg as logo */}
            <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl">
                 <img src={logo} alt="Ritually" className="w-48 h-auto object-cover" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 drop-shadow-sm">
                Y존 케어 성향테스트
            </h1>
            <p className="text-gray-700 mb-12 text-lg font-medium">
                나에게 딱 맞는 리츄얼 케어법을 찾아보세요
            </p>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/survey')}
                className="bg-[#1a1a1a] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:bg-gray-800 transition-all duration-300 w-full md:w-auto"
            >
                테스트 시작하기
            </motion.button>
        </motion.div>
    </div>
  );
};

export default LandingPage;
