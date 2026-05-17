"use client";

import React, { useMemo, useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  AreaChart, Area
} from 'recharts';
import { mockStudentsAnalytics } from '@/lib/data/mockStudentsAnalytics';
import { majors } from '@/lib/data';
import { Users, Target, BookOpen, Brain, TrendingUp, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f59e0b', '#10b981'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-morphism p-4 border border-white/40 shadow-xl rounded-2xl font-arabic text-right min-w-[150px]">
        <p className="font-black text-primary-950 mb-1">{label || payload[0].name}</p>
        <div className="h-px bg-slate-200/50 my-2" />
        <div className="flex items-center justify-between gap-4">
          <span className="font-black text-primary-600">{payload[0].value}</span>
          <span className="text-xs font-bold text-slate-500">القيمة</span>
        </div>
      </div>
    );
  }
  return null;
};

export default function DataAnalytics() {
  const data = mockStudentsAnalytics;
  const [activeIndex, setActiveIndex] = useState(-1);

  // Process Holland Distribution
  const hollandData = useMemo(() => {
    const counts: Record<string, number> = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    data.forEach(student => {
      student.holland.forEach(type => {
        counts[type] += 1;
      });
    });
    return [
      { name: 'واقعي (R)', value: counts['R'], color: '#f59e0b' },
      { name: 'بحثي (I)', value: counts['I'], color: '#3b82f6' },
      { name: 'فني (A)', value: counts['A'], color: '#ec4899' },
      { name: 'اجتماعي (S)', value: counts['S'], color: '#10b981' },
      { name: 'مبادر (E)', value: counts['E'], color: '#ef4444' },
      { name: 'تقليدي (C)', value: counts['C'], color: '#8b5cf6' },
    ];
  }, [data]);

  // Process Recommended Majors Distribution
  const majorsData = useMemo(() => {
    const counts: Record<string, number> = {};
    majors.forEach(m => counts[m.id] = 0);
    
    data.forEach(student => {
      counts[student.bestMajorId] += 1;
    });

    return majors.map(m => ({
      name: m.name.split(' (')[0], // Arabic name only
      value: counts[m.id]
    })).sort((a, b) => b.value - a.value);
  }, [data]);

  // Process Average Personality Traits
  const personalityData = useMemo(() => {
    let ext = 0, con = 0, ope = 0;
    data.forEach(student => {
      ext += student.personality.extroversion;
      con += student.personality.control;
      ope += student.personality.openness;
    });
    return [
      { subject: 'الانبساط', A: Math.round(ext / data.length), fullMark: 100 },
      { subject: 'الانضباط', A: Math.round(con / data.length), fullMark: 100 },
      { subject: 'الانفتاح', A: Math.round(ope / data.length), fullMark: 100 },
    ];
  }, [data]);

  const topMajor = majorsData[0];
  const totalHollandPoints = hollandData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="space-y-8 animate-fade-in font-arabic">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-white/40 p-8 rounded-[2.5rem] border border-white/60 glass-morphism">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary-100 text-primary-600 rounded-xl">
              <TrendingUp size={24} />
            </div>
            <h2 className="text-3xl font-black text-primary-950">تحليلات ذكاء الأعمال للطلبة</h2>
          </div>
          <p className="text-slate-700 font-bold max-w-2xl">
            نظام تحليل متقدم يعتمد على البيانات الضخمة (Big Data Simulation) لتقديم رؤى دقيقة حول توجهات الطلاب وقدراتهم الكامنة.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-2xl shadow-lg shadow-primary-600/20 font-bold text-sm">
          <Users size={18} />
          <span>عينة: {data.length} طالب</span>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "دقة التوافق", value: `${Math.round(data.reduce((acc, s) => acc + s.compatibilityScore, 0) / data.length)}%`, icon: <Target />, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "التخصص الغالب", value: topMajor.name, icon: <BookOpen />, color: "text-indigo-600", bg: "bg-indigo-50" },
          { label: "النمط القيادي", value: [...hollandData].sort((a,b) => b.value - a.value)[0].name.split(' ')[0], icon: <TrendingUp />, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "توازن الشخصية", value: "مستقر", icon: <Brain />, color: "text-pink-600", bg: "bg-pink-50" },
        ].map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="glass-morphism p-6 rounded-[2rem] border border-white/40 shadow-sm group hover:shadow-xl transition-all"
          >
            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              {React.cloneElement(stat.icon as React.ReactElement, { size: 24 })}
            </div>
            <p className="text-xs font-black text-slate-500 uppercase tracking-wider mb-1">{stat.label}</p>
            <h4 className="text-xl font-black text-primary-950 truncate">{stat.value}</h4>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Majors Distribution - Bar Chart */}
        <div className="lg:col-span-2 glass-morphism rounded-[2.5rem] p-8 border border-white/40 shadow-sm relative overflow-hidden group">
          <div className="flex items-center justify-between mb-8 relative z-10">
            <div>
              <h3 className="text-xl font-black text-primary-950 flex items-center gap-2">
                توزيع توافق التخصصات الجامعية
              </h3>
              <p className="text-xs font-bold text-slate-500 mt-1">بناءً على خوارزمية التوافق الثلاثية (هولاند، القدرات، الشخصية)</p>
            </div>
          </div>
          
          <div className="h-[350px] w-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={majorsData} layout="vertical" margin={{ left: 40, right: 20 }}>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#1e293b', fontWeight: 'bold' }}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(241, 245, 249, 0.5)' }} />
                <Bar 
                  dataKey="value" 
                  fill="url(#barGradient)" 
                  radius={[0, 10, 10, 0]} 
                  barSize={30}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Holland Donut Chart */}
        <div className="glass-morphism rounded-[2.5rem] p-8 border border-white/40 shadow-sm flex flex-col">
          <h3 className="text-xl font-black text-primary-950 mb-2">توزيع ميول هولاند</h3>
          <p className="text-xs font-bold text-slate-500 mb-8">التحليل النوعي للبيئة المهنية المفضلة</p>
          
          <div className="h-[300px] w-full relative flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={hollandData}
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={8}
                  dataKey="value"
                  onMouseEnter={(_, index) => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(-1)}
                >
                  {hollandData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color} 
                      stroke="none"
                      fillOpacity={activeIndex === -1 || activeIndex === index ? 1 : 0.3}
                      className="transition-all duration-300"
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-black text-primary-950">
                {activeIndex === -1 
                  ? Math.round((hollandData[0].value / totalHollandPoints) * 100)
                  : Math.round((hollandData[activeIndex].value / totalHollandPoints) * 100)}%
              </span>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                {activeIndex === -1 ? hollandData[0].name.split(' ')[0] : hollandData[activeIndex].name.split(' ')[0]}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            {hollandData.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-[10px] font-bold text-slate-700">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Personality Radar Chart */}
        <div className="lg:col-span-1 glass-morphism rounded-[2.5rem] p-8 border border-white/40 shadow-sm min-h-[400px] flex flex-col">
          <h3 className="text-xl font-black text-primary-950 mb-2">توازن السمات الشخصية</h3>
          <p className="text-xs font-bold text-slate-500 mb-8">متوسط الدرجات المعيارية للطلبة</p>
          
          <div className="h-[300px] w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={personalityData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 12, fontWeight: 'bold' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} hide />
                <Radar 
                  name="المتوسط العام" 
                  dataKey="A" 
                  stroke="#8b5cf6" 
                  fill="#8b5cf6" 
                  fillOpacity={0.4} 
                  strokeWidth={3}
                />
                <Tooltip content={<CustomTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-6 p-4 bg-primary-50 rounded-2xl border border-primary-100 flex gap-3 items-start">
            <Info className="text-primary-600 shrink-0" size={20} />
            <p className="text-[10px] font-bold text-primary-900 leading-relaxed">
              تظهر البيانات تقارباً في مستويات "الانبساط" و "الانفتاح" مما يشير إلى جيل يميل للتفاعل الاجتماعي واستكشاف الجديد.
            </p>
          </div>
        </div>

        {/* Comparative Trends - Area Chart (New) */}
        <div className="lg:col-span-2 glass-morphism rounded-[2.5rem] p-8 border border-white/40 shadow-sm relative overflow-hidden group">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-black text-primary-950">نمو مؤشرات الأداء</h3>
              <p className="text-xs font-bold text-slate-500 mt-1">تحليل زمني لمحاكاة تفاعل الطلاب مع الاختبارات</p>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={[
                  { name: 'يناير', a: 400, b: 240 },
                  { name: 'فبراير', a: 300, b: 139 },
                  { name: 'مارس', a: 200, b: 980 },
                  { name: 'أبريل', a: 278, b: 390 },
                  { name: 'مايو', a: 189, b: 480 },
                  { name: 'يونيو', a: 239, b: 380 },
                  { name: 'يوليو', a: 349, b: 430 },
                ]}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                <YAxis hide />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="a" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorA)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

