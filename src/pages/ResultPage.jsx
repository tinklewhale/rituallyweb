import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const results = {
  A: {
    title: "민감한 아기피부형",
    desc: "작은 자극에도 예민하게 반응하는 타입이에요. 순한 성분의 보습 케어가 필요합니다.",
    productName: "리츄얼리 퓨어 마일드 젤",
    productUrl: "https://example.com/product/a"
  },
  B: {
    title: "상쾌한 밸런스형",
    desc: "활동량이 많고 산뜻함을 선호하는 타입이에요. pH 밸런스를 맞춰주는 케어가 딱이에요.",
    productName: "리츄얼리 프레쉬 밸런싱 폼",
    productUrl: "https://example.com/product/b"
  },
  C: {
    title: "집중 케어 필요형",
    desc: "특정 시기에 불편함이 커지는 타입이에요. 진정과 영양 공급이 중요합니다.",
    productName: "리츄얼리 인텐시브 카밍 세럼",
    productUrl: "https://example.com/product/c"
  },
  D: {
    title: "데일리 루틴형",
    desc: "지금도 건강하지만 꾸준한 관리를 원하는 타입이에요. 매일 써도 부담 없는 데일리 케어를 추천해요.",
    productName: "리츄얼리 에브리데이 워시",
    productUrl: "https://example.com/product/d"
  }
};

const ResultPage = () => {
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type') || 'D'; // Default to D if missing
    const navigate = useNavigate();
    
    const result = results[type];

  return (
    <div className="min-h-screen bg-[#FFFAF0] flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        duration={{ duration: 0.6 }}
        className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl text-center"
      >
        <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            나의 Y존 타입은?
        </span>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{result.title}</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
            {result.desc}
        </p>
        
        <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
            <p className="text-sm text-gray-500 mb-2">추천 아이템</p>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{result.productName}</h3>
            {/* Image placeholder */}
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                Product Image
            </div>
            
            <a 
                href={result.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
                제품 보러가기
            </a>
        </div>
        
        <button 
            onClick={() => navigate('/')}
            className="text-gray-400 text-sm border-b border-gray-300 hover:text-gray-600 hover:border-gray-500 transition-colors"
        >
            테스트 다시하기
        </button>

      </motion.div>
    </div>
  );
};

export default ResultPage;
