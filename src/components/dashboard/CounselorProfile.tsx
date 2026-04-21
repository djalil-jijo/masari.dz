"use client";

import React from 'react';
import { User, Mail, Shield, Camera, Edit2 } from 'lucide-react';

export default function CounselorProfile() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-arabic animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-950 dark:text-white">الملف الشخصي</h1>
        <p className="text-slate-700 dark:text-slate-300 font-medium">إدارة معلوماتك الشخصية وإعدادات الحساب</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="md:col-span-1 space-y-6">
          <div className="glass-morphism p-8 rounded-3xl border border-white/40 shadow-sm text-center">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="w-full h-full bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 text-4xl font-bold">
                م
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors">
                <Camera size={18} />
              </button>
            </div>
            <h2 className="text-xl font-bold text-primary-950 dark:text-white mb-1">المستشار التربوي</h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold mb-6">مستشار مهني ونفسي</p>
            <div className="flex justify-center gap-2">
              <span className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 text-[10px] font-bold rounded-full">نشط الآن</span>
            </div>
          </div>

          <div className="glass-morphism p-6 rounded-3xl border border-white/40 shadow-sm">
            <h3 className="font-bold text-primary-950 dark:text-white mb-4 flex items-center gap-2">
              <Shield size={18} className="text-primary-600" />
              الأمان والخصوصية
            </h3>
            <div className="space-y-4">
              <button className="w-full text-right text-sm text-slate-700 dark:text-slate-400 hover:text-primary-600 font-bold transition-colors">تغيير كلمة المرور</button>
              <button className="w-full text-right text-sm text-slate-700 dark:text-slate-400 hover:text-primary-600 font-bold transition-colors">تفعيل المصادقة الثنائية</button>
            </div>
          </div>
        </div>

        {/* Detailed Info */}
        <div className="md:col-span-2 space-y-6">
          <div className="glass-morphism p-8 rounded-3xl border border-white/40 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-primary-950 dark:text-white">المعلومات الشخصية</h3>
              <button className="flex items-center gap-2 text-sm text-primary-600 font-bold hover:underline">
                <Edit2 size={16} />
                تعديل
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase">الاسم الكامل</label>
                <div className="p-3 glass-morphism border border-indigo-100/10 rounded-xl text-primary-950 dark:text-white font-bold">المستشار التربوي</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase">البريد الإلكتروني</label>
                <div className="p-3 glass-morphism border border-indigo-100/10 rounded-xl text-primary-950 dark:text-white font-bold text-left">admin@masari.com</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase">رقم الهاتف</label>
                <div className="p-3 glass-morphism border border-indigo-100/10 rounded-xl text-primary-950 dark:text-white font-bold text-left">+213 5XX XX XX XX</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase">التخصص</label>
                <div className="p-3 glass-morphism border border-indigo-100/10 rounded-xl text-primary-950 dark:text-white font-bold">إرشاد مهني ونفسي</div>
              </div>
            </div>

            <div className="mt-8 space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase">نبذة تعريفية</label>
              <div className="p-4 glass-morphism border border-indigo-100/10 rounded-xl text-primary-950 dark:text-white leading-relaxed font-medium">
                مستشار متخصص في التوجيه الأكاديمي والمهني، بخبرة تزيد عن 10 سنوات في مساعدة الطلاب على اكتشاف شغفهم ورسم مساراتهم المستقبلية بناءً على المعايير العلمية.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
