"use client";

import React from 'react';
import { Search, Filter, MoreHorizontal, User, CheckCircle2, Clock, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const students = [
  { id: 1, name: "أحمد بوعلام", email: "ahmed@student.com", grade: "3ث - علمي", status: "مكتمل", topInterest: "بحثي (I)", lastActive: "منذ ساعتين" },
  { id: 2, name: "سارة بن علي", email: "sara@student.com", grade: "2ث - أدبي", status: "مكتمل", topInterest: "اجتماعي (S)", lastActive: "منذ 3 ساعات" },
  { id: 3, name: "الياس منصوري", email: "khalid@student.com", grade: "3ث - علمي", status: "قيد التنفيذ", topInterest: "--", lastActive: "منذ 5 ساعات" },
  { id: 4, name: "نريمان قاسمي", email: "noura@student.com", grade: "1ث", status: "مكتمل", topInterest: "فني (A)", lastActive: "أمس" },
  { id: 5, name: "يانيس بوزيد", email: "fahad@student.com", grade: "2ث - علمي", status: "لم يبدأ", topInterest: "--", lastActive: "منذ يومين" },
];

export default function StudentList() {
  const [selectedStudent, setSelectedStudent] = React.useState<any>(null);
  const [isViewModalOpen, setIsViewModalOpen] = React.useState(false);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 ">إدارة الطلاب</h2>
          <p className="text-slate-500  text-sm">متابعة أداء الطلاب ونتائج مقاييسهم</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="البحث عن طالب..."
              className="pr-10 pl-4 py-2.5 rounded-xl glass-morphism border border-indigo-100/20 outline-none focus:border-primary-600 transition-all text-sm w-64 shadow-sm text-primary-950 font-bold"
            />
          </div>
          <button onClick={() => alert('إعدادات الفلترة قيد التطوير')} className="p-2.5 glass-morphism border border-indigo-100/20 rounded-xl text-slate-500 hover:text-primary-600 shadow-sm transition-all">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="glass-morphism rounded-3xl border border-white/40 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-white/60  text-slate-700 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">الطالب</th>
                <th className="px-6 py-4">المرحلة</th>
                <th className="px-6 py-4">حالة المقاييس</th>
                <th className="px-6 py-4">أعلى ميل</th>
                <th className="px-6 py-4">آخر نشاط</th>
                <th className="px-6 py-4 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 ">
              {students.map((student, idx) => (
                <motion.tr 
                  key={student.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="hover:bg-white/60  transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100  flex items-center justify-center font-bold text-primary-600">
                        {student.name[0]}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 ">{student.name}</div>
                        <div className="text-[10px] text-slate-500">{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600 ">
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
                  <td className="px-6 py-4 text-xs text-slate-500">
                    {student.lastActive}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button onClick={() => { setSelectedStudent(student); setIsViewModalOpen(true); }} className="p-2 text-slate-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all" title="معاينة التقرير">
                      <ArrowLeft size={16} />
                    </button>
                    <button onClick={() => alert('المزيد من الخيارات')} className="p-2 text-slate-500 hover:text-slate-600 rounded-lg transition-all">
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
             <button onClick={() => alert('الصفحة السابقة')} className="px-3 py-1 rounded border border-slate-200 text-slate-500">السابق</button>
             <button className="px-3 py-1 rounded bg-primary-600 text-white">1</button>
             <button onClick={() => alert('الانتقال للصفحة 2')} className="px-3 py-1 rounded border border-slate-200 text-slate-600">2</button>
             <button onClick={() => alert('الصفحة التالية')} className="px-3 py-1 rounded border border-slate-200 text-slate-600">التالي</button>
          </div>
        </div>
      </div>

      {isViewModalOpen && selectedStudent && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-morphism w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-white/40 p-6 text-right">
             <h3 className="text-xl font-bold text-slate-900 mb-2">تفاصيل الطالب</h3>
             <div className="p-4 bg-slate-50 rounded-xl font-medium text-sm space-y-2 mb-6">
               <p><span className="font-bold">الاسم:</span> {selectedStudent.name}</p>
               <p><span className="font-bold">البريد:</span> {selectedStudent.email}</p>
               <p><span className="font-bold">المرحلة:</span> {selectedStudent.grade}</p>
               <p><span className="font-bold">حالة المقاييس:</span> {selectedStudent.status}</p>
               <p><span className="font-bold">أعلى ميل:</span> {selectedStudent.topInterest}</p>
               <p><span className="font-bold">آخر نشاط:</span> {selectedStudent.lastActive}</p>
             </div>
             <button 
               onClick={() => setIsViewModalOpen(false)}
               className="w-full py-2.5 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-sm text-sm"
             >
               إغلاق
             </button>
          </div>
        </div>
      )}
    </div>
  );
}
