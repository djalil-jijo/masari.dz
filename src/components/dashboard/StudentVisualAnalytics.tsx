"use client";

import React, { useMemo } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  PieChart, Pie, Cell
} from 'recharts';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Lightbulb, 
  BookOpen, 
  Award, 
  Target, 
  ArrowRight,
  Zap,
  Star
} from 'lucide-react';

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f59e0b', '#10b981'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-morphism p-4 border border-white/40 shadow-xl rounded-2xl font-arabic text-right min-w-[150px] bg-white/90">
        <p className="font-black text-primary-950 mb-1">{label || payload[0].name}</p>
        <div className="h-px bg-slate-200/50 my-2" />
        <div className="flex items-center justify-between gap-4">
          <span className="font-black text-primary-600">{payload[0].value}</span>
          <span className="text-xs font-bold text-slate-500">الدرجة</span>
        </div>
      </div>
    );
  }
  return null;
};

interface StudentVisualAnalyticsProps {
  userHolland: string[];
  userAbilities: string[];
  userPersonality: any;
}

export default function StudentVisualAnalytics({ userHolland, userAbilities, userPersonality }: StudentVisualAnalyticsProps) {
  
  // Data for Holland Radar
  const hollandData = useMemo(() => {
    const allTypes = [
      { name: 'واقعي (R)', code: 'R', full: 'Realistic' },
      { name: 'بحثي (I)', code: 'I', full: 'Investigative' },
      { name: 'فني (A)', code: 'A', full: 'Artistic' },
      { name: 'اجتماعي (S)', code: 'S', full: 'Social' },
      { name: 'مبادر (E)', code: 'E', full: 'Enterprising' },
      { name: 'تقليدي (C)', code: 'C', full: 'Conventional' },
    ];
    return allTypes.map(t => ({
      subject: t.name,
      A: userHolland.includes(t.code) ? 85 + Math.random() * 10 : 30 + Math.random() * 20,
      fullMark: 100
    }));
  }, [userHolland]);

  // Data for Abilities Bar
  const abilitiesData = useMemo(() => {
    const abilityMap: Record<string, string> = {
      'L': 'اللغوية',
      'M': 'الرياضية',
      'S': 'المكانية',
      'Mem': 'الذاكرة'
    };
    return userAbilities.map(a => ({
      name: abilityMap[a] || a,
      value: 75 + Math.random() * 20
    }));
  }, [userAbilities]);

  // Advice based on dominant Holland type
  const advice = useMemo(() => {
    const dominant = userHolland[0];
    switch(dominant) {
      case 'R': return "أنت تميل للعمل الميداني والتقني. ننصحك بالتركيز على المهارات اليدوية والهندسية المتطورة.";
      case 'I': return "عقلك تحليلي بامتياز. استمر في تطوير مهارات البحث العلمي والتحليل الإحصائي.";
      case 'A': return "إبداعك هو محركك الأساسي. حاول دمج مهاراتك الفنية مع التكنولوجيا الحديثة.";
      case 'S': return "لديك مهارات تواصل استثنائية. ركز على التدريب في مجالات القيادة والتوجيه المهني.";
      case 'E': return "أنت قائد بالفطرة. ننصحك بدراسة إدارة الأعمال وفنون التفاوض.";
      case 'C': return "تنظيمك ودقتك مذهلان. مهارات إدارة البيانات والأنظمة البرمجية هي ملعبه المفضل.";
      default: return "استمر في استكشاف مهاراتك المتعددة لتحديد مسارك الأمثل.";
    }
  }, [userHolland]);

  // Training Programs based on Holland
  const programs = useMemo(() => {
    const dominant = userHolland[0];
    const basePrograms = [
      { title: "أساسيات التفكير النقدي", duration: "4 أسابيع", level: "مبتدئ" },
      { title: "التواصل الفعال في بيئة العمل", duration: "3 أسابيع", level: "متوسط" }
    ];
    
    const specialized: Record<string, any[]> = {
      'R': [{ title: "مقدمة في الروبوتات", duration: "6 أسابيع", level: "متقدم" }],
      'I': [{ title: "تحليل البيانات الضخمة", duration: "8 أسابيع", level: "متقدم" }],
      'A': [{ title: "تصميم واجهة المستخدم (UI/UX)", duration: "5 أسابيع", level: "متوسط" }],
      'S': [{ title: "الذكاء العاطفي والقيادة", duration: "4 أسابيع", level: "متقدم" }],
      'E': [{ title: "ريادة الأعمال للمبتدئين", duration: "10 أسابيع", level: "مبتدئ" }],
      'C': [{ title: "إدارة قواعد البيانات", duration: "6 أسابيع", level: "متوسط" }],
    };

    return [...specialized[dominant] || [], ...basePrograms];
  }, [userHolland]);

  return (
    <div className="space-y-8 animate-fade-in font-arabic">
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <h2 className="text-3xl font-black text-primary-950 mb-2">تحليل بياناتي المهنية</h2>
          <p className="text-slate-700 font-bold">رؤى تفصيلية حول شخصيتك الأكاديمية والمهنية بناءً على نتائجك</p>
        </div>
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-primary-600/20">
          <Star size={18} fill="currentColor" />
          <span>ملف متميز</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Holland Radar Chart */}
        <div className="glass-morphism rounded-[2.5rem] p-8 border border-white/40 shadow-sm flex flex-col h-[450px]">
          <div className="flex items-center gap-3 mb-6">
             <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                <Target size={20} />
             </div>
             <h3 className="text-xl font-black text-primary-950">بصمة الميول (Holland)</h3>
          </div>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={hollandData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 12, fontWeight: 'bold' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} hide />
                <Radar 
                  name="مستواك" 
                  dataKey="A" 
                  stroke="#6366f1" 
                  fill="#6366f1" 
                  fillOpacity={0.4} 
                  strokeWidth={3}
                />
                <Tooltip content={<CustomTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Abilities Bar Chart */}
        <div className="glass-morphism rounded-[2.5rem] p-8 border border-white/40 shadow-sm flex flex-col h-[450px]">
          <div className="flex items-center gap-3 mb-6">
             <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                <Zap size={20} />
             </div>
             <h3 className="text-xl font-black text-primary-950">توزيع القدرات العقلية</h3>
          </div>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={abilitiesData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 13, fill: '#64748b', fontWeight: 'bold' }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" fill="#10b981" radius={[8, 8, 0, 0]} barSize={45} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Advice Section */}
        <div className="lg:col-span-1 rounded-[2.5rem] p-8 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white shadow-xl">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
            <Lightbulb size={28} className="text-amber-300" />
          </div>
          <h3 className="text-2xl font-black mb-4 text-white">توجيهات مخصصة لك</h3>
          <p className="text-white text-lg leading-relaxed font-bold mb-8">
            "{advice}"
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/10">
              <Award className="text-amber-300 shrink-0" size={20} />
              <span className="text-xs font-bold">نقترح عليك التركيز على التخصصات الهندسية</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/10">
              <TrendingUp className="text-emerald-300 shrink-0" size={20} />
              <span className="text-xs font-bold">نموك في المهارات الرياضية ممتاز جداً</span>
            </div>
          </div>
        </div>

        {/* Training Programs */}
        <div className="lg:col-span-2 glass-morphism rounded-[2.5rem] p-8 border border-white/40 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-primary-950 flex items-center gap-2">
              <BookOpen size={24} className="text-primary-600" />
              برامج تدريبية مقترحة لتطوير مهاراتك
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {programs.map((prog, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-primary-50 transition-colors">
                    <Zap size={20} className="text-primary-600" />
                  </div>
                  <span className="text-[10px] font-black px-2 py-1 bg-primary-100 text-primary-700 rounded-lg">{prog.level}</span>
                </div>
                <h4 className="font-black text-primary-950 mb-2">{prog.title}</h4>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-500">المدة: {prog.duration}</span>
                  <button className="flex items-center gap-1 text-xs font-black text-primary-600 hover:gap-2 transition-all">
                    سجل الآن
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="w-full mt-8 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10">
            استكشف المزيد من الدورات التدريبية
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
