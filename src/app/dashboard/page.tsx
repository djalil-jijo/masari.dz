"use client";

import React, { useState } from 'react';
import RecommendationsView from '@/components/recommendations/RecommendationsView';
import ComparisonTool from '@/components/recommendations/ComparisonTool';
import StudentProfile from '@/components/dashboard/StudentProfile';
import TestResults from '@/components/dashboard/TestResults';
import StrengthsAnalysis from '@/components/dashboard/StrengthsAnalysis';
import SkillDevelopmentPlan from '@/components/dashboard/SkillDevelopmentPlan';
import StudentVisualAnalytics from '@/components/dashboard/StudentVisualAnalytics';
import { 
  LayoutDashboard, 
  GraduationCap, 
  GitCompare, 
  User, 
  LogOut, 
  Bell, 
  ClipboardList, 
  Zap, 
  Target,
  Menu,
  X,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState<'profile' | 'results' | 'strengths' | 'recommendations' | 'comparison' | 'skill-plan' | 'analytics'>('results');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Load results from localStorage if available
  const [userHolland] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('user_holland');
      return saved ? JSON.parse(saved) : ["I", "S", "R"];
    }
    return ["I", "S", "R"];
  });

  const [userAbilities] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('user_abilities');
      return saved ? JSON.parse(saved) : ["M", "L", "Mem"];
    }
    return ["M", "L", "Mem"];
  });

  const [userPersonality] = useState<any>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('user_personality');
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });

  return (
    <div className="min-h-screen bg-transparent font-arabic flex">
      {/* Sidebar */}
      <aside className="w-64 glass-morphism border-l border-white/20 hidden lg:flex flex-col">
        <div className="p-6 border-b border-slate-100 ">
           <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
             <img src="/logo.jpg" alt="مساري" className="h-10 w-auto mix-blend-multiply" />
           </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
           {[
             { id: 'profile', label: 'الملف الشخصي', icon: <User size={20} /> },
             { id: 'results', label: 'نتائج الاختبارات', icon: <ClipboardList size={20} /> },
             { id: 'strengths', label: 'مهارات أكاديمية', icon: <Zap size={20} /> },
             { id: 'analytics', label: 'مهارات مهنية', icon: <TrendingUp size={20} /> },
             { id: 'recommendations', label: 'توصيات أكاديمية', icon: <GraduationCap size={20} /> },
             { id: 'comparison', label: 'أداة المقارنة', icon: <GitCompare size={20} /> },
             { id: 'skill-plan', label: 'خطة تطوير المهارات', icon: <Target size={20} /> },
           ].map((item) => (
             <button 
               key={item.id}
               onClick={() => { setActiveTab(item.id as any); setIsSidebarOpen(false); }}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === item.id ? 'bg-primary-50  text-primary-600' : 'text-slate-500 hover:bg-slate-50 '}`}
             >
               {item.icon}
               {item.label}
             </button>
           ))}
        </nav>

        <div className="p-4 border-t border-slate-100 ">
           <div className="p-4 rounded-2xl bg-white/60 flex items-center gap-3 border border-indigo-100/30 shadow-sm">
              <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center font-bold text-primary-600">أ</div>
              <div className="flex-1 overflow-hidden">
                 <div className="text-xs font-bold text-slate-900 truncate">أحمد بوعلام</div>
                 <div className="text-[10px] text-slate-500 truncate">ahmed@student.com</div>
              </div>
              <Link href="/login" onClick={() => localStorage.removeItem('userRole')} title="تسجيل الخروج">
                 <LogOut size={16} className="text-slate-500 cursor-pointer hover:text-red-500 transition-colors" />
              </Link>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 glass-morphism bg-white/60 border-b border-white/20 px-4 md:px-8 flex items-center justify-between sticky top-0 z-20">
           <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 text-slate-500 hover:text-primary-600 lg:hidden"
                aria-label="القائمة"
              >
                <Menu size={24} />
              </button>
              <h2 className="text-lg font-bold text-slate-800 ">لوحة تحكم التلميذ</h2>
           </div>
           <div className="flex items-center gap-4">
              <button className="p-2 text-slate-500 hover:text-primary-600 relative">
                 <Bell size={20} />
                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-8 h-8 rounded-full bg-slate-100  border border-slate-200  lg:hidden"></div>
           </div>
        </header>

         <div className="flex-1 overflow-y-auto p-4 md:p-8">
            {activeTab === 'profile' && <StudentProfile />}
            {activeTab === 'results' && (
              <TestResults 
                userHolland={userHolland} 
                userAbilities={userAbilities} 
                userPersonality={userPersonality}
              />
            )}
            {activeTab === 'analytics' && (
              <StudentVisualAnalytics 
                userHolland={userHolland} 
                userAbilities={userAbilities} 
                userPersonality={userPersonality}
              />
            )}
            {activeTab === 'strengths' && <StrengthsAnalysis />}
            {activeTab === 'recommendations' && (
              <RecommendationsView 
                userHolland={userHolland} 
                userAbilities={userAbilities} 
                userPersonality={userPersonality}
              />
            )}
            {activeTab === 'comparison' && (
              <ComparisonTool userHolland={userHolland} userAbilities={userAbilities} />
            )}
            {activeTab === 'skill-plan' && <SkillDevelopmentPlan />}
         </div>
       </main>

       {/* Mobile Sidebar Overlay */}
       {isSidebarOpen && (
         <div 
           className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] lg:hidden animate-fade-in"
           onClick={() => setIsSidebarOpen(false)}
         >
           <aside 
             className="absolute top-0 right-0 w-72 h-full glass-morphism shadow-2xl flex flex-col animate-slide-in-right"
             onClick={(e) => e.stopPropagation()}
           >
             <div className="p-6 border-b border-slate-100  flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold italic">M</div>
                  <span className="text-xl font-bold text-slate-900 ">مساري</span>
                </Link>
                <button 
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 text-slate-500 hover:text-red-500 transition-colors"
                >
                  <X size={20} />
                </button>
             </div>
             
             <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {[
                  { id: 'profile', label: 'الملف الشخصي', icon: <User size={20} /> },
                  { id: 'results', label: 'نتائج الاختبارات', icon: <ClipboardList size={20} /> },
                  { id: 'strengths', label: 'مهارات أكاديمية', icon: <Zap size={20} /> },
                  { id: 'analytics', label: 'مهارات مهنية', icon: <TrendingUp size={20} /> },
                  { id: 'recommendations', label: 'توصيات أكاديمية', icon: <GraduationCap size={20} /> },
                  { id: 'comparison', label: 'أداة المقارنة', icon: <GitCompare size={20} /> },
                  { id: 'skill-plan', label: 'خطة تطوير المهارات', icon: <Target size={20} /> },
                ].map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => { setActiveTab(item.id as any); setIsSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === item.id ? 'bg-primary-600 text-white shadow-md shadow-primary-600/20' : 'text-slate-500 hover:bg-white/50  hover:text-primary-600'}`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
                 
                <Link href="/login" onClick={() => localStorage.removeItem('userRole')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-red-500 hover:bg-red-50 transition-all mt-4">
                   <LogOut size={20} />
                   تسجيل الخروج
                </Link>
             </nav>
           </aside>
         </div>
       )}
    </div>
  );
}
