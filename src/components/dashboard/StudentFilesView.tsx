"use client";

import React, { useState } from 'react';
import { FileText, Download, Eye, Search, Filter, MoreVertical, FileCode, FileSpreadsheet, X, Upload } from 'lucide-react';

export default function StudentFilesView() {
  const [isFileModalOpen, setIsFileModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const files = [
    { name: "تقرير النفسي - أحمد بوعلام.pdf", type: "PDF", size: "2.4 MB", date: "2026/04/05", student: "أحمد بوعلام" },
    { name: "نتائج اختبار هولاند.xlsx", type: "XLSX", size: "1.1 MB", date: "2026/04/04", student: "سارة بن علي" },
    { name: "خطة التوجيه المهني.docx", type: "DOCX", size: "850 KB", date: "2026/04/02", student: "الياس منصوري" },
    { name: "اختبار الميول الموسع.pdf", type: "PDF", size: "3.2 MB", date: "2026/03/28", student: "نريمان قاسمي" },
    { name: "شهادة إتمام الجلسات.pdf", type: "PDF", size: "1.5 MB", date: "2026/03/15", student: "أحمد بوعلام" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-arabic animate-fade-in">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-primary-950 ">ملفات الطلاب</h1>
          <p className="text-slate-700  font-medium mb-4">إدارة الوثائق والتقارير الخاصة بالمستفيدين</p>
          <button onClick={() => setIsUploadModalOpen(true)} className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-primary-600/20 hover:bg-primary-700 transition-all hover:-translate-y-0.5">
             <Upload size={18} />
             رفع ملف جديد
          </button>
        </div>
        <div className="relative">
           <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input 
              type="text" 
              placeholder="بحث عن ملف أو طالب..."
              className="w-80 pr-12 pl-4 py-2.5 glass-morphism border border-indigo-100/20  rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-primary-950 "
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
            <div className="text-slate-700  text-xs font-bold mb-1">{stat.label}</div>
            <div className="text-2xl font-black text-primary-950 ">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="glass-morphism rounded-3xl border border-white/40 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-indigo-100/10 flex items-center justify-between bg-white/60 ">
           <h3 className="font-bold text-primary-950 ">المفات المرفوعة مؤخراً</h3>
           <button onClick={() => alert('إعدادات فلترة الملفات')} className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-primary-600 transition-colors">
             <Filter size={14} />
             تصفية حسب النوع
           </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-indigo-50/30  text-slate-600  text-[10px] font-bold uppercase tracking-wider">
                <th className="px-6 py-4">اسم الملف</th>
                <th className="px-6 py-4">الطالب</th>
                <th className="px-6 py-4 text-center">النوع</th>
                <th className="px-6 py-4 text-center">الحجم</th>
                <th className="px-6 py-4 text-center">التاريخ</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-indigo-100/10 ">
              {files.map((file, i) => (
                <tr key={i} className="hover:bg-white/60  transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-50  rounded-xl flex items-center justify-center text-indigo-600">
                        {file.type === 'PDF' && <FileText size={20} />}
                        {file.type === 'XLSX' && <FileSpreadsheet size={20} />}
                        {file.type === 'DOCX' && <FileCode size={20} />}
                      </div>
                      <span className="text-sm font-bold text-primary-950  group-hover:text-primary-600 transition-colors">{file.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700  font-bold">{file.student}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-2 py-1 bg-slate-100  text-slate-500 rounded text-[10px] font-bold uppercase">{file.type}</span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">{file.size}</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-500">{file.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                       <button onClick={() => { setSelectedFile(file); setIsFileModalOpen(true); }} className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all" title="معاينة">
                         <Eye size={18} />
                       </button>
                       <button onClick={() => alert('بدأ تحميل الملف: ' + file.name)} className="p-2 text-slate-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all" title="تحميل">
                         <Download size={18} />
                       </button>
                       <button onClick={() => alert('خيارات إضافية')} className="p-2 text-slate-500 hover:text-red-500 rounded-lg transition-all">
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

      {isFileModalOpen && selectedFile && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 lg:p-12">
          <div className="bg-white w-full h-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex flex-col">
             <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                     <FileText size={20} />
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-900">{selectedFile.name}</h3>
                     <p className="text-xs text-slate-500 text-right">{selectedFile.student}</p>
                   </div>
                </div>
                <div className="flex items-center gap-2">
                   <button onClick={() => alert('تنزيل الملف...')} className="p-2.5 bg-primary-600 text-white rounded-xl shadow-md hover:bg-primary-700 transition-all font-bold text-xs flex items-center gap-2">
                     <Download size={16} /> تنزيل
                   </button>
                   <button onClick={() => setIsFileModalOpen(false)} className="p-2.5 text-slate-500 bg-slate-200 hover:bg-red-500 hover:text-white rounded-xl transition-colors">
                     <X size={20} />
                   </button>
                </div>
             </div>
             <div className="flex-1 bg-slate-100 flex items-center justify-center">
                 <div className="text-slate-400 font-bold flex flex-col items-center gap-4">
                    <FileText size={48} className="opacity-50" />
                    <span>معاينة الملف غير متوفرة هنا</span>
                 </div>
             </div>
          </div>
        </div>
      )}

      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-morphism w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-white/40 p-6 text-right">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-900">رفع ملف جديد</h3>
                <button onClick={() => setIsUploadModalOpen(false)} className="text-slate-500 hover:text-red-500">
                  <X size={20} />
                </button>
             </div>
             <div className="space-y-4 font-arabic">
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">الطالب المعني</label>
                   <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-primary-500 transition-all font-medium text-sm">
                      <option>اختر الطالب...</option>
                      <option>أحمد بن محمد</option>
                      <option>سارة العلي</option>
                   </select>
                </div>
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">نوع الملف</label>
                   <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-primary-500 transition-all font-medium text-sm">
                      <option>تقرير نفسي / تقييم</option>
                      <option>خطة مهنية</option>
                      <option>ملف آخر</option>
                   </select>
                </div>
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">الملف</label>
                   <div className="w-full p-8 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-100 transition-colors">
                      <Upload size={24} className="text-slate-400 mb-2" />
                      <span className="text-xs font-bold text-slate-600 outline-none">اضغط هنا لاختيار الملف</span>
                   </div>
                </div>
                <div className="pt-4 flex items-center gap-3">
                   <button 
                     onClick={() => {
                        setIsUploadModalOpen(false);
                        alert('تم رفع الملف بنجاح');
                     }}
                     className="flex-1 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20"
                   >
                     تحميل الملف
                   </button>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
