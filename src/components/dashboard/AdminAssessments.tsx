"use client";

import React, { useState } from 'react';
import { 
  FileCheck, Edit2, ShieldAlert, Power, Plus,
  CheckCircle2, XCircle, Search
} from 'lucide-react';

interface AssessmentData {
  id: string;
  name: string;
  type: string;
  questionsCount: number;
  status: 'ACTIVE' | 'DISABLED';
  lastUpdated: string;
}

const mockAssessments: AssessmentData[] = [
  { id: '1', name: 'مقياس هولاند للميول المهنية', type: 'ميول مهنية', questionsCount: 48, status: 'ACTIVE', lastUpdated: '2023-10-01' },
  { id: '2', name: 'مقياس القدرات العقلية', type: 'قدرات عقلية', questionsCount: 30, status: 'ACTIVE', lastUpdated: '2023-11-15' },
  { id: '3', name: 'اختبار السمات الشخصية', type: 'سمات شخصية', questionsCount: 60, status: 'DISABLED', lastUpdated: '2023-09-20' },
  { id: '4', name: 'مقياس تحديد مسار الجامعة', type: 'توجيه أكاديمي', questionsCount: 25, status: 'ACTIVE', lastUpdated: '2024-01-05' },
];

export default function AdminAssessments() {
  const [assessments, setAssessments] = useState<AssessmentData[]>(mockAssessments);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedAssessment, setSelectedAssessment] = useState<AssessmentData | null>(null);

  const filteredAssessments = assessments.filter(a => a.name.includes(searchQuery) || a.type.includes(searchQuery));

  const toggleStatus = (id: string) => {
    setAssessments(prev => prev.map(a => 
      a.id === id ? { ...a, status: a.status === 'ACTIVE' ? 'DISABLED' : 'ACTIVE' } : a
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 glass-morphism p-6 rounded-3xl border border-white/40 shadow-sm">
        <div className="relative flex-1 md:w-80 w-full">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="البحث في المقاييس والتخصصات..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-10 py-2.5 glass-morphism border border-indigo-100/10 rounded-xl outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm font-bold text-primary-950 "
          />
        </div>
        
        <button onClick={() => setIsAddModalOpen(true)} className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-xl font-bold shadow-lg shadow-primary-600/30 hover:bg-primary-700 transition-all w-full md:w-auto justify-center hover:scale-105 active:scale-95">
          <Plus size={18} />
          إضافة مقياس جديد
        </button>
      </div>

      {/* Grid of Assessments */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredAssessments.map((assessment) => (
          <div key={assessment.id} className="glass-morphism rounded-3xl p-6 border border-white/40 shadow-sm relative overflow-hidden group hover:border-primary-200  transition-all cursor-default">
            
            <div className={`absolute top-0 right-0 w-2 h-full ${
                assessment.status === 'ACTIVE' ? 'bg-green-500' : 'bg-slate-300 '
            }`}></div>

            <div className="flex items-start justify-between mb-4">
               <div className="w-12 h-12 bg-indigo-50  text-indigo-600 rounded-2xl flex items-center justify-center">
                  <FileCheck size={24} />
               </div>
               
               <div className="flex items-center gap-2">
                 <span className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border flex items-center gap-1 ${
                   assessment.status === 'ACTIVE' 
                    ? 'bg-green-50 border-green-100 text-green-600' 
                    : 'bg-slate-50 border-slate-200 text-slate-500  '
                 }`}>
                   {assessment.status === 'ACTIVE' ? <CheckCircle2 size={10} /> : <ShieldAlert size={10} />}
                   {assessment.status === 'ACTIVE' ? 'مفعل' : 'معطل'}
                 </span>
               </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary-950  mb-1 leading-tight">{assessment.name}</h3>
              <p className="text-xs text-slate-700  font-bold mb-4">{assessment.type} • {assessment.questionsCount} سؤال</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-indigo-100/10 ">
               <span className="text-[10px] text-slate-600  font-bold">آخر تحديث: {assessment.lastUpdated}</span>
               
               <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => { setSelectedAssessment(assessment); setIsEditModalOpen(true); }}
                    className="p-2 bg-slate-50 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="تعديل المقياس الأسئلة"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button 
                    onClick={() => toggleStatus(assessment.id)}
                    className="p-2 bg-slate-50  text-slate-500 hover:text-red-600 hover:bg-red-50  rounded-lg transition-colors" 
                    title={assessment.status === 'ACTIVE' ? 'إيقاف المقياس' : 'تفعيل المقياس'}
                  >
                    <Power size={16} />
                  </button>
               </div>
            </div>

          </div>
        ))}
      </div>

      {/* Add / Edit Assessment Modal */}
      {(isAddModalOpen || isEditModalOpen) && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-morphism w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-white/40 p-6 text-right">
             <h3 className="text-xl font-bold text-slate-900 mb-6">
                {isAddModalOpen ? 'إضافة مقياس جديد' : 'تعديل المقياس'}
             </h3>
             <div className="space-y-4 font-arabic">
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">اسم المقياس</label>
                   <input type="text" defaultValue={isEditModalOpen ? selectedAssessment?.name : ''} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-primary-500 transition-all font-medium text-sm" />
                </div>
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">نوع المقياس</label>
                   <input type="text" defaultValue={isEditModalOpen ? selectedAssessment?.type : ''} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-primary-500 transition-all font-medium text-sm" />
                </div>
                <div className="pt-4 flex items-center gap-3">
                   <button 
                     onClick={() => {
                        setIsAddModalOpen(false);
                        setIsEditModalOpen(false);
                        alert(isAddModalOpen ? 'تمت إضافة المقياس بنجاح' : 'تم تعديل المقياس بنجاح');
                     }}
                     className="flex-1 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20"
                   >
                     حفظ
                   </button>
                   <button 
                     onClick={() => { setIsAddModalOpen(false); setIsEditModalOpen(false); }}
                     className="px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                   >
                     إلغاء
                   </button>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
