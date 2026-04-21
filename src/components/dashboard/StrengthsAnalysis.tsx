"use client";

import React from 'react';
import { 
  Zap, 
  BookOpen, 
  Brain, 
  Lightbulb, 
  Trophy, 
  Target, 
  ArrowUpRight, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles,
  PieChart
} from 'lucide-react';
import { motion } from 'framer-motion';

const strengths = [
  {
    category: "نقاط القوة الأكاديمية",
    icon: <BookOpen className="text-blue-600" />,
    color: "bg-blue-50 border-blue-100",
    items: [
      { title: "الاستيعاب السريع", level: 90, desc: "قدرة عالية على فهم المفاهيم الجديدة في وقت قصير." },
      { title: "المنطق الرياضي", level: 85, desc: "مهارة متميزة في حل المسائل الحسابية والبرمجية." },
      { title: "اللغة والتعبير", level: 75, desc: "قدرة جيدة على صياغة الأفكار بوضوح ودقة." }
    ]
  },
  {
    category: "نقاط القوة المهنية",
    icon: <ShieldCheck className="text-green-600" />,
    color: "bg-green-50 border-green-100",
    items: [
      { title: "العمل الجماعي", level: 88, desc: "فعالية عالية في التعاون مع أعضاء الفريق لتحقيق الأهداف." },
      { title: "حل المشكلات", level: 82, desc: "ابتكار حلول عملية تحت الضغوط المختلفة." },
      { title: "القيادة والمبادرة", level: 70, desc: "إمكانات واعدة لتولي أدوار قيادية في المشاريع." }
    ]
  }
];

export default function StrengthsAnalysis() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
        <div>
          <h2 className="text-3xl font-bold text-primary-950 dark:text-white mb-2">تحليل نقاط القوة</h2>
          <p className="text-slate-700 dark:text-slate-300 font-medium">نظرة عميقة على مهاراتك الذهنية والمهنية المتميزة</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-900/30 text-amber-600 rounded-xl font-bold text-sm">
          <Sparkles size={18} />
          <span>تحليل الذكاء الاصطناعي</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {strengths.map((group, idx) => (
          <div key={idx} className="space-y-6">
            <div className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 rounded-xl glass-morphism border border-indigo-100/20 flex items-center justify-center">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-950 dark:text-white">{group.category}</h3>
            </div>
            
            <div className="space-y-4">
              {group.items.map((item, iIndex) => (
                <motion.div 
                  key={iIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (idx * 3 + iIndex) * 0.1 }}
                  className="glass-morphism p-6 rounded-3xl border border-white/40 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-primary-950 dark:text-white flex items-center gap-2">
                      <Zap size={16} className="text-amber-500" />
                      {item.title}
                    </h4>
                    <span className="text-primary-600 font-black">{item.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-4">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.level}%` }}
                      className="h-full bg-primary-600 rounded-full"
                    />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-bold">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-600/20">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
            <Trophy size={24} />
          </div>
          <h5 className="font-bold text-lg mb-2">أعلى مهارة لديك</h5>
          <p className="text-blue-100 text-sm">الاستيعاب السريع للبيانات هو أهم ما يميزك في الجانب الأكاديمي.</p>
        </div>
        
        <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl shadow-slate-900/20 relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
              <TrendingUp size={24} />
            </div>
            <h5 className="font-bold text-lg mb-2">تطور ملحوظ</h5>
            <p className="text-slate-400 text-sm">تحسنت مهارات حل المشكلات لديك بنسبة 15% منذ الاختبار السابق.</p>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/10 rounded-full blur-2xl"></div>
        </div>

        <div className="p-6 rounded-3xl glass-morphism border border-white/40 shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 rounded-lg">
                <PieChart size={20} />
             </div>
             <span className="font-bold text-primary-950 dark:text-white">توازن المهارات</span>
          </div>
          <div className="h-24 flex items-end justify-around p-2">
             <div className="w-4 bg-blue-500 h-[60%] rounded-t-sm"></div>
             <div className="w-4 bg-green-500 h-[85%] rounded-t-sm"></div>
             <div className="w-4 bg-amber-500 h-[45%] rounded-t-sm"></div>
             <div className="w-4 bg-indigo-500 h-[70%] rounded-t-sm"></div>
          </div>
          <p className="text-[10px] text-slate-400 text-center">مقارنة بين الجوانب العلمية والأدبية</p>
        </div>
      </div>
    </div>
  );
}
