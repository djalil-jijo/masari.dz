"use client";

import React, { useState } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight, BarChart3, Info, Compass } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import { HollandType, Question, hollandQuestions as questions } from '@/lib/data/mockAssessments';

const typeLabels: Record<HollandType, { title: string; color: string; desc: string }> = {
  R: { title: "واقعي (Realistic)", color: "bg-orange-500", desc: "يفضل العمل اليدوي والتعامل مع الآلات والأدوات." },
  I: { title: "باعث (Investigative)", color: "bg-blue-500", desc: "يميل للتحليل والبحث العلمي وحل المشكلات المعقدة." },
  A: { title: "فنان (Artistic)", color: "bg-pink-500", desc: "مبدع، يفضل التعبير عن نفسه من خلال الفن والكتابة." },
  S: { title: "اجتماعي (Social)", color: "bg-green-500", desc: "يحب مساعدة الآخرين والتعليم والعمل الجماعي." },
  E: { title: "مبادر (Enterprising)", color: "bg-red-500", desc: "قيادي، يمتلك مهارات الإقناع ويفضل عالم الأعمال." },
  C: { title: "تقليدي (Conventional)", color: "bg-purple-500", desc: "منظم، يحب العمل مع البيانات والتقيد بالأنظمة." },
};

export default function HollandTest() {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const router = useRouter();

  const questionsPerPage = 5;
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const currentQuestions = questions.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage);

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const calculateResults = () => {
    const scores: Record<HollandType, number> = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    questions.forEach((q) => {
      scores[q.type] += answers[q.id] || 0;
    });

    return Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .map(([type, score]) => ({ type: type as HollandType, score }));
  };

  const handleFinish = () => {
    const results = calculateResults();
    const topThree = results.slice(0, 3).map(r => r.type);
    localStorage.setItem('user_holland', JSON.stringify(topThree));
    router.push('/dashboard');
  };

  const progress = (Object.keys(answers).length / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6">
      <div className="mb-8 font-arabic">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-black text-primary-950  flex items-center gap-3">
            <Compass className="text-primary-600" size={32} />
            مقياس الميول المهنية
          </h2>
          <span className="text-sm font-bold text-slate-700  font-bold">سؤال {Object.keys(answers).length} من {questions.length}</span>
        </div>
        <div className="h-2 w-full bg-slate-100  rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="glass-morphism rounded-[2.5rem] shadow-xl border border-white/40 p-6 md:p-10 min-h-[500px] flex flex-col font-arabic">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentPage}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex-1 space-y-8"
          >
            {currentQuestions.map((q) => (
              <div key={q.id} className="space-y-4">
                <p className="text-xl font-black text-primary-950  leading-relaxed">
                  {q.id}. {q.text}
                </p>
                <div className="grid grid-cols-5 gap-2 md:gap-4">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleAnswer(q.id, value)}
                      className={`h-12 md:h-14 rounded-xl border-2 transition-all flex items-center justify-center font-black text-lg
                        ${answers[q.id] === value 
                          ? 'border-primary-600 bg-primary-600 text-white shadow-xl shadow-primary-600/30 transform scale-110' 
                          : 'glass-morphism border-white/20 text-slate-700  hover:border-primary-600'
                        }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] md:text-xs text-slate-500 font-medium px-1">
                  <span>لا أوافق بشدة</span>
                  <span>أوافق بشدة</span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 pt-8 border-t border-slate-100  flex items-center justify-between">
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="flex items-center gap-2 px-6 py-2.5 text-slate-600  font-bold disabled:opacity-30 hover:bg-slate-50  rounded-xl transition-all"
          >
            <ChevronRight />
            السابق
          </button>
          
          {currentPage === totalPages - 1 ? (
            <button
              disabled={Object.keys(answers).length < questions.length}
              onClick={handleFinish}
              className="flex items-center gap-2 px-8 py-3 bg-primary-600 text-white font-bold rounded-xl shadow-lg shadow-primary-600/20 hover:bg-primary-700 transition-all disabled:opacity-50"
            >
              عرض النتائج
              <CheckCircle2 size={20} />
            </button>
          ) : (
            <button
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="flex items-center gap-2 px-6 py-2.5 bg-slate-900  text-white  font-bold rounded-xl hover:opacity-90 transition-all"
            >
              التالي
              <ChevronLeft />
            </button>
          )}
        </div>
      </div>

      <div className="mt-8 text-center text-slate-500 text-sm">
        <p>يرجى الإجابة بصراحة لضمان دقة النتائج</p>
      </div>
    </div>
  );
}
