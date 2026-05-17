"use client";

import React from 'react';
import { 
  Compass, 
  Brain, 
  User, 
  ArrowRight, 
  TrendingUp, 
  BarChart2, 
  Search,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestResults({ 
  userHolland, 
  userAbilities, 
  userPersonality 
}: { 
  userHolland: string[], 
  userAbilities: string[], 
  userPersonality: any 
}) {
  const tests = [
    {
      id: "holland",
      title: "مقياس هولاند للميول",
      icon: <Compass size={24} className="text-primary-600" />,
      score: userHolland.join("-"),
      desc: "نمطك السائد هو البحثي والاجتماعي. أنت تميل لحل المشكلات المعقدة ومساعدة الآخرين.",
      date: "2026-04-03",
      status: "مكتمل"
    },
    {
      id: "mental",
      title: "اختبار القدرات العقلية",
      icon: <Brain size={24} className="text-blue-600" />,
      score: userAbilities.length > 0 ? "85%" : "--",
      desc: "تفوقت في الجوانب المنطقية واللغوية. لديك قدرة عالية على الاستبصار والتحليل.",
      date: "2026-04-03",
      status: "مكتمل"
    },
    {
      id: "personality",
      title: "مقياس السمات الشخصية",
      icon: <User size={24} className="text-indigo-600" />,
      score: userPersonality ? "محلل" : "--",
      desc: "تتمتع بسمات الانفتاح والضمير الحي والاتزان الانفعالي العالي.",
      date: "2026-04-03",
      status: userPersonality ? "مكتمل" : "قيد التنفيذ"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between gap-4 border-b border-slate-100  pb-6">
        <div>
          <h2 className="text-3xl font-bold text-primary-950  mb-2">نتائج الاختيارات والمقاييس</h2>
          <p className="text-slate-700  font-medium">ملخص شامل لأدائك في كافة المقاييس العلمية</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-xl font-bold text-sm hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20 active:scale-95">
          <BarChart2 size={18} />
          <span className="whitespace-nowrap">تحميل التقرير الكامل</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tests.map((test, idx) => (
          <motion.div 
            key={test.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-3xl glass-morphism border border-white/40 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-slate-50  rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {test.icon}
                </div>
                <div className={`px-3 py-1 rounded-full text-[10px] font-bold ${test.status === 'مكتمل' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                  {test.status}
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary-950  mb-2">{test.title}</h3>
              <p className="text-slate-700  text-sm leading-relaxed mb-6 font-medium">
                {test.desc}
              </p>
            </div>
            
            <div className="pt-6 border-t border-indigo-100/10 flex items-center justify-between mt-auto">
              <div>
                <span className="text-xs text-slate-600 font-bold block mb-1">النتيجة:</span>
                <span className="text-lg font-bold text-primary-600">{test.score}</span>
              </div>
              <div className="text-left">
                <span className="text-xs text-slate-600 font-bold block mb-1">التاريخ:</span>
                <div className="flex items-center gap-1 text-primary-950  text-xs font-bold">
                  <Calendar size={12} className="text-primary-600" />
                  {test.date}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-8 rounded-3xl bg-gradient-to-l from-primary-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:row items-center justify-between gap-8">
          <div className="max-w-xl text-right">
            <h4 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <TrendingUp />
              كيف تطورت مهاراتك خلال هذا العام؟
            </h4>
            <p className="text-primary-100 text-lg">
              يمكنك مقارنة نتائجك الحالية مع النتائج السابقة لمتابعة نمو قدراتك الذهنية والمهنية بشكل مستمر.
            </p>
          </div>
          <button className="px-8 py-4 bg-white text-primary-600 font-bold rounded-2xl shadow-xl hover:bg-slate-50 transition-all flex items-center gap-2">
            عرض مسار التطور
            <ArrowRight size={20} className="rotate-180" />
          </button>
        </div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
