"use client";

import React from 'react';
import { Settings, Bell, Shield, Eye, Globe, Moon, HelpCircle } from 'lucide-react';

export default function CounselorSettings() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-arabic animate-fade-in">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-primary-950 dark:text-white">الإعدادات</h1>
        <p className="text-slate-700 dark:text-slate-300 font-medium">تخصيص لوحة التحكم وتفضيلات النظام</p>
      </div>

      <div className="space-y-6">
        {/* Notification Settings */}
        <div className="glass-morphism rounded-3xl border border-white/40 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-indigo-100/10 flex items-center gap-3">
             <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600">
                <Bell size={20} />
             </div>
             <h3 className="font-bold text-primary-950 dark:text-white">إعدادات الإشعارات</h3>
          </div>
          <div className="p-6 space-y-4">
             {[
               { label: "إشعارات البريد الإلكتروني", desc: "استلام تقارير دورية وتنبيهات الجلسات", active: true },
               { label: "تنبيهات النظام", desc: "إشعارات فورية عند تسجيل طالب جديد أو إتمام اختبار", active: true },
               { label: "إشعارات الرسائل", desc: "تنبيه عند استلام رسالة جديدة من المستفيدين", active: false },
             ].map((item, i) => (
               <div key={i} className="flex items-center justify-between py-2">
                  <div>
                    <div className="text-sm font-bold text-primary-950 dark:text-slate-300">{item.label}</div>
                    <div className="text-[10px] text-slate-600 font-bold">{item.desc}</div>
                  </div>
                 <button className={`w-12 h-6 rounded-full transition-all relative ${item.active ? 'bg-indigo-600' : 'bg-slate-200 dark:bg-slate-700'}`}>
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${item.active ? 'left-1' : 'left-7'}`}></div>
                 </button>
               </div>
             ))}
          </div>
        </div>

        {/* Display Settings */}
        <div className="glass-morphism rounded-3xl border border-white/40 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-indigo-100/10 flex items-center gap-3">
             <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center text-purple-600">
                <Eye size={20} />
             </div>
             <h3 className="font-bold text-primary-950 dark:text-white">المظهر والعرض</h3>
          </div>
          <div className="p-6 space-y-4">
             <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3 font-bold text-slate-700 dark:text-slate-300">
                   <Moon size={18} className="text-slate-400" />
                   <span className="text-sm">الوضع الليلي</span>
                </div>
                <button className="w-12 h-6 rounded-full bg-indigo-600 relative">
                   <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white"></div>
                </button>
             </div>
             <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3 font-bold text-slate-700 dark:text-slate-300">
                   <Globe size={18} className="text-slate-400" />
                   <span className="text-sm">لغة النظام</span>
                </div>
                <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-xs font-bold p-2 outline-none">
                   <option>العربية (Arabic)</option>
                   <option>English</option>
                   <option>Français</option>
                </select>
             </div>
          </div>
        </div>

        {/* Support */}
        <div className="bg-indigo-600 rounded-3xl p-8 text-white flex items-center justify-between shadow-lg shadow-indigo-600/30">
          <div className="space-y-2">
             <h3 className="text-xl font-bold">هل تحتاج إلى مساعدة؟</h3>
             <p className="text-indigo-100 text-sm max-w-sm">فريق الدعم الفني متاح دائماً للإجابة على استفساراتك وحل المشكلات التي قد تواجهك.</p>
             <button className="mt-4 px-6 py-2.5 bg-white text-indigo-600 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-all flex items-center gap-2">
                <HelpCircle size={18} />
                تواصل مع الدعم
             </button>
          </div>
          <div className="hidden md:block opacity-20 transform translate-x-4">
             <Settings size={120} />
          </div>
        </div>
      </div>
    </div>
  );
}
