"use client";

import React, { useState } from 'react';
import { 
  Globe, Server, Mail, Shield, Save, Key, SwitchCamera, AlertTriangle
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminSystemSettings() {
  const [activeTab, setActiveTab] = useState<'general' | 'smtp' | 'security' | 'maintenance'>('general');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1000); // Mock save
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      <div className="glass-morphism rounded-3xl p-2 flex overflow-x-auto hide-scrollbar">
         {[
           { id: 'general', label: 'عام', icon: <Globe size={18} /> },
           { id: 'smtp', label: 'البريد الإلكتروني', icon: <Mail size={18} /> },
           { id: 'security', label: 'الأمان والصلاحيات', icon: <Shield size={18} /> },
           { id: 'maintenance', label: 'الصيانة', icon: <Server size={18} /> },
         ].map(tab => (
           <button
             key={tab.id}
             onClick={() => setActiveTab(tab.id as any)}
             className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all whitespace-nowrap ${
               activeTab === tab.id 
                 ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20 scale-105' 
                 : 'text-slate-600 hover:bg-white/50 dark:hover:bg-slate-800'
             }`}
           >
             {tab.icon}
             {tab.label}
           </button>
         ))}
      </div>

      <div className="glass-morphism rounded-3xl overflow-hidden min-h-[400px]">
         <div className="p-6 md:p-8">
            
            {activeTab === 'general' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-2xl">
                 <div>
                   <h3 className="text-xl font-bold text-primary-950 dark:text-white mb-2">إعدادات المنصة الأساسية</h3>
                   <p className="text-sm text-slate-700 dark:text-slate-300 mb-6 font-medium">البيانات الأساسية التي تظهر للمستخدمين وعناوين النظام.</p>
                 </div>
                 
                 <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-800 dark:text-slate-200 mb-2">اسم المنصة</label>
                      <input type="text" defaultValue="منصة مساري الذكية" className="w-full px-4 py-3 glass-morphism border border-indigo-100/20 rounded-xl outline-none focus:border-primary-500 transition-all text-sm font-bold text-primary-950 dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">الرابط الأساسي (URL)</label>
                      <input type="url" defaultValue="https://masari.app" className="w-full px-4 py-3 glass-morphism border border-indigo-100/20 rounded-xl outline-none focus:border-primary-500 transition-all text-sm font-bold text-slate-600 text-left" dir="ltr" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">البريد المخصص للدعم الفني</label>
                      <input type="email" defaultValue="support@masari.app" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl outline-none focus:border-primary-500 transition-all text-sm font-medium text-slate-500 text-left" dir="ltr" />
                    </div>
                 </div>
              </motion.div>
            )}

            {activeTab === 'maintenance' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-2xl">
                 <div>
                   <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">وضع الصيانة والنظام</h3>
                   <p className="text-sm text-slate-500 mb-6">تحكم في حالة الخوادم والوصول المؤقت للمنصة.</p>
                 </div>
                 
                 <div className="p-5 rounded-2xl border border-amber-200 bg-amber-50 dark:bg-amber-900/10 flex items-start gap-4">
                    <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-xl">
                      <AlertTriangle size={24} />
                    </div>
                    <div className="flex-1">
                       <h4 className="font-bold text-amber-900 dark:text-amber-500 mb-1">تفعيل وضع الصيانة</h4>
                       <p className="text-sm text-amber-700 dark:text-amber-600/70 mb-4 leading-relaxed">عند تفعيل وضع الصيانة، لن يتمكن الطلاب أو المستشارون من الدخول للنظام. ستظهر لهم صفحة تخبرهم بالصيانة المجدولة.</p>
                       <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                          <span className="mr-3 text-sm font-bold text-slate-600 dark:text-slate-400">تشغيل الآن</span>
                       </label>
                    </div>
                 </div>
              </motion.div>
            )}

            {/* Other tabs omitted for brevity in demo */}
            {(activeTab === 'smtp' || activeTab === 'security') && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="h-40 flex items-center justify-center text-slate-400 text-sm font-bold">
                 قيد التطوير...
              </motion.div>
            )}

         </div>

         <div className="p-6 md:p-8 bg-white/40 dark:bg-slate-900/50 border-t border-indigo-100/20 flex justify-end">
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all shadow-lg text-white ${isSaving ? 'bg-primary-400 cursor-not-allowed shadow-none' : 'bg-primary-600 hover:bg-primary-700 shadow-primary-600/30 hover:scale-[1.02] active:scale-95'}`}
            >
               {isSaving ? (
                 <>جاري الحفظ...</>
               ) : (
                 <>
                   <Save size={18} />
                   حفظ الإعدادات
                 </>
               )}
            </button>
         </div>
      </div>
    </div>
  );
}
