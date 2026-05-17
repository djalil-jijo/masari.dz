"use client";

import React, { useState, useMemo } from 'react';
import { Users, BookOpen, TrendingUp, BarChart3, PieChart, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Cell
} from 'recharts';
import { mockStudentsAnalytics } from '@/lib/data/mockStudentsAnalytics';

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f59e0b', '#10b981'];

export default function AdminDashboard({ setActiveTab }: { setActiveTab?: (tab: string) => void }) {
  const [timeFilter, setTimeFilter] = useState<'today' | 'week' | 'month'>('today');
  
  const hollandSummary = useMemo(() => {
    const counts: Record<string, number> = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    mockStudentsAnalytics.slice(0, 50).forEach(student => {
      student.holland.forEach(type => counts[type] += 1);
    });
    return [
      { name: 'R', value: counts['R'] },
      { name: 'I', value: counts['I'] },
      { name: 'A', value: counts['A'] },
      { name: 'S', value: counts['S'] },
      { name: 'E', value: counts['E'] },
      { name: 'C', value: counts['C'] },
    ];
  }, []);

  const stats = [
    { label: "إجمالي الطلاب", value: "1,240", icon: <Users size={20} />, color: "bg-blue-500", trend: "+12%" },
    { label: "الاختبارات المنفذة", value: "3,850", icon: <BookOpen size={20} />, color: "bg-purple-500", trend: "+8%" },
    { label: "دقة التوجيه", value: "94%", icon: <Activity size={20} />, color: "bg-green-500", trend: "+4%" },
    { label: "الميول المهنية", value: "واقعية (R)", icon: <TrendingUp size={20} />, color: "bg-orange-500", trend: "نمط غالب" },
  ];

  const recentAssessments = [
    { name: "أحمد بوعلام", test: "هولاند للميول", score: "R-I-C", date: "منذ ساعتين" },
    { name: "سارة بن علي", test: "القدرات العقلية", score: "85%", date: "منذ 3 ساعات" },
    { name: "الياس منصوري", test: "هولاند للميول", score: "S-A-E", date: "منذ 5 ساعات" },
    { name: "نريمان قاسمي", test: "القدرات العقلية", score: "92%", date: "أمس" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-arabic animate-fade-in">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-primary-950">لوحة المراقبة والإحصاء</h1>
        <div className="flex bg-white/60 p-1 rounded-xl glass-morphism border border-indigo-100/30">
           <button onClick={() => setTimeFilter('today')} className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors ${timeFilter === 'today' ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20' : 'text-primary-900 hover:text-primary-600'}`}>اليوم</button>
           <button onClick={() => setTimeFilter('week')} className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors ${timeFilter === 'week' ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20' : 'text-primary-900 hover:text-primary-600'}`}>هذا الأسبوع</button>
           <button onClick={() => setTimeFilter('month')} className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors ${timeFilter === 'month' ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20' : 'text-primary-900 hover:text-primary-600'}`}>هذا الشهر</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-morphism p-6 rounded-3xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 ${stat.color} text-white rounded-xl flex items-center justify-center`}>
                {stat.icon}
              </div>
              <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-lg">
                {stat.trend}
              </span>
            </div>
            <div className="text-slate-600 text-xs font-bold mb-1">{stat.label}</div>
            <div className="text-2xl font-black text-primary-950">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Real Chart Area */}
        <div className="lg:col-span-2 glass-morphism rounded-3xl p-8 border border-white/40">
          <div className="flex items-center justify-between mb-8">
             <h3 className="text-lg font-bold text-primary-950 flex items-center gap-2">
                <PieChart size={18} className="text-primary-600" />
                توزيع الميول المهنية (نظرة سريعة)
             </h3>
             <button 
               onClick={() => setActiveTab && setActiveTab('analytics')}
               className="text-xs font-bold text-primary-600 hover:underline flex items-center gap-1"
             >
               فتح التحليلات الكاملة
               <BarChart3 size={14} />
             </button>
          </div>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hollandSummary} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b', fontWeight: 'bold' }} />
                <Tooltip 
                  cursor={{ fill: 'rgba(99, 102, 241, 0.05)' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40}>
                  {hollandSummary.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-morphism rounded-3xl p-8">
          <h3 className="text-lg font-bold text-primary-950 mb-6">نشاطات أجريت مؤخراً</h3>
          <div className="space-y-6">
             {recentAssessments.map((item, i) => (
               <div key={i} className="flex items-center gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-primary-600">
                    {item.name[0]}
                  </div>
                  <div className="flex-1">
                     <div className="text-sm font-bold text-primary-950">{item.name}</div>
                     <div className="text-[10px] text-slate-600 font-bold">{item.test} - <span className="text-primary-500 font-bold">{item.score}</span></div>
                  </div>
                  <div className="text-[10px] text-slate-500 whitespace-nowrap">{item.date}</div>
               </div>
             ))}
          </div>
          <button onClick={() => setActiveTab && setActiveTab('reports')} className="w-full mt-8 py-3 text-sm font-bold text-primary-600 bg-primary-50 rounded-xl hover:bg-primary-100 transition-all">
             عرض كافة البيانات
          </button>
        </div>
      </div>
    </div>
  );
}
