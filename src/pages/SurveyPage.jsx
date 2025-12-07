import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { questions } from '../data/questions';

const SurveyPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // Initial scores state
  const [scores, setScores] = useState({ GLOW: 0, FIRM: 0, CLEAN: 0, SPECIAL: 0, FULL: 0 });

  const handleOptionClick = (optionScores) => {
    // Accumulate scores
    const newScores = { ...scores };
    Object.keys(optionScores).forEach(key => {
        if (newScores[key] !== undefined) {
            newScores[key] += optionScores[key];
        }
    });
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      let maxScore = -1;
      let resultType = 'CLEAN'; // Default fallback
      
      // Find type with highest score
      Object.entries(newScores).forEach(([type, score]) => {
          if (score > maxScore) {
              maxScore = score;
              resultType = type;
          }
      });
      // Simple tie-breaking: first one encountered wins (order in object is key)
      // Todo: Implement specific tie-breaker logic if requested (e.g. CLEAN+SPECIAL bundle)
      
      navigate(`/result?type=${resultType}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFAF0] flex flex-col items-center justify-center p-4">
        {/* Progress Bar */}
        <div className="absolute top-10 w-full max-w-md px-4">
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-orange-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
            <div className="text-right text-xs text-gray-400 mt-2">
                {currentQuestion + 1} / {questions.length}
            </div>
        </div>

      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm z-10"
      >
        <h2 className="text-xl font-bold mb-8 text-center text-gray-800 break-keep">
            Q{questions[currentQuestion].id}. <br/>
            <span className="text-lg font-medium text-gray-600 mt-2 block">
                {questions[currentQuestion].question}
            </span>
        </h2>
        
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option.scores)}
              className="w-full p-4 text-left rounded-xl border border-gray-100 bg-gray-50 hover:bg-orange-50 hover:border-orange-200 transition-colors text-gray-700 text-sm leading-relaxed"
            >
              {option.text}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SurveyPage;
