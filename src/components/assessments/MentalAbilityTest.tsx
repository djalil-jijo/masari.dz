"use client";

import React, { useState, useEffect } from 'react';
import { Brain, CheckCircle2, ChevronLeft, ChevronRight, Timer, Lightbulb, BarChart3 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

type AbilityType = 'L' | 'M' | 'S' | 'Mem';

interface AbilityQuestion {
  id: number;
  text: string;
  options: string[];
  correct: number;
  type: AbilityType;
}

const abilityQuestions: AbilityQuestion[] = [
  // Logical/Mathematical (M)
  { id: 1, text: "ما هو الرقم المفقود في السلسلة: 2، 4، 8، 16، ...؟", options: ["20", "24", "32", "40"], correct: 2, type: 'M' },
  { id: 2, text: "إذا كان 3x + 5 = 20، فما قيمة x؟", options: ["3", "5", "7", "9"], correct: 1, type: 'M' },
  { id: 3, text: "أي الأشكال يكمل النمط: مربع، دائرة، مربع، دائرة، ...؟", options: ["مثلث", "مربع", "دائرة", "مستطيل"], correct: 1, type: 'M' },

  // Linguistic (L)
  { id: 4, text: "ما هو مرادف كلمة 'إيثار'؟", options: ["أنانية", "تفضيل الآخرين", "شجاعة", "ذكاء"], correct: 1, type: 'L' },
  { id: 5, text: "العلاقة (رئة : تنفس) تشبه العلاقة بين:", options: ["قلب : دم", "عين : رؤية", "أذن : صوت", "يد : عمل"], correct: 1, type: 'L' },
  { id: 6, text: "أكمل الجملة: 'القراءة تغذي ... كما يغذي الطعام الجسم'.", options: ["القلب", "العقل", "الروح", "البدن"], correct: 1, type: 'L' },

  // Spatial (S)
  { id: 7, text: "إذا قمنا بطي ورقة مربعة مرتين ثم قصصنا ربع دائرة، كيف ستبدو عند فتحها؟", options: ["دائرة كاملة", "أربعة دوائر", "مربع", "نجمة"], correct: 0, type: 'S' },
  { id: 8, text: "أي من هذه الأشكال هو دوران للشكل (L)؟", options: ["7", "V", "E", "Z"], correct: 0, type: 'S' },
  { id: 9, text: "كم عدد المكعبات في شكل يتكون من قاعدة 3x3 وطبقة علوية واحدة في المركز؟", options: ["9", "10", "12", "13"], correct: 1, type: 'S' },

  // Memory (Mem) - Simple simulated task
  { id: 10, text: "تذكر هذه الكلمات: (أسد، تفاحة، مطر، كتاب). ما هي الكلمة الثانية؟", options: ["أسد", "تفاحة", "مطر", "كتاب"], correct: 1, type: 'Mem' },
  { id: 11, text: "ما لون الفاكهة المذكورة في السؤال السابق؟", options: ["أصفر", "أزرق", "أحمر", "أخضر"], correct: 2, type: 'Mem' },
  { id: 12, text: "ما هو الشيء الذي يسقط من السماء في قائمة الكلمات؟", options: ["أسد", "تفاحة", "مطر", "كتاب"], correct: 2, type: 'Mem' },
];

export default function MentalAbilityTest() {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const router = useRouter();

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (questionId: number, optionIndex: number) => {
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const calculateScore = () => {
    const scores: Record<AbilityType, { correct: number, total: number }> = {
      L: { correct: 0, total: 3 },
      M: { correct: 0, total: 3 },
      S: { correct: 0, total: 3 },
      Mem: { correct: 0, total: 3 },
    };

    abilityQuestions.forEach(q => {
      if (answers[q.id] === q.correct) {
        scores[q.type].correct += 1;
      }
    });

    return scores;
  };

  const handleFinish = () => {
    const scores = calculateScore();
    const topAbilities = Object.entries(scores)
      .sort(([, a], [, b]) => (b.correct / b.total) - (a.correct / a.total))
      .slice(0, 3)
      .map(([type]) => type);
    
    localStorage.setItem('user_abilities', JSON.stringify(topAbilities));
    router.push('/dashboard');
  };

  const q = abilityQuestions[currentPage];

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6">
      <div className="mb-8 font-arabic">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-black text-primary-950  flex items-center gap-3">
            <Brain className="text-blue-600" size={32} />
            اختبار القدرات العقلية
          </h2>
          <span className="text-sm font-bold text-slate-700 ">سؤال {currentPage + 1} من {abilityQuestions.length}</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-red-50  text-red-600 rounded-xl font-bold">
          <Timer size={18} />
          <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
        </div>
      </div>

      <div className="glass-morphism rounded-[2.5rem] shadow-xl border border-white/40 p-6 md:p-10 min-h-[450px] flex flex-col font-arabic">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentPage}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-blue-100  text-blue-600 text-xs font-bold rounded-full">
                {q.type === 'L' && 'لغوي'}
                {q.type === 'M' && 'منطقي رياضي'}
                {q.type === 'S' && 'بصري مكاني'}
                {q.type === 'Mem' && 'ذاكرة'}
              </span>
              <p className="text-2xl font-black text-primary-950  leading-relaxed">
                {q.text}
              </p>
              <div className="grid grid-cols-1 gap-4">
                {q.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(q.id, idx)}
                    className={`w-full text-right p-5 rounded-2xl border-2 glass-morphism border-white/20 text-slate-800  font-bold text-lg hover:border-primary-600 hover:bg-white/60 transition-all flex items-center gap-4 group
                      ${answers[q.id] === idx 
                        ? 'border-primary-600 bg-primary-50  text-primary-600' 
                        : ''
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 pt-8 border-t border-slate-100  flex items-center justify-between">
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="flex items-center gap-2 px-6 py-2.5 text-slate-600  font-bold disabled:opacity-30"
          >
            <ChevronRight />
            السابق
          </button>
          
          <div className="text-sm font-bold text-slate-500" dir="ltr">
            {currentPage + 1} / {abilityQuestions.length}
          </div>

          {currentPage === abilityQuestions.length - 1 ? (
            <button
              onClick={handleFinish}
              className="flex items-center gap-2 px-8 py-3 bg-primary-600 text-white font-bold rounded-xl shadow-lg shadow-primary-600/20 hover:bg-primary-700 transition-all"
            >
              إنهاء الاختبار
              <CheckCircle2 size={20} />
            </button>
          ) : (
            <button
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="flex items-center gap-2 px-8 py-3 bg-slate-900  text-white  font-bold rounded-xl hover:opacity-90 transition-all"
            >
              التالي
              <ChevronLeft />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
