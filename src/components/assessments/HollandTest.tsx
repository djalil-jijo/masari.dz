"use client";

import React, { useState } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight, BarChart3, Info, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type HollandType = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

interface Question {
  id: number;
  text: string;
  type: HollandType;
}

const questions: Question[] = [
  // Realistic (R)
  { id: 1, text: "أحب العمل بيداي لإصلاح الأشياء أو بنائها", type: 'R' },
  { id: 2, text: "أفضل العمل في الهواء الطلق بدلاً من المكتب", type: 'R' },
  { id: 3, text: "أستمتع بتشغيل الآلات والمعدات الميكانيكية", type: 'R' },
  { id: 4, text: "أهتم بكيفية عمل الأجهزة الإلكترونية والكهربائية", type: 'R' },
  { id: 5, text: "أفضل الأنشطة التي تتطلب جهداً بدنياً ومهارة عملية", type: 'R' },
  
  // Investigative (I)
  { id: 6, text: "أحب حل المسائل الرياضية أو الألغاز العلمية", type: 'I' },
  { id: 7, text: "أستمتع بإجراء البحوث وجمع المعلومات حول موضوع معين", type: 'I' },
  { id: 8, text: "أميل للتفكير بشكل منطقي وتحليلي عند مواجهة المشكلات", type: 'I' },
  { id: 9, text: "أحب استكشاف النظريات العلمية المعقدة", type: 'I' },
  { id: 10, text: "أفضل الوظائف التي تتطلب التفكير العميق والبحث", type: 'I' },
  
  // Artistic (A)
  { id: 11, text: "أستمتع بالرسم، الكتابة الإبداعية، أو العزف الموسيقي", type: 'A' },
  { id: 12, text: "أفضل العمل في بيئة تسمح لي بالتعبير عن إبداعي", type: 'A' },
  { id: 13, text: "أحب تصميم الأشياء وجعلها تبدو جميلة وجذابة", type: 'A' },
  { id: 14, text: "أميل لاستخدام خيالي لابتكار أفكار جديدة", type: 'A' },
  { id: 15, text: "أفضل المهام غير التقليدية التي لا تتبع قواعد صارمة", type: 'A' },
  
  // Social (S)
  { id: 16, text: "أحب مساعدة الآخرين في حل مشكلاتهم الشخصية", type: 'S' },
  { id: 17, text: "أستمتع بالتعليم، التدريب، أو نقل المعرفة للآخرين", type: 'S' },
  { id: 18, text: "أفضل العمل كجزء من فريق لخدمة المجتمع", type: 'S' },
  { id: 19, text: "أهتم بالعمل التطوعي والأنشطة الإنسانية", type: 'S' },
  { id: 20, text: "أجد متعة في الاستماع للآخرين وفهم مشاعرهم", type: 'S' },
  
  // Enterprising (E)
  { id: 21, text: "أحب إقناع الآخرين بوجهة نظري أو بمنتج ما", type: 'E' },
  { id: 22, text: "أستمتع بتولي مسؤولية قيادة المجموعات والمشاريع", type: 'E' },
  { id: 23, text: "أهتم بعالم الأعمال، التسويق، وإدارة المشاريع", type: 'E' },
  { id: 24, text: "أحب التحدي والمنافسة لتحقيق أهداف طموحة", type: 'E' },
  { id: 25, text: "أفضل الأدوار التي تمكنني من اتخاذ قرارات مؤثرة", type: 'E' },
  
  // Conventional (C)
  { id: 26, text: "أحب تنظيم الملفات، البيانات، والعمل بدقة عالية", type: 'C' },
  { id: 27, text: "أفضل العمل وفق خطة واضحة وإجراءات محددة", type: 'C' },
  { id: 28, text: "أستمتع بالعمل مع الأرقام والميزانيات والسجلات", type: 'C' },
  { id: 29, text: "أهتم بالتفاصيل الدقيقة والتأكد من مطابقة المعايير", type: 'C' },
  { id: 30, text: "أفضل المهام المكتبية المنظمة التي تتطلب التركيز", type: 'C' },
];

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
  const [showResults, setShowResults] = useState(false);

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

  const progress = (Object.keys(answers).length / questions.length) * 100;

  if (showResults) {
    const results = calculateResults();
    return (
      <div className="max-w-4xl mx-auto p-6 animate-fade-in font-arabic">
        <div className="glass-morphism rounded-[2.5rem] shadow-xl border border-white/40 p-8">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-primary-100  text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 size={32} />
            </div>
            <h2 className="text-4xl font-black text-primary-950  mb-2">نتائج مقياس هولاند للميول</h2>
            <p className="text-slate-700  font-bold">بناءً على إجاباتك، هذا هو التحليل النوعي لميولك المهنية</p>
          </div>

          <div className="space-y-6">
            {results.map(({ type, score }, index) => (
              <div key={type} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-white text-xs font-black ${typeLabels[type].color}`}>
                      {index + 1}
                    </span>
                    <h4 className="font-extrabold text-primary-950 ">{typeLabels[type].title}</h4>
                  </div>
                  <span className="text-sm font-black text-primary-600">{score} نقطة</span>
                </div>
                <div className="h-3 bg-slate-100  rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(score / 25) * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full rounded-full ${typeLabels[type].color}`}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2 px-1">{typeLabels[type].desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary-50  rounded-2xl border border-primary-100  flex gap-4 items-start">
            <Info className="text-primary-600 shrink-0" size={24} />
            <div>
              <h5 className="font-bold text-primary-900  mb-1">توصية أولية:</h5>
              <p className="text-sm text-primary-800  leading-relaxed">
                نمطك الغالب هو ( {typeLabels[results[0].type].title} ). ننصحك باستكشاف التخصصات التي تتطلب مهارات {typeLabels[results[0].type].desc.split(' ').slice(2).join(' ')}
              </p>
            </div>
          </div>

          <button 
            onClick={() => { setShowResults(false); setAnswers({}); setCurrentPage(0); }}
            className="w-full mt-8 py-4 bg-slate-100  text-slate-900  font-bold rounded-2xl hover:bg-slate-200 transition-all"
          >
            إعادة الاختبار
          </button>
        </div>
      </div>
    );
  }

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
              onClick={() => setShowResults(true)}
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
