"use client";

import React, { useState } from 'react';
import { User, Mail, Shield, Camera, Edit2, X } from 'lucide-react';

export default function CounselorProfile() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  return (
    <div className="max-w-4xl mx-auto p-6 font-arabic animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-950 ">الملف الشخصي</h1>
        <p className="text-slate-700  font-medium">إدارة معلوماتك الشخصية وإعدادات الحساب</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="md:col-span-1 space-y-6">
          <div className="glass-morphism p-8 rounded-3xl border border-white/40 shadow-sm text-center">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="w-full h-full bg-indigo-100  rounded-full flex items-center justify-center text-indigo-600 text-4xl font-bold">
                م
              </div>
              <button onClick={() => alert('إضافة صورة شخصية قيد التطوير')} className="absolute bottom-0 right-0 p-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors">
                <Camera size={18} />
              </button>
            </div>
            <h2 className="text-xl font-bold text-primary-950  mb-1">المستشار التربوي</h2>
            <p className="text-sm text-slate-700  font-bold mb-6">مستشار مهني ونفسي</p>
            <div className="flex justify-center gap-2">
              <span className="px-3 py-1 bg-green-50  text-green-600 text-[10px] font-bold rounded-full">نشط الآن</span>
            </div>
          </div>

          <div className="glass-morphism p-6 rounded-3xl border border-white/40 shadow-sm">
            <h3 className="font-bold text-primary-950  mb-4 flex items-center gap-2">
              <Shield size={18} className="text-primary-600" />
              الأمان والخصوصية
            </h3>
            <div className="space-y-4">
              <button onClick={() => alert('صفحة تغيير كلمة المرور قيد التطوير')} className="w-full text-right text-sm text-slate-700 hover:text-primary-600 font-bold transition-colors">تغيير كلمة المرور</button>
              <button onClick={() => alert('إعدادات المصادقة الثنائية قيد التطوير')} className="w-full text-right text-sm text-slate-700 hover:text-primary-600 font-bold transition-colors">تفعيل المصادقة الثنائية</button>
            </div>
          </div>
        </div>

        {/* Detailed Info */}
        <div className="md:col-span-2 space-y-6">
          <div className="glass-morphism p-8 rounded-3xl border border-white/40 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-primary-950 ">المعلومات الشخصية</h3>
              <button onClick={() => setIsEditModalOpen(true)} className="flex items-center gap-2 text-sm text-primary-600 font-bold hover:underline">
                <Edit2 size={16} />
                تعديل
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700  uppercase">الاسم الكامل</label>
                <div className="p-3 glass-morphism border border-indigo-100/10 rounded-xl text-primary-950  font-bold">المستشار التربوي</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700  uppercase">البريد الإلكتروني</label>
                <div className="p-3 glass-morphism border border-indigo-100/10 rounded-xl text-primary-950  font-bold text-left">admin@masari.com</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700  uppercase">رقم الهاتف</label>
                <div className="p-3 glass-morphism border border-indigo-100/10 rounded-xl text-primary-950  font-bold text-left">+213 5XX XX XX XX</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700  uppercase">التخصص</label>
                <div className="p-3 glass-morphism border border-indigo-100/10 rounded-xl text-primary-950  font-bold">إرشاد مهني ونفسي</div>
              </div>
            </div>

            <div className="mt-8 space-y-1">
              <label className="text-xs font-bold text-slate-700  uppercase">نبذة تعريفية</label>
              <div className="p-4 glass-morphism border border-indigo-100/10 rounded-xl text-primary-950  leading-relaxed font-medium">
                مستشار متخصص في التوجيه الأكاديمي والمهني، بخبرة تزيد عن 10 سنوات في مساعدة الطلاب على اكتشاف شغفهم ورسم مساراتهم المستقبلية بناءً على المعايير العلمية.
              </div>
            </div>
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-morphism w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-white/40 p-6 text-right">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-900">تعديل المعلومات الشخصية</h3>
                <button onClick={() => setIsEditModalOpen(false)} className="text-slate-500 hover:text-red-500">
                  <X size={20} />
                </button>
             </div>
             <div className="space-y-4 font-arabic">
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">الاسم الكامل</label>
                   <input type="text" defaultValue="المستشار التربوي" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-primary-500 transition-all font-medium text-sm" />
                </div>
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">البريد الإلكتروني</label>
                   <input type="email" defaultValue="admin@masari.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-primary-500 transition-all font-medium text-sm text-left" dir="ltr" />
                </div>
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">رقم الهاتف</label>
                   <input type="tel" defaultValue="+213 5XX XX XX XX" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-primary-500 transition-all font-medium text-sm text-left" dir="ltr" />
                </div>
                <div className="pt-4 flex items-center gap-3">
                   <button 
                     onClick={() => {
                        setIsEditModalOpen(false);
                        alert('تم حفظ التعديلات بنجاح');
                     }}
                     className="flex-1 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20"
                   >
                     حفظ التعديلات
                   </button>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
