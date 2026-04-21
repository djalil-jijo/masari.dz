"use client";

import React from 'react';
import { FileText, Download, Eye, Search, Filter, MoreVertical, FileCode, FileSpreadsheet } from 'lucide-react';

export default function StudentFilesView() {
  const files = [
    { name: "تقرير النفسي - أحمد محمد.pdf", type: "PDF", size: "2.4 MB", date: "2026/04/05", student: "أحمد بن محمد" },
    { name: "نتائج اختبار هولاند.xlsx", type: "XLSX", size: "1.1 MB", date: "2026/04/04", student: "سارة العلي" },
    { name: "خطة التوجيه المهني.docx", type: "DOCX", size: "850 KB", date: "2026/04/02", student: "خالد العمودي" },
    { name: "اختبار الميول الموسع.pdf", type: "PDF", size: "3.2 MB", date: "2026/03/28", student: "نورة القحطاني" },
    { name: "شهادة إتمام الجلسات.pdf", type: "PDF", size: "1.5 MB", date: "2026/03/15", student: "أحمد بن محمد" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-arabic animate-fade-in">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-primary-950 dark:text-white">ملفات الطلاب</h1>
          <p className="text-slate-700 dark:text-slate-300 font-medium">إدارة الوثائق والتقارير الخاصة بالمستفيدين</p>
        </div>
        <div className="relative">
           <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="بحث عن ملف أو طالب..."
              className="w-80 pr-12 pl-4 py-2.5 glass-morphism border border-indigo-100/20 dark:border-slate-800 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-primary-950 dark:text-white"
            />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "إجمالي الملفات", value: "145", color: "bg-indigo-500" },
          { label: "تم تحميلها هذا الشهر", value: "28", color: "bg-green-500" },
          { label: "تقارير تقييم", value: "52", color: "bg-orange-500" },
          { label: "خطط مهنية", value: "34", color: "bg-purple-500" },
        ].map((stat, i) => (
          <div key={i} className="glass-morphism p-6 rounded-3xl border border-white/40 shadow-sm relative overflow-hidden group hover:scale-[1.02] transition-transform">
            <div className={`w-10 h-10 ${stat.color} rounded-xl mb-4 shadow-lg ${stat.color}/20`}></div>
            <div className="text-slate-700 dark:text-slate-400 text-xs font-bold mb-1">{stat.label}</div>
            <div className="text-2xl font-black text-primary-950 dark:text-white">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="glass-morphism rounded-3xl border border-white/40 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-indigo-100/10 flex items-center justify-between bg-white/40 dark:bg-slate-950/20">
           <h3 className="font-bold text-primary-950 dark:text-white">المفات المرفوعة مؤخراً</h3>
           <button className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-primary-600 transition-colors">
             <Filter size={14} />
             تصفية حسب النوع
           </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-indigo-50/30 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                <th className="px-6 py-4">اسم الملف</th>
                <th className="px-6 py-4">الطالب</th>
                <th className="px-6 py-4 text-center">النوع</th>
                <th className="px-6 py-4 text-center">الحجم</th>
                <th className="px-6 py-4 text-center">التاريخ</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-indigo-100/10 dark:divide-slate-800">
              {files.map((file, i) => (
                <tr key={i} className="hover:bg-white/40 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/10 rounded-xl flex items-center justify-center text-indigo-600">
                        {file.type === 'PDF' && <FileText size={20} />}
                        {file.type === 'XLSX' && <FileSpreadsheet size={20} />}
                        {file.type === 'DOCX' && <FileCode size={20} />}
                      </div>
                      <span className="text-sm font-bold text-primary-950 dark:text-slate-300 group-hover:text-primary-600 transition-colors">{file.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300 font-bold">{file.student}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded text-[10px] font-bold uppercase">{file.type}</span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">{file.size}</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">{file.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                       <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-all" title="معاينة">
                         <Eye size={18} />
                       </button>
                       <button className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-all" title="تحميل">
                         <Download size={18} />
                       </button>
                       <button className="p-2 text-slate-400 hover:text-red-500 rounded-lg transition-all">
                         <MoreVertical size={18} />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
