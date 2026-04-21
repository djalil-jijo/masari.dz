"use client";

import React from 'react';
import { Calendar, Clock, Video, User, Plus, ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react';

export default function CounselorSessions() {
  const sessions = [
    { id: 1, student: "أحمد بن محمد", type: "جلسة توجيه", time: "09:00 - 10:00", status: "قادم", date: "اليوم" },
    { id: 2, student: "سارة العلي", type: "استشارة نفسية", time: "11:30 - 12:30", status: "قادم", date: "اليوم" },
    { id: 3, student: "خالد العمودي", type: "تحليل نتائج", time: "14:00 - 15:00", status: "تم", date: "أمس" },
    { id: 4, student: "نورة القحطاني", type: "جلسة توجيه", time: "10:00 - 11:00", status: "تم", date: "أمس" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-arabic animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-primary-950 dark:text-white">الجلسات والاستشارات</h1>
          <p className="text-slate-700 dark:text-slate-300 font-medium">إدارة مواعيدك وجلساتك مع المستفيدين</p>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-2xl font-bold shadow-lg shadow-primary-600/30 hover:bg-primary-700 transition-all text-sm hover:scale-105 active:scale-95">
          <Plus size={18} />
          جلسة جديدة
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar Sidebar Mockup */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-morphism p-6 rounded-3xl border border-white/40 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-primary-950 dark:text-white">أفريل 2026</h3>
              <div className="flex gap-2">
                <button className="p-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-slate-400">
                  <ChevronRight size={18} />
                </button>
                <button className="p-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-slate-400">
                  <ChevronLeft size={18} />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-2 text-center mb-4">
              {['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'].map(day => (
                <span key={day} className="text-[10px] font-bold text-slate-400 uppercase">{day}</span>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2 text-center">
              {Array.from({ length: 30 }).map((_, i) => (
                <button 
                  key={i} 
                  className={`aspect-square flex items-center justify-center text-xs font-bold rounded-xl transition-all ${i + 1 === 7 ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-morphism p-6 rounded-3xl border border-white/40 shadow-sm">
            <h3 className="font-bold text-primary-950 dark:text-white mb-4">إحصاءات الجلسات</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                <span className="text-xs font-bold text-indigo-700">جلسات اليوم</span>
                <span className="text-lg font-bold text-indigo-700">4</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <span className="text-xs font-bold text-green-700">جلسات مكتملة</span>
                <span className="text-lg font-bold text-green-700">12</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sessions List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex glass-morphism p-1 rounded-2xl shadow-sm border border-indigo-100/20 w-fit">
            <button className="px-6 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold rounded-xl transition-all">الكل</button>
            <button className="px-6 py-2 text-slate-500 text-xs font-bold hover:text-indigo-600">القادمة</button>
            <button className="px-6 py-2 text-slate-500 text-xs font-bold hover:text-indigo-600">المكتملة</button>
          </div>

          <div className="space-y-4">
            {sessions.map((session) => (
              <div key={session.id} className="glass-morphism p-5 rounded-3xl border border-white/40 shadow-sm flex items-center gap-6 group hover:border-primary-200 dark:hover:border-indigo-900/50 transition-all">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex flex-col items-center justify-center border border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">{session.date === 'اليوم' ? 'الثلاثاء' : 'الاثنين'}</span>
                  <span className="text-lg font-bold text-slate-800 dark:text-white">{session.date === 'اليوم' ? '07' : '06'}</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-bold text-primary-950 dark:text-white">{session.student}</h4>
                    <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold ${session.status === 'قادم' ? 'bg-indigo-50 text-indigo-600' : 'bg-green-50 text-green-600'}`}>
                      {session.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-700 font-bold">
                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-primary-600" /> {session.time}</span>
                    <span className="flex items-center gap-1.5"><Video size={14} /> عبر الإنترنت</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition-all">
                    <Video size={18} />
                  </button>
                  <button className="p-3 bg-white dark:bg-slate-800 text-slate-400 border border-slate-100 dark:border-slate-700 rounded-xl hover:bg-slate-50 transition-all">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
