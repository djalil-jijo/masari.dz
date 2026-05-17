"use client";

import React, { useState } from 'react';
import { Calendar, Clock, Video, User, Plus, ChevronLeft, ChevronRight, MoreVertical, X } from 'lucide-react';

export default function CounselorSessions() {
  const [isNewSessionModalOpen, setIsNewSessionModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('الكل');
  const sessions = [
    { id: 1, student: "أحمد بوعلام", type: "جلسة توجيه", time: "09:00 - 10:00", status: "قادم", date: "اليوم" },
    { id: 2, student: "سارة بن علي", type: "استشارة نفسية", time: "11:30 - 12:30", status: "قادم", date: "اليوم" },
    { id: 3, student: "الياس منصوري", type: "تحليل نتائج", time: "14:00 - 15:00", status: "تم", date: "أمس" },
    { id: 4, student: "نريمان قاسمي", type: "جلسة توجيه", time: "10:00 - 11:00", status: "تم", date: "أمس" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-arabic animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-primary-950 ">الجلسات والاستشارات</h1>
          <p className="text-slate-700  font-medium">إدارة مواعيدك وجلساتك مع المستفيدين</p>
        </div>
        <button onClick={() => setIsNewSessionModalOpen(true)} className="flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-2xl font-bold shadow-lg shadow-primary-600/30 hover:bg-primary-700 transition-all text-sm hover:scale-105 active:scale-95">
          <Plus size={18} />
          جلسة جديدة
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar Sidebar Mockup */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-morphism p-6 rounded-3xl border border-white/40 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-primary-950 ">أفريل 2026</h3>
              <div className="flex gap-2">
                <button className="p-1.5 hover:bg-slate-50  rounded-lg text-slate-500">
                  <ChevronRight size={18} />
                </button>
                <button className="p-1.5 hover:bg-slate-50  rounded-lg text-slate-500">
                  <ChevronLeft size={18} />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-2 text-center mb-4">
              {['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'].map(day => (
                <span key={day} className="text-[10px] font-bold text-slate-500 uppercase">{day}</span>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2 text-center">
              {Array.from({ length: 30 }).map((_, i) => (
                <button 
                  key={i} 
                  className={`aspect-square flex items-center justify-center text-xs font-bold rounded-xl transition-all ${i + 1 === 7 ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600  hover:bg-slate-50 '}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-morphism p-6 rounded-3xl border border-white/40 shadow-sm">
            <h3 className="font-bold text-primary-950  mb-4">إحصاءات الجلسات</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-indigo-50  rounded-xl">
                <span className="text-xs font-bold text-indigo-700">جلسات اليوم</span>
                <span className="text-lg font-bold text-indigo-700">4</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50  rounded-xl">
                <span className="text-xs font-bold text-green-700">جلسات مكتملة</span>
                <span className="text-lg font-bold text-green-700">12</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sessions List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex glass-morphism p-1 rounded-2xl shadow-sm border border-indigo-100/20 w-fit">
            <button onClick={() => setActiveTab('الكل')} className={`px-6 py-2 text-xs font-bold rounded-xl transition-all ${activeTab === 'الكل' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-indigo-600'}`}>الكل</button>
            <button onClick={() => setActiveTab('القادمة')} className={`px-6 py-2 text-xs font-bold rounded-xl transition-all ${activeTab === 'القادمة' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-indigo-600'}`}>القادمة</button>
            <button onClick={() => setActiveTab('المكتملة')} className={`px-6 py-2 text-xs font-bold rounded-xl transition-all ${activeTab === 'المكتملة' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-indigo-600'}`}>المكتملة</button>
          </div>

          <div className="space-y-4">
            {sessions.map((session) => (
              <div key={session.id} className="glass-morphism p-5 rounded-3xl border border-white/40 shadow-sm flex items-center gap-6 group hover:border-primary-200  transition-all">
                <div className="w-14 h-14 bg-slate-50  rounded-2xl flex flex-col items-center justify-center border border-slate-100 ">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">{session.date === 'اليوم' ? 'الثلاثاء' : 'الاثنين'}</span>
                  <span className="text-lg font-bold text-slate-800 ">{session.date === 'اليوم' ? '07' : '06'}</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-bold text-primary-950 ">{session.student}</h4>
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
                  <button onClick={() => alert('جاري فتح غرفة الاتصال المرئي...')} className="p-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition-all">
                    <Video size={18} />
                  </button>
                  <button onClick={() => alert('قائمة الخيارات الإضافية')} className="p-3 bg-white border border-slate-100 rounded-xl hover:bg-slate-50 transition-all text-slate-500">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isNewSessionModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-morphism w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-white/40 p-6 text-right">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-900">جدولة جلسة جديدة</h3>
                <button onClick={() => setIsNewSessionModalOpen(false)} className="text-slate-500 hover:text-red-500">
                  <X size={20} />
                </button>
             </div>
             <div className="space-y-4 font-arabic">
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">التلميذ أو المستفيد</label>
                   <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-primary-500 transition-all font-medium text-sm">
                      <option>اختر التلميذ...</option>
                      <option>أحمد بن محمد</option>
                      <option>سارة العلي</option>
                   </select>
                </div>
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">نوع الجلسة</label>
                   <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-primary-500 transition-all font-medium text-sm">
                      <option>جلسة توجيه مهني</option>
                      <option>استشارة نفسية</option>
                      <option>تحليل نتائج المقياس</option>
                   </select>
                </div>
                <div className="flex gap-4">
                   <div className="flex-1">
                      <label className="block text-sm font-bold text-slate-700 mb-2">التاريخ</label>
                      <input type="date" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-primary-500 transition-all font-medium text-sm" />
                   </div>
                   <div className="flex-1">
                      <label className="block text-sm font-bold text-slate-700 mb-2">الوقت</label>
                      <input type="time" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-primary-500 transition-all font-medium text-sm" />
                   </div>
                </div>
                <div className="pt-4 flex items-center gap-3">
                   <button 
                     onClick={() => {
                        setIsNewSessionModalOpen(false);
                        alert('تم جدولة الجلسة بنجاح');
                     }}
                     className="flex-1 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20"
                   >
                     تأكيد الجدولة
                   </button>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
