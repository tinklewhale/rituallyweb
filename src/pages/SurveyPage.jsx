import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const questions = [
  {
    id: 1,
    question: "평소 Y존에 대한 고민이 있나요?",
    img: "", // Placeholder for potential image
    options: [
      { text: "건조함이나 간지러움이 종종 느껴져요.", score: { A: 1, B: 0, C: 0, D: 0 } },
      { text: "분비물이 많거나 냄새가 신경 쓰여요.", score: { A: 0, B: 1, C: 0, D: 0 } },
      { text: "생리 전후로 불편함이 커요.", score: { A: 0, B: 0, C: 1, D: 0 } },
      { text: "특별한 고민은 없지만 관리하고 싶어요.", score: { A: 0, B: 0, C: 0, D: 1 } },
    ]
  },
  {
    id: 2,
    question: "선호하는 제품 제형은?",
    options: [
      { text: "부드럽고 촉촉한 폼 타입", score: { A: 1, C: 1 } },
      { text: "상쾌하고 산뜻한 젤 타입", score: { B: 1, D: 1 } },
    ]
  },
   {
    id: 3,
    question: "나의 라이프스타일은?",
    options: [
      { text: "외부 활동이 많고 운동을 즐겨요.", score: { B: 1 } },
      { text: "집에서 휴식하는 시간을 중요하게 생각해요.", score: { A: 1, D: 1 } },
      { text: "스트레스를 받으면 몸이 예민해져요.", score: { C: 1 } },
    ]
  }
];

const SurveyPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ A: 0, B: 0, C: 0, D: 0 });

  const handleOptionClick = (optionScore) => {
    // Basic score accumulation
    const newScores = { ...scores };
    Object.keys(optionScore).forEach(key => {
        newScores[key] = (newScores[key] || 0) + optionScore[key];
    });
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result and navigate
      // Simple logic: find max score
      let maxScore = -1;
      let resultType = 'D'; // Default
      Object.entries(newScores).forEach(([type, score]) => {
          if (score > maxScore) {
              maxScore = score;
              resultType = type;
          }
      });
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
        </div>

      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm z-10"
      >
        <h2 className="text-xl font-bold mb-6 text-center text-gray-800">
            Q{currentQuestion + 1}. <br/>
            {questions[currentQuestion].question}
        </h2>
        
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option.score)}
              className="w-full p-4 text-left rounded-xl border border-gray-100 bg-gray-50 hover:bg-orange-50 hover:border-orange-200 transition-colors text-gray-700"
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
