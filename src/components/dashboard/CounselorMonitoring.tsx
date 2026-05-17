"use client";

import React, { useState } from 'react';
import { Users, Calendar, TrendingUp, Activity, CheckCircle, Clock, Search, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CounselorMonitoring() {
  const [timeFilter, setTimeFilter] = useState<'today' | 'week' | 'month'>('week');

  const stats = [
    { label: "المستفيدين النشطين", value: "145", icon: <Users size={20} />, color: "bg-blue-500", trend: "+12%" },
    { label: "جلسات هذا الأسبوع", value: "24", icon: <Calendar size={20} />, color: "bg-purple-500", trend: "+5%" },
    { label: "مقاييس مكتملة", value: "89", icon: <CheckCircle size={20} />, color: "bg-green-500", trend: "+18%" },
    { label: "تفاعل التلاميذ", value: "92%", icon: <Activity size={20} />, color: "bg-orange-500", trend: "+2%" },
  ];

  const recentActivities = [
    { id: 1, action: "أكمل مقياس الميول المهنية", student: "أحمد بوعلام", time: "قبل ساعتين", type: "assessment" },
    { id: 2, action: "طلب استشارة جديدة", student: "سارة بن علي", time: "قبل 4 ساعات", type: "request" },
    { id: 3, action: "تم رفع تقرير المتابعة", student: "يانيس بوزيد", time: "أمس", type: "file" },
    { id: 4, action: "أكمل اختبار القدرات", student: "نريمان قاسمي", time: "أمس", type: "assessment" },
  ];

  const pendingTasks = [
    { id: 1, task: "مراجعة تقرير سارة العلي", deadline: "اليوم 14:00", priority: "high" },
    { id: 2, task: "إعداد خطة توجيه أحمد بن محمد", deadline: "غداً", priority: "medium" },
    { id: 3, task: "الرد على استفسار أولياء الأمور", deadline: "غداً", priority: "high" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 font-arabic animate-fade-in space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary-950">لوحة المراقبة والإحصاء</h1>
          <p className="text-slate-700 font-medium mt-1">نظرة عامة على نشاطات تلاميذك ومهامك الإرشادية المنجزة</p>
        </div>
        <div className="flex bg-white/60 p-1 rounded-xl glass-morphism border border-indigo-100/30 w-fit">
           <button onClick={() => setTimeFilter('today')} className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${timeFilter === 'today' ? 'bg-primary-600 text-white shadow-md' : 'text-primary-900 hover:text-primary-600'}`}>اليوم</button>
           <button onClick={() => setTimeFilter('week')} className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${timeFilter === 'week' ? 'bg-primary-600 text-white shadow-md' : 'text-primary-900 hover:text-primary-600'}`}>هذا الأسبوع</button>
           <button onClick={() => setTimeFilter('month')} className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${timeFilter === 'month' ? 'bg-primary-600 text-white shadow-md' : 'text-primary-900 hover:text-primary-600'}`}>هذا الشهر</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-morphism p-6 rounded-3xl border border-white/40 shadow-sm hover:border-primary-200 transition-all group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} text-white rounded-2xl flex items-center justify-center shadow-lg`}>
                {stat.icon}
              </div>
              <span className="text-xs font-bold text-green-600 bg-green-50 border border-green-100 px-2 py-1 rounded-lg">
                {stat.trend}
              </span>
            </div>
            <div className="text-slate-500 text-xs font-bold mb-1">{stat.label}</div>
            <div className="text-3xl font-black text-primary-950">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Chart / Progress Tracking */}
        <div className="lg:col-span-2 glass-morphism rounded-3xl border border-white/40 shadow-sm p-6 md:p-8 flex flex-col">
          <div className="flex items-center justify-between mb-6">
             <h3 className="text-lg font-bold text-primary-950 flex items-center gap-2">
                <TrendingUp size={20} className="text-primary-600" />
                تحليل وتيرة إنجاز الجلسات
             </h3>
             <button className="text-xs text-primary-600 font-bold hover:underline">عرض التقرير الكامل</button>
          </div>
          <div className="flex-1 flex flex-col justify-end min-h-[250px] relative">
             <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8">
               {[100, 75, 50, 25, 0].map(val => (
                 <div key={val} className="flex items-center gap-2 w-full">
                    <span className="text-[10px] text-slate-400 font-bold w-6">{val}</span>
                    <div className="flex-1 border-b border-dashed border-slate-200"></div>
                 </div>
               ))}
             </div>
             
             <div className="flex items-end justify-around h-full pt-8 pb-2 relative z-10">
               {[
                 { day: 'السبت', h1: 40, h2: 30 },
                 { day: 'الأحد', h1: 60, h2: 45 },
                 { day: 'الاثنين', h1: 85, h2: 50 },
                 { day: 'الثلاثاء', h1: 65, h2: 40 },
                 { day: 'الأربعاء', h1: 90, h2: 70 },
                 { day: 'الخميس', h1: 50, h2: 30 },
               ].map((d, i) => (
                 <div key={i} className="flex flex-col items-center gap-4 w-full group">
                    <div className="flex gap-1.5 items-end h-40 w-full justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                       <motion.div initial={{ height: 0 }} animate={{ height: `${d.h1}%` }} transition={{ delay: i*0.1 }} className="w-full max-w-[12px] bg-primary-500 rounded-t-xl"></motion.div>
                       <motion.div initial={{ height: 0 }} animate={{ height: `${d.h2}%` }} transition={{ delay: i*0.1 + 0.1 }} className="w-full max-w-[12px] bg-indigo-300 rounded-t-xl"></motion.div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-500">{d.day}</span>
                 </div>
               ))}
             </div>
          </div>
          <div className="flex justify-center gap-6 mt-4">
             <div className="flex items-center gap-2 text-xs font-bold text-slate-600"><span className="w-3 h-3 rounded bg-primary-500"></span> الجلسات المطلوبة</div>
             <div className="flex items-center gap-2 text-xs font-bold text-slate-600"><span className="w-3 h-3 rounded bg-indigo-300"></span> الجلسات المنجزة</div>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-8 flex flex-col">
          {/* Pending Tasks */}
          <div className="glass-morphism rounded-3xl border border-white/40 shadow-sm p-6 flex-1">
            <h3 className="text-lg font-bold text-primary-950 mb-6 flex items-center gap-2">
               <Clock size={20} className="text-amber-500" />
               مهام عاجلة
            </h3>
            <div className="space-y-4">
               {pendingTasks.map((task) => (
                 <div key={task.id} className="p-4 bg-white/60 border border-slate-100 rounded-2xl hover:border-primary-300 transition-all cursor-pointer group">
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="text-sm font-bold text-slate-800 leading-tight group-hover:text-primary-600 transition-colors">{task.task}</h4>
                       <span className={`w-2 h-2 rounded-full mt-1 ${task.priority === 'high' ? 'bg-red-500' : 'bg-amber-500'}`}></span>
                    </div>
                    <div className="text-[10px] font-bold text-slate-500">{task.deadline}</div>
                 </div>
               ))}
            </div>
            <button className="w-full mt-6 py-2.5 text-xs font-bold text-primary-600 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors">عرض كل المهام</button>
          </div>

          {/* Recent Activity */}
          <div className="glass-morphism rounded-3xl border border-white/40 shadow-sm p-6 flex-1">
             <h3 className="text-lg font-bold text-primary-950 mb-6 flex items-center gap-2">
               <Activity size={20} className="text-indigo-500" />
               نشاطات حديثة
             </h3>
             <div className="space-y-5">
                {recentActivities.map((act) => (
                  <div key={act.id} className="flex gap-3">
                     <div className="relative mt-1">
                        <div className={`w-2 h-2 rounded-full ${act.type === 'assessment' ? 'bg-green-500' : act.type === 'request' ? 'bg-amber-500' : 'bg-blue-500'}`}></div>
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-full bg-slate-200 last:hidden"></div>
                     </div>
                     <div>
                        <div className="text-sm font-bold text-slate-800">{act.action}</div>
                        <div className="text-xs font-medium text-slate-500 mt-0.5">
                           <span className="text-primary-600 font-bold">{act.student}</span> • {act.time}
                        </div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
