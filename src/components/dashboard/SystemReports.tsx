"use client";

import React, { useState } from 'react';
import { 
  Download, Filter, Search, Activity, 
  UserPlus, FileCheck, Calendar as CalendarIcon, ShieldAlert
} from 'lucide-react';
import { motion } from 'framer-motion';

import { mockLogs, AuditLog, LogType } from '@/lib/data/mockLogs';

export default function SystemReports() {
  const [logs] = useState<AuditLog[]>(mockLogs);
  const [filterType, setFilterType] = useState<LogType | 'ALL'>('ALL');

  const filteredLogs = logs.filter(log => filterType === 'ALL' || log.type === filterType);

  const getLogIcon = (type: LogType) => {
    switch(type) {
      case 'USER': return <UserPlus size={16} className="text-emerald-500" />;
      case 'ASSESSMENT': return <FileCheck size={16} className="text-indigo-500" />;
      case 'SESSION': return <CalendarIcon size={16} className="text-amber-500" />;
      case 'SYSTEM': return <ShieldAlert size={16} className="text-red-500" />;
    }
  };

  const getLogColor = (type: LogType) => {
    switch(type) {
      case 'USER': return 'bg-emerald-50 border-emerald-100';
      case 'ASSESSMENT': return 'bg-indigo-50 border-indigo-100';
      case 'SESSION': return 'bg-amber-50 border-amber-100';
      case 'SYSTEM': return 'bg-red-50 border-red-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-morphism p-6 rounded-3xl border border-white/40 shadow-sm flex items-center justify-between">
            <div>
               <p className="text-sm font-bold text-slate-700 mb-1">النشاطات اليومية</p>
               <h3 className="text-3xl font-black text-primary-950 ">124</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-50  flex items-center justify-center text-indigo-600">
               <Activity size={24} />
            </div>
         </div>
          <div className="glass-morphism p-6 rounded-3xl border border-white/40 shadow-sm flex items-center justify-between">
            <div>
               <p className="text-sm font-bold text-slate-700 mb-1">مقاييس منجزة</p>
               <h3 className="text-3xl font-black text-primary-950 ">45</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50  flex items-center justify-center text-emerald-600">
               <FileCheck size={24} />
            </div>
         </div>
          <div className="glass-morphism p-6 rounded-3xl border border-white/40 shadow-sm flex items-center justify-between">
            <div>
               <p className="text-sm font-bold text-slate-700 mb-1">جلسات معقودة</p>
               <h3 className="text-3xl font-black text-primary-950 ">12</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50  flex items-center justify-center text-amber-600">
               <CalendarIcon size={24} />
            </div>
         </div>
      </div>

      {/* Logs Table */}
      <div className="glass-morphism rounded-3xl border border-white/40 shadow-sm overflow-hidden flex flex-col h-[500px]">
        <div className="p-6 border-b border-indigo-100/10 flex flex-col md:flex-row justify-between md:items-center gap-4 bg-white/60 ">
           <h3 className="text-lg font-bold text-primary-950 ">سجل نشاط النظام (Audit Logs)</h3>
           
           <div className="flex items-center gap-3">
              <div className="relative">
                 <select 
                   value={filterType}
                   onChange={(e) => setFilterType(e.target.value as LogType | 'ALL')}
                   className="pl-4 pr-10 py-2 glass-morphism border border-indigo-100/20 rounded-xl outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all text-xs font-bold appearance-none text-primary-900"
                 >
                   <option value="ALL">جميع النشاطات</option>
                   <option value="USER">نشاطات المستخدمين</option>
                   <option value="ASSESSMENT">المقاييس والنتائج</option>
                   <option value="SESSION">الجلسات المباشرة</option>
                   <option value="SYSTEM">تحديثات النظام</option>
                 </select>
                 <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={14} />
              </div>
              
              <button onClick={() => alert('تم تصدير سجل النشاطات بنجاح (Simulation)')} title="تصدير السجل بتنسيق CSV" className="p-2 border border-slate-200 rounded-xl text-slate-500 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all">
                <Download size={18} />
              </button>
           </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
           {filteredLogs.map((log, index) => (
             <motion.div 
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: index * 0.05 }}
               key={log.id} 
               className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50  transition-colors border border-transparent hover:border-slate-100 "
             >
                <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center border ${getLogColor(log.type)}`}>
                   {getLogIcon(log.type)}
                </div>
                
                <div className="flex-1">
                   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <p className="text-sm font-bold text-slate-900 ">{log.action}</p>
                      <span className="text-xs text-slate-500 font-medium whitespace-nowrap">{log.timestamp}</span>
                   </div>
                   <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-indigo-600">{log.user}</span>
                      <span className="text-slate-600 ">•</span>
                      <span className="text-slate-500">{log.role === 'ADMIN' ? 'مدير' : log.role === 'COUNSELOR' ? 'مستشار' : 'تلميذ'}</span>
                   </div>
                </div>
             </motion.div>
           ))}
           
           {filteredLogs.length === 0 && (
             <div className="h-full flex items-center justify-center text-slate-500 font-medium text-sm">
               لا توجد سجلات مطابقة لهذا الفلتر.
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
