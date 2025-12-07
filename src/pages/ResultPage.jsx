import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { results } from '../data/results';

const ResultPage = () => {
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type') || 'CLEAN'; // Default fallback
    const navigate = useNavigate();
    
    // Ensure valid type, default to CLEAN if invalid
    const result = results[type] || results['CLEAN'];

    // Specific styling based on type could be added here
    // For now using the 'color' prop from data

  return (
    <div className={`min-h-screen ${result.color.split(' ')[0]} flex flex-col items-center justify-center p-4 py-12`}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        duration={{ duration: 0.6 }}
        className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl text-center"
      >
        <span className={`inline-block ${result.color} px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide`}>
            MY Y-ZONE TYPE
        </span>
        
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
            {result.title}
        </h1>
        <p className="text-gray-500 font-medium mb-6 text-sm md:text-base">
            "{result.subtitle}"
        </p>

        <div className="text-left bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
            <h3 className="text-sm font-bold text-gray-700 mb-2">💡 고민 포인트</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {result.worryPoint}
            </p>
             <h3 className="text-sm font-bold text-gray-700 mb-2">📋 처방 솔루션</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
                {result.desc}
            </p>
        </div>
        
        <div className="mb-10">
            <div className="flex items-center justify-center mb-4">
               <span className="h-px w-8 bg-gray-300"></span>
               <span className="mx-3 text-xs text-gray-400 font-medium tracking-widest">RECOMMEND ROUTINE</span>
               <span className="h-px w-8 bg-gray-300"></span>
            </div>
            
            <div className="space-y-3">
                {result.routine.map((item, idx) => (
                    <div key={idx} className={`p-4 rounded-xl text-left border ${item.includes('Hero') ? 'bg-gray-900 text-white border-gray-900 shadow-lg' : 'bg-white border-gray-200 text-gray-700'}`}>
                        <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{item.replace(' (Hero)', '')}</span>
                            {item.includes('Hero') && (
                                <span className="text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded-full font-bold uppercase ml-2">
                                    Hero
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        <div className="space-y-3">
             <button 
                onClick={() => window.open(result.productUrl, '_blank')}
                className="block w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg"
            >
                나만의 리츄얼 시작하기
            </button>
            <button 
                onClick={() => navigate('/')}
                className="block w-full bg-white text-gray-500 py-4 rounded-xl font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
            >
                테스트 다시하기
            </button>
        </div>

      </motion.div>

      <p className="mt-8 text-gray-400 text-xs font-light">
          COPYRIGHT © RITUALLY. ALL RIGHTS RESERVED.
      </p>
    </div>
  );
};

export default ResultPage;
