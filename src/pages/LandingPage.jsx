import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import mainImage from '../assets/hero_bg.jpg';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFFAF0] flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-200 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-100 rounded-full blur-[100px]" />
        </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col items-center"
      >
        <img src={logo} alt="Ritually Logo" className="w-32 mb-8 drop-shadow-md" />
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center">Y존 케어 성향테스트</h1>
        <p className="text-gray-600 mb-10 text-center text-lg">나에게 딱 맞는 리츄얼 케어법을 찾아보세요</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/survey')}
          className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
        >
          테스트 시작하기
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
