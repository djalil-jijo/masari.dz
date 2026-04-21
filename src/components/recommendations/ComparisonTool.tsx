"use client";

import React, { useState } from 'react';
import { majors, Major, calculateCompatibility } from '@/lib/data';
import { GitCompare, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ComparisonToolProps {
  userHolland: string[];
  userAbilities: string[];
}

export default function ComparisonTool({ userHolland, userAbilities }: ComparisonToolProps) {
  const [selectedMajors, setSelectedMajors] = useState<string[]>([]);

  const toggleMajor = (id: string) => {
    if (selectedMajors.includes(id)) {
      setSelectedMajors(selectedMajors.filter(m => m !== id));
    } else if (selectedMajors.length < 2) {
      setSelectedMajors([...selectedMajors, id]);
    }
  };

  const majorData = selectedMajors.map(id => {
    const major = majors.find(m => m.id === id)!;
    return {
      ...major,
      compatibility: calculateCompatibility(userHolland, userAbilities, major)
    };
  });

  return (
    <div className="max-w-6xl mx-auto p-6 font-arabic animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-primary-950 dark:text-white mb-4">أداة مقارنة التخصصات الجامعية</h2>
        <p className="text-slate-800 dark:text-slate-200 font-bold text-lg">اختر تخصصين للمقارنة بينهما بناءً على توافقهما مع شخصيتك وقدراتك</p>
      </div>

      {/* Major Selection Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {majors.map((major) => (
          <button
            key={major.id}
            onClick={() => toggleMajor(major.id)}
            disabled={!selectedMajors.includes(major.id) && selectedMajors.length >= 2}
            className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-2
              ${selectedMajors.includes(major.id) 
                ? 'border-primary-600 bg-primary-500/10 dark:bg-primary-900/40 text-primary-600 shadow-lg shadow-primary-600/10' 
                : 'glass-morphism border-white/20 text-slate-700 hover:text-primary-600 hover:border-primary-200'
              } disabled:opacity-30 disabled:cursor-not-allowed`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedMajors.includes(major.id) ? 'bg-primary-600' : 'bg-white/40 border border-white/20'}`}>
              {selectedMajors.includes(major.id) && <CheckCircle2 size={16} className="text-white" />}
            </div>
            <span className="text-xs font-bold text-center leading-tight dark:text-white">{major.name.split(' (')[0]}</span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selectedMajors.length === 2 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {majorData.map((major, idx) => (
              <div key={major.id} className="glass-morphism rounded-3xl p-8 border border-white/40 shadow-xl relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-5 rounded-full -mr-16 -mt-16 bg-primary-600`}></div>
                
                <div className="flex justify-between items-start mb-8">
                   <h3 className="text-2xl font-bold text-primary-950 dark:text-white max-w-[200px]">{major.name}</h3>
                   <div className="text-right">
                      <div className="text-sm font-bold text-slate-700 dark:text-slate-400">توافقك</div>
                      <div className="text-3xl font-black text-primary-600">{major.compatibility}%</div>
                   </div>
                </div>

                <div className="space-y-8">
                  <section>
                    <h4 className="text-sm font-bold text-slate-600 dark:text-slate-300 mb-3 uppercase tracking-wider italic">الوصف المختصر</h4>
                    <p className="text-slate-800 dark:text-slate-400 text-sm font-bold leading-relaxed">{major.description}</p>
                  </section>

                  <section>
                    <h4 className="text-sm font-bold text-slate-600 dark:text-slate-300 mb-3">متطلبات الميول (Holland)</h4>
                    <div className="flex flex-wrap gap-2">
                       {major.hollandTypes.map(h => (
                         <span key={h} className={`px-3 py-1 rounded-full text-xs font-bold glass-morphism border border-indigo-100/20 text-slate-700 dark:text-slate-300`}>
                           {h === 'R' && 'واقعي'}
                           {h === 'I' && 'بحثي'}
                           {h === 'A' && 'فني'}
                           {h === 'S' && 'اجتماعي'}
                           {h === 'E' && 'مبادر'}
                           {h === 'C' && 'تقليدي'}
                         </span>
                       ))}
                    </div>
                  </section>

                  <section>
                     <h4 className="text-sm font-bold text-slate-600 dark:text-slate-300 mb-3">القدرات الذهنية المطلوبة</h4>
                     <ul className="space-y-2">
                        {major.requiredAbilities.map(a => (
                          <li key={a} className="flex items-center gap-2 text-sm text-slate-800 dark:text-slate-400 font-bold">
                             <CheckCircle2 size={14} className="text-green-600" />
                             {a === 'L' && 'قدرة لغوية متميزة'}
                             {a === 'M' && 'قدرة منطقية رياضية'}
                             {a === 'S' && 'قدرة مكانية عالية'}
                             {a === 'Mem' && 'قوة ذاكرة وتركيز'}
                          </li>
                        ))}
                     </ul>
                  </section>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {selectedMajors.length < 2 && (
        <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl text-slate-400">
           <GitCompare size={48} className="mb-4 opacity-30" />
           <p className="font-bold">يرجى اختيار {2 - selectedMajors.length} تخصص{2 - selectedMajors.length > 1 ? 'ات' : ''} إضافي{2 - selectedMajors.length > 1 ? 'ة' : ''} للمقارنة</p>
        </div>
      )}
    </div>
  );
}
