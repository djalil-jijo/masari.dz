"use client";

import React from 'react';
import { BarChart3, PieChart, Activity, TrendingUp, Download, Share2, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResultAnalysis() {
  const [isShareModalOpen, setIsShareModalOpen] = React.useState(false);
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 ">تحليل وتفريغ النتائج</h2>
          <p className="text-slate-500  text-sm">إحصائيات متقدمة حول الميول المهنية والقدرات العقلية للتلاميذ</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => alert('تم بدء التصدير')} className="flex items-center gap-2 px-4 py-2.5 bg-primary-600 text-white rounded-xl font-bold text-xs shadow-lg shadow-primary-600/20 hover:bg-primary-700 transition-all">
            <Download size={16} />
            تصدير البيانات (Excel)
          </button>
          <button onClick={() => setIsShareModalOpen(true)} className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-100 rounded-xl font-bold text-xs shadow-sm hover:shadow-md transition-all text-slate-600">
            <Share2 size={16} />
            مشاركة التقرير
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           {/* General Trends */}
           <div className="glass-morphism p-8 rounded-3xl border border-white/40 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-8 relative z-10">
                 <h3 className="font-bold text-slate-900  flex items-center gap-2">
                    <TrendingUp className="text-primary-600" size={18} />
                    الميول المهنية الأكثر شيوعاً
                 </h3>
                 <div className="flex items-center gap-2 bg-slate-50  px-3 py-1.5 rounded-lg border border-slate-100  text-[10px] font-bold text-slate-500">
                   <Filter size={12} />
                   صف 3 ثانوي
                 </div>
              </div>
              
              <div className="space-y-6 relative z-10">
                 {[
                   { label: "الواقعي (R)", value: 25, color: "bg-orange-500", trend: "+5%" },
                   { label: "البحثي (I)", value: 18, color: "bg-blue-500", trend: "-2%" },
                   { label: "الفني (A)", value: 15, color: "bg-pink-500", trend: "+8%" },
                   { label: "الاجتماعي (S)", value: 22, color: "bg-green-500", trend: "+3%" },
                 ].map((item, i) => (
                   <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center text-xs font-bold">
                         <span className="text-slate-700 ">{item.label}</span>
                         <div className="flex items-center gap-2">
                           <span className={item.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}>{item.trend}</span>
                           <span className="text-slate-500">{item.value}%</span>
                         </div>
                      </div>
                      <div className="h-2.5 w-full bg-slate-50  rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: `${item.value}%` }}
                           transition={{ duration: 1, delay: i * 0.1 }}
                           className={`h-full ${item.color} rounded-full`}
                         />
                      </div>
                   </div>
                 ))}
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/5 rounded-full blur-[60px]"></div>
           </div>

           {/* Comparative Statistics */}
           <div className="glass-morphism p-8 rounded-3xl border border-white/40 shadow-sm">
             <div className="flex items-center justify-between mb-8">
                 <h3 className="font-bold text-slate-900  flex items-center gap-2">
                    <BarChart3 className="text-indigo-600" size={18} />
                    نضوج التفكير المهني حسب المرحلة
                 </h3>
                 <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">معدل %</span>
             </div>
             <div className="h-48 flex items-end justify-between px-4 pb-4 gap-8">
                {[
                  { label: "1 ثانوي", value: 45, color: "bg-indigo-300" },
                  { label: "2 ثانوي", value: 65, color: "bg-indigo-500" },
                  { label: "3 ثانوي", value: 88, color: "bg-primary-600" },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-4">
                     <div className="text-xs font-bold text-slate-500">{bar.value}%</div>
                     <motion.div 
                       initial={{ height: 0 }}
                       animate={{ height: `${bar.value}%` }}
                       className={`w-full max-w-[40px] ${bar.color} rounded-t-xl`}
                     />
                     <div className="text-xs font-bold text-slate-700  whitespace-nowrap">{bar.label}</div>
                  </div>
                ))}
             </div>
           </div>
        </div>

        <div className="lg:col-span-1 space-y-8">
           {/* Achievement Summary */}
           <div className="bg-gradient-to-br from-indigo-600 to-primary-700 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
             <div className="relative z-10">
               <Activity size={32} className="mb-6 opacity-80" />
               <h4 className="text-xl font-bold mb-2">إجمالي الاختبارات</h4>
               <div className="text-4xl font-bold mb-6">3,854</div>
               <div className="py-3 px-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 text-xs font-medium leading-relaxed">
                 هناك زيادة بنسبة 12% في عدد المقاييس المنفذة مقارنة بالشهر السابق.
               </div>
             </div>
             <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
           </div>

           {/* Distribution Pie chart mockup */}
           <div className="glass-morphism p-8 rounded-3xl border border-white/40 shadow-sm text-center">
              <h3 className="font-bold text-slate-900  mb-8">التوزيع حسب القطاعات</h3>
              <div className="relative w-40 h-40 mx-auto mb-8">
                <div className="w-full h-full rounded-full border-[12px] border-slate-50  flex items-center justify-center relative">
                   <div className="absolute inset-0 rounded-full border-[12px] border-primary-600 border-t-transparent border-l-transparent rotate-45"></div>
                   <div className="absolute inset-0 rounded-full border-[12px] border-indigo-400 border-b-transparent border-r-transparent -rotate-12 opacity-50"></div>
                   <div className="text-xs font-bold text-slate-500">إحصاء كلي</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs font-bold">
                 <div className="flex items-center gap-2">
                   <div className="w-2.5 h-2.5 rounded bg-primary-600"></div>
                   <span className="text-slate-600 ">علمي (62%)</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-2.5 h-2.5 rounded bg-indigo-300"></div>
                   <span className="text-slate-600 ">أدبي (38%)</span>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {isShareModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-morphism w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-white/40 p-6 text-right">
             <h3 className="text-lg font-bold text-slate-900 mb-4">مشاركة التقرير الإحصائي</h3>
             <p className="text-sm text-slate-600 mb-6 font-medium">اختر صلاحيات العرض للأشخاص الذين تشارك معهم التقرير.</p>
             <div className="space-y-3 mb-6">
                 <button className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-700 font-bold hover:border-primary-300 transition-all text-sm flex items-center justify-between">
                    مع إدارة المدرسة الموثقة
                 </button>
                 <button className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-700 font-bold hover:border-primary-300 transition-all text-sm flex items-center justify-between">
                    عبر رابط عام (قراءة فقط)
                 </button>
             </div>
             <div className="flex items-center gap-3">
                <button 
                  onClick={() => { setIsShareModalOpen(false); alert('تم توليد رابط المشاركة'); }}
                  className="flex-1 py-2.5 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-sm text-sm"
                >
                  نسخ الرابط
                </button>
                <button 
                  onClick={() => setIsShareModalOpen(false)}
                  className="px-4 py-2.5 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-colors text-sm"
                >
                  إلغاء
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
