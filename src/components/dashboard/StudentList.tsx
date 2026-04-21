"use client";

import React from 'react';
import { Search, Filter, MoreHorizontal, User, CheckCircle2, Clock, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const students = [
  { id: 1, name: "أحمد بن محمد", email: "ahmed@student.com", grade: "3ث - علمي", status: "مكتمل", topInterest: "بحثي (I)", lastActive: "منذ ساعتين" },
  { id: 2, name: "سارة العلي", email: "sara@student.com", grade: "2ث - أدبي", status: "مكتمل", topInterest: "اجتماعي (S)", lastActive: "منذ 3 ساعات" },
  { id: 3, name: "خالد العمودي", email: "khalid@student.com", grade: "3ث - علمي", status: "قيد التنفيذ", topInterest: "--", lastActive: "منذ 5 ساعات" },
  { id: 4, name: "نورة القحطاني", email: "noura@student.com", grade: "1ث", status: "مكتمل", topInterest: "فني (A)", lastActive: "أمس" },
  { id: 5, name: "فهد الدوسري", email: "fahad@student.com", grade: "2ث - علمي", status: "لم يبدأ", topInterest: "--", lastActive: "منذ يومين" },
];

export default function StudentList() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">إدارة الطلاب</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">متابعة أداء الطلاب ونتائج مقاييسهم</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="البحث عن طالب..."
              className="pr-10 pl-4 py-2.5 rounded-xl glass-morphism border border-indigo-100/20 outline-none focus:border-primary-600 transition-all text-sm w-64 shadow-sm text-primary-950 font-bold"
            />
          </div>
          <button className="p-2.5 glass-morphism border border-indigo-100/20 rounded-xl text-slate-500 hover:text-primary-600 shadow-sm transition-all">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="glass-morphism rounded-3xl border border-white/40 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-white/40 dark:bg-slate-800/50 text-slate-700 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">الطالب</th>
                <th className="px-6 py-4">المرحلة</th>
                <th className="px-6 py-4">حالة المقاييس</th>
                <th className="px-6 py-4">أعلى ميل</th>
                <th className="px-6 py-4">آخر نشاط</th>
                <th className="px-6 py-4 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {students.map((student, idx) => (
                <motion.tr 
                  key={student.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="hover:bg-white/60 dark:hover:bg-slate-800/30 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-primary-600">
                        {student.name[0]}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">{student.name}</div>
                        <div className="text-[10px] text-slate-400">{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                    {student.grade}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold
                      ${student.status === 'مكتمل' ? 'bg-green-100 text-green-600' : 
                        student.status === 'قيد التنفيذ' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500'}`}>
                      {student.status === 'مكتمل' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-primary-600">
                    {student.topInterest}
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-400">
                    {student.lastActive}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all">
                      <ArrowLeft size={16} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg transition-all">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 border-t border-indigo-100/10 flex items-center justify-between text-xs font-bold">
          <span className="text-slate-600">عرض 5 من أصل 1,240 طالب</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-400" disabled>السابق</button>
            <button className="px-3 py-1 rounded bg-primary-600 text-white">1</button>
            <button className="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-600">2</button>
            <button className="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-600">التالي</button>
          </div>
        </div>
      </div>
    </div>
  );
}
