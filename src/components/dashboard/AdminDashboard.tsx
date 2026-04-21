"use client";

import React from 'react';
import { Users, BookOpen, TrendingUp, BarChart3, PieChart, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const stats = [
    { label: "إجمالي الطلاب", value: "1,240", icon: <Users size={20} />, color: "bg-blue-500", trend: "+12%" },
    { label: "الاختبارات المنفذة", value: "3,850", icon: <BookOpen size={20} />, color: "bg-purple-500", trend: "+8%" },
    { label: "دقة التوجيه", value: "94%", icon: <Activity size={20} />, color: "bg-green-500", trend: "+4%" },
    { label: "الميول المهنية", value: "واقعية (R)", icon: <TrendingUp size={20} />, color: "bg-orange-500", trend: "نمط غالب" },
  ];

  const recentAssessments = [
    { name: "أحمد بن محمد", test: "هولاند للميول", score: "R-I-C", date: "منذ ساعتين" },
    { name: "سارة العلي", test: "القدرات العقلية", score: "85%", date: "منذ 3 ساعات" },
    { name: "خالد العمودي", test: "هولاند للميول", score: "S-A-E", date: "منذ 5 ساعات" },
    { name: "نورة القحطاني", test: "القدرات العقلية", score: "92%", date: "أمس" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-arabic animate-fade-in">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-primary-950 dark:text-white">لوحة المراقبة والإحصاء</h1>
        <div className="flex bg-white/40 dark:bg-slate-900/40 p-1 rounded-xl glass-morphism">
           <button className="px-4 py-2 bg-primary-600 text-white text-sm font-bold rounded-lg shadow-lg shadow-primary-600/20">اليوم</button>
           <button className="px-4 py-2 text-primary-900 dark:text-slate-400 text-sm font-bold hover:text-primary-600 transition-colors">هذا الأسبوع</button>
           <button className="px-4 py-2 text-primary-900 dark:text-slate-400 text-sm font-bold hover:text-primary-600 transition-colors">هذا الشهر</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-morphism p-6 rounded-3xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 ${stat.color} text-white rounded-xl flex items-center justify-center`}>
                {stat.icon}
              </div>
              <span className="text-xs font-bold text-green-500 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-lg">
                {stat.trend}
              </span>
            </div>
            <div className="text-slate-700 text-xs font-bold mb-1">{stat.label}</div>
            <div className="text-2xl font-black text-primary-950 dark:text-white">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Area Mockup */}
        <div className="lg:col-span-2 glass-morphism rounded-3xl p-8">
          <div className="flex items-center justify-between mb-8">
             <h3 className="text-lg font-bold text-primary-950 dark:text-white flex items-center gap-2">
                <PieChart size={18} className="text-primary-600" />
                توزيع الميول المهنية للطلاب
             </h3>
             <BarChart3 size={18} className="text-slate-400" />
          </div>
          <div className="h-64 flex items-end justify-between gap-4 px-4 pb-4">
             <div className="flex-1 space-y-4">
                <div className="flex justify-between text-xs font-bold text-slate-400 px-1">
                  <span>R</span>
                  <span>25%</span>
                </div>
                <div className="h-40 bg-orange-500 rounded-2xl animate-pulse"></div>
             </div>
             <div className="flex-1 space-y-4">
                <div className="flex justify-between text-xs font-bold text-slate-400 px-1">
                  <span>I</span>
                  <span>18%</span>
                </div>
                <div className="h-32 bg-blue-500 rounded-2xl animate-pulse"></div>
             </div>
             <div className="flex-1 space-y-4">
                <div className="flex justify-between text-xs font-bold text-slate-400 px-1">
                  <span>A</span>
                  <span>15%</span>
                </div>
                <div className="h-24 bg-pink-500 rounded-2xl animate-pulse"></div>
             </div>
             <div className="flex-1 space-y-4">
                <div className="flex justify-between text-xs font-bold text-slate-400 px-1">
                  <span>S</span>
                  <span>22%</span>
                </div>
                <div className="h-36 bg-green-500 rounded-2xl animate-pulse"></div>
             </div>
             <div className="flex-1 space-y-4">
                <div className="flex justify-between text-xs font-bold text-slate-400 px-1">
                  <span>E</span>
                  <span>12%</span>
                </div>
                <div className="h-20 bg-red-500 rounded-2xl animate-pulse"></div>
             </div>
             <div className="flex-1 space-y-4">
                <div className="flex justify-between text-xs font-bold text-slate-400 px-1">
                  <span>C</span>
                  <span>8%</span>
                </div>
                <div className="h-16 bg-purple-500 rounded-2xl animate-pulse"></div>
             </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-morphism rounded-3xl p-8">
          <h3 className="text-lg font-bold text-primary-950 dark:text-white mb-6">نشاطات أجريت مؤخراً</h3>
          <div className="space-y-6">
             {recentAssessments.map((item, i) => (
               <div key={i} className="flex items-center gap-4 border-b border-slate-50 dark:border-slate-800 pb-4 last:border-0 last:pb-0">
                  <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center font-bold text-primary-600">
                    {item.name[0]}
                  </div>
                  <div className="flex-1">
                     <div className="text-sm font-bold text-primary-950 dark:text-white">{item.name}</div>
                     <div className="text-[10px] text-slate-600 font-bold">{item.test} - <span className="text-primary-500 font-bold">{item.score}</span></div>
                  </div>
                  <div className="text-[10px] text-slate-400 whitespace-nowrap">{item.date}</div>
               </div>
             ))}
          </div>
          <button className="w-full mt-8 py-3 text-sm font-bold text-primary-600 bg-primary-50 dark:bg-primary-900/20 rounded-xl hover:bg-primary-100 transition-all">
             عرض كافة البيانات
          </button>
        </div>
      </div>
    </div>
  );
}
