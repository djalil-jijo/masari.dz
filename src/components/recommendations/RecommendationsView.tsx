"use client";

import React from 'react';
import { majors, calculateCompatibility, Major } from '@/lib/data';
import { Star, TrendingUp, Briefcase, GraduationCap, ArrowLeft, GitCompare, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { generatePsychologicalProfile } from '@/lib/psychological-profiler';

interface RecommendationsViewProps {
  userHolland: string[]; // e.g. ["I", "S", "R"]
  userAbilities: string[]; // e.g. ["L", "M", "Mem"]
  userPersonality?: {
    extroversion: number;
    control: number;
    openness: number;
    stability: number;
  };
}

export default function RecommendationsView({ userHolland, userAbilities, userPersonality }: RecommendationsViewProps) {
  const recommendedMajors = majors
    .map(major => ({
      ...major,
      compatibility: calculateCompatibility(userHolland, userAbilities, major, userPersonality)
    }))
    .sort((a, b) => b.compatibility - a.compatibility);

  const psychProfile = userPersonality ? generatePsychologicalProfile({
    holland: userHolland,
    abilities: {}, // We can expand this later
    personality: userPersonality
  }) : null;

  return (
    <div className="max-w-5xl mx-auto p-6 font-arabic animate-fade-in">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold text-primary-950  mb-2">التوصيات الأكاديمية المقترحة</h2>
          <p className="text-slate-700  font-medium">بناءً على نتائجك العلمية، هذه هي التخصصات الأكثر توافقاً معك</p>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="px-4 py-2 bg-primary-50  text-primary-600 rounded-xl font-bold border border-primary-100">
            نمطك: {userHolland.join(" - ")}
          </div>
        </div>
      </div>
      
      {psychProfile && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12 p-8 bg-gradient-to-l from-indigo-600 to-purple-600 rounded-3xl text-white shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Quote className="text-indigo-200 fill-indigo-200" size={32} />
              <h3 className="text-xl font-bold text-white">التحليل السيكولوجي المقترح</h3>
            </div>
            <p className="text-indigo-50 leading-relaxed text-lg whitespace-pre-wrap">
              {psychProfile}
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recommendedMajors.map((major, index) => (
          <motion.div 
            key={major.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative glass-morphism rounded-3xl p-8 border ${index === 0 ? 'border-primary-500 shadow-xl shadow-primary-500/10' : 'border-white/40 shadow-sm'} hover:shadow-lg transition-all group`}
          >
            {index === 0 && (
              <div className="absolute -top-4 -right-4 bg-primary-600 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                <Star size={12} fill="white" />
                الأعلى توافقاً
              </div>
            )}
            
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-slate-50  rounded-xl flex items-center justify-center text-primary-600">
                <GraduationCap size={24} />
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider italic">نسبة التوافق</span>
                <div className="text-2xl font-bold text-primary-600">{major.compatibility}%</div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-primary-950  mb-3 group-hover:text-primary-600 transition-colors">
              {major.name}
            </h3>
            <p className="text-sm text-slate-700  font-bold leading-relaxed mb-6">
              {major.description}
            </p>

            <div className="space-y-4 pt-6 border-t border-slate-50 ">
              <div>
                <h4 className="text-xs font-bold text-slate-500 mb-3 flex items-center gap-2">
                  <Briefcase size={14} />
                  المسارات المهنية المرتبطة:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {major.careers.map((career, i) => (
                    <span key={i} className="px-3 py-1 glass-morphism border border-indigo-100/20 text-slate-700  text-[10px] font-bold rounded-lg transition-colors">
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full mt-4 flex items-center justify-center gap-2 text-sm font-bold text-primary-950  py-3 glass-morphism border border-indigo-100/10 rounded-xl hover:bg-white/60  transition-all">
                تفاصيل المسار
                <ArrowLeft size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Action */}
      <div className="mt-16 bg-slate-900  rounded-3xl p-10 text-white  flex flex-col md:row items-center justify-between gap-8 overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-3">هل ترغب في مقارنة خياراتك؟</h2>
          <p className="text-slate-500 ">يمكنك مقارنة تخصصين جنباً إلى جنب لمعرفة أيهما يناسب سماتك الشخصية أكثر.</p>
        </div>
        <button className="relative z-10 flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/30 shrink-0">
          <GitCompare size={20} />
          أداة المقارنة الذكية
        </button>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
