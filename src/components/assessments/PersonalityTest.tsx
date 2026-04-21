"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, Brain, User, Shield, Zap, Sparkles } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  trait: 'E' | 'S' | 'C' | 'O'; // Extroversion, Stability, Control, Openness
}

const questions: Question[] = [
  { id: 1, text: "أستمتع بكوني وسط مجموعة كبيرة من الناس.", trait: 'E' },
  { id: 2, text: "أفكر ملياً قبل اتخاذ أي قرار هام.", trait: 'C' },
  { id: 3, text: "أبقى هادئاً حتى في المواقف الضاغطة.", trait: 'S' },
  { id: 4, text: "أحب تجربة أشياء جديدة وغير مألوفة دائماً.", trait: 'O' },
  { id: 5, text: "أميل إلى بدء المحادثات مع الغرباء بسهولة.", trait: 'E' },
  { id: 6, text: "أهتم كثيراً بالتفاصيل والجداول الزمنية.", trait: 'C' },
  { id: 7, text: "نادراً ما أشعر بالإحباط أو القلق المفاجئ.", trait: 'S' },
  { id: 8, text: "أستمتع بمناقشة الأفكار الفلسفية والنظرية.", trait: 'O' },
  { id: 9, text: "أشعر بالنشاط بعد قضاء وقت ممتع مع الأصدقاء.", trait: 'E' },
  { id: 10, text: "أنهي مهامي الموكلة إليّ في وقتها المحدد.", trait: 'C' },
  { id: 11, text: "أتعامل مع خيبات الأمل بسرعة وبشكل إيجابي.", trait: 'S' },
  { id: 12, text: "أقدر الفنون والجمال في مختلف أشكالها.", trait: 'O' },
  { id: 13, text: "أفضل العمل الجماعي على العمل الفردي.", trait: 'E' },
  { id: 14, text: "أحب أن تكون غرفتي/مكتبي منظماً بشكل دقيق.", trait: 'C' },
  { id: 15, text: "لا يتغير مزاجي بسهولة بسبب العوامل الخارجية.", trait: 'S' },
  { id: 16, text: "أبحث دائماً عن معاني وتفسيرات أعمق للأمور.", trait: 'O' }
];

const options = [
  { label: "أوافق بشدة", value: 4, color: "bg-green-500" },
  { label: "أوافق", value: 3, color: "bg-green-400" },
  { label: "محايد", value: 2, color: "bg-slate-300" },
  { label: "أعارض", value: 1, color: "bg-red-400" },
  { label: "أعارض بشدة", value: 0, color: "bg-red-500" }
];

export default function PersonalityTest({ onComplete }: { onComplete: (results: any) => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleAnswer = (value: number) => {
    setAnswers({ ...answers, [questions[currentStep].id]: value });
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    }
  };

  const calculateResults = () => {
    const scores = { E: 0, S: 0, C: 0, O: 0 };
    const counts = { E: 0, S: 0, C: 0, O: 0 };

    questions.forEach(q => {
      scores[q.trait] += answers[q.id] || 0;
      counts[q.trait]++;
    });

    // Normalize to 0-100
    return {
      extroversion: Math.round((scores.E / (counts.E * 4)) * 100),
      stability: Math.round((scores.S / (counts.S * 4)) * 100),
      control: Math.round((scores.C / (counts.C * 4)) * 100),
      openness: Math.round((scores.O / (counts.O * 4)) * 100)
    };
  };

  const isFinished = Object.keys(answers).length === questions.length;

  return (
    <div className="max-w-3xl mx-auto font-arabic">
      <AnimatePresence mode="wait">
        {!isFinished ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="glass-morphism rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-white/40 font-arabic"
          >
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4 text-sm font-black text-primary-950 dark:text-slate-300">
                <span>السؤال {currentStep + 1} من {questions.length}</span>
                <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  className="h-full bg-gradient-to-l from-indigo-600 to-purple-600"
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-12 min-h-[100px]">
              <h2 className="text-3xl md:text-4xl font-black text-primary-950 dark:text-white leading-relaxed">
                {questions[currentStep].text}
              </h2>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 gap-4">
              {options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(opt.value)}
                  className={`group relative flex items-center justify-between p-5 rounded-2xl border-2 transition-all ${
                    answers[questions[currentStep].id] === opt.value
                      ? 'border-primary-600 bg-primary-600 shadow-xl shadow-primary-600/20 scale-[1.05]'
                      : 'glass-morphism border-white/20 hover:border-primary-600'
                  }`}
                >
                  <span className={`text-xl font-black ${
                    answers[questions[currentStep].id] === opt.value ? 'text-white' : 'text-primary-950 dark:text-slate-300'
                  }`}>
                    {opt.label}
                  </span>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    answers[questions[currentStep].id] === opt.value ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300'
                  }`}>
                    {answers[questions[currentStep].id] === opt.value && <Check size={14} className="text-white" />}
                  </div>
                </button>
              ))}
            </div>

            {/* Footer Navigation */}
            <div className="mt-12 flex justify-between items-center">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="flex items-center gap-2 text-slate-500 font-bold disabled:opacity-0 transition-opacity"
              >
                <ArrowRight size={20} />
                السابق
              </button>
              <div className="flex gap-2">
                {questions[currentStep].trait === 'E' && <User className="text-blue-500" size={24} />}
                {questions[currentStep].trait === 'C' && <Shield className="text-green-500" size={24} />}
                {questions[currentStep].trait === 'S' && <Zap className="text-amber-500" size={24} />}
                {questions[currentStep].trait === 'O' && <Sparkles className="text-purple-500" size={24} />}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="finish"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-morphism rounded-[2.5rem] p-12 shadow-xl border border-white/40 text-center font-arabic"
          >
            <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check size={48} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">اكتمل اختبار السمات الشخصية!</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg">
              لقد قمنا بتحليل استجاباتك. يمكنك الآن عرض النتائج ومعرفة كيف تؤثر شخصيتك على مسارك المهني.
            </p>
            <button
              onClick={() => onComplete(calculateResults())}
              className="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-3 mx-auto"
            >
              عرض التقرير السيكولوجي
              <ArrowLeft size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
