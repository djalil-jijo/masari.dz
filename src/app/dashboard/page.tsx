"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RecommendationsView from '@/components/recommendations/RecommendationsView';
import ComparisonTool from '@/components/recommendations/ComparisonTool';
import StudentProfile from '@/components/dashboard/StudentProfile';
import TestResults from '@/components/dashboard/TestResults';
import StrengthsAnalysis from '@/components/dashboard/StrengthsAnalysis';
import SkillDevelopmentPlan from '@/components/dashboard/SkillDevelopmentPlan';
import StudentVisualAnalytics from '@/components/dashboard/StudentVisualAnalytics';
import StudentHome from '@/components/dashboard/StudentHome';
import {
  Home,
  BookOpen,
  Heart,
  Clock,
  Settings,
  LogOut,
  Bell,
  Menu,
  X,
  Search,
  ChevronDown,
  ShieldCheck,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { getCurrentUser, clearSession } from '@/lib/auth';
import { UserData } from '@/lib/data/mockUsers';

type StudentTab =
  | 'home'
  | 'library'
  | 'favorites'
  | 'history'
  | 'guide'
  | 'settings'
  | 'profile'
  | 'results'
  | 'strengths'
  | 'analytics'
  | 'recommendations'
  | 'comparison'
  | 'skill-plan';

const NAV_ITEMS: { id: StudentTab; label: string; icon: React.ReactNode }[] = [
  { id: 'home',      label: 'الرئيسية',         icon: <Home size={19} /> },
  { id: 'library',   label: 'مكتبة المقاييس',    icon: <BookOpen size={19} /> },
  { id: 'favorites', label: 'مفضلاتي',          icon: <Heart size={19} /> },
  { id: 'history',   label: 'سجل البحث',        icon: <Clock size={19} /> },
  { id: 'guide',     label: 'دليل الإستخدام',   icon: <BookOpen size={19} /> },
  { id: 'settings',  label: 'إعدادات الحساب',   icon: <Settings size={19} /> },
];

export default function StudentDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<StudentTab>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  // Authentication Guard: Only logged-in STUDENT users can access this profile
  useEffect(() => {
    const user = getCurrentUser();
    const role = localStorage.getItem('userRole');

    if (!user || role !== 'STUDENT') {
      router.push('/login?unauthorized=true');
    } else {
      setCurrentUser(user);
      setIsLoadingAuth(false);
    }
  }, [router]);

  const [userHolland] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('user_holland');
      return saved ? JSON.parse(saved) : ['I', 'S', 'R'];
    }
    return ['I', 'S', 'R'];
  });

  const [userAbilities] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('user_abilities');
      return saved ? JSON.parse(saved) : ['M', 'L', 'Mem'];
    }
    return ['M', 'L', 'Mem'];
  });

  const [userPersonality] = useState<any>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('user_personality');
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });

  const handleLogout = () => {
    clearSession();
    router.push('/login');
  };

  const navigate = (tab: string) => {
    if (tab === 'psychological' || tab === 'professional') {
      setActiveTab('results');
    } else {
      setActiveTab(tab as StudentTab);
    }
    setIsSidebarOpen(false);
  };

  // Loading barrier during auth verification
  if (isLoadingAuth) {
    return (
      <div className="min-h-screen bg-[#f7f5fd] flex flex-col items-center justify-center font-arabic" dir="rtl">
        <div className="w-16 h-16 rounded-full border-4 border-purple-200 border-t-[#38266f] animate-spin mb-4"></div>
        <p className="text-[#2e1d68] font-bold text-base">جاري التحقق من بيانات حساب الطالبة...</p>
        <p className="text-gray-500 text-xs mt-1">يتم التحقق من الصلاحيات والبروفايل الشخصي</p>
      </div>
    );
  }

  const Sidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <aside
      className={`${
        mobile
          ? 'fixed inset-y-0 right-0 z-50 w-64 shadow-2xl animate-slide-in-right p-3'
          : 'hidden lg:block w-56 flex-shrink-0'
      }`}
      dir="rtl"
    >
      <div className="bg-[#38266f] rounded-3xl p-3 flex flex-col justify-between shadow-lg h-full min-h-[580px]">
        {/* Mobile close */}
        {mobile && (
          <div className="flex justify-end p-2">
            <button onClick={() => setIsSidebarOpen(false)} className="text-white/70 hover:text-white">
              <X size={20} />
            </button>
          </div>
        )}

        {/* Nav Items */}
        <nav className="space-y-1.5 pt-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id || (item.id === 'home' && activeTab === 'library');
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all text-right ${
                  isActive
                    ? 'bg-[#513c90] text-white shadow-sm'
                    : 'text-purple-200/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <span className={isActive ? 'text-white' : 'text-purple-300'}>
                  {item.icon}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Bottom Logout */}
        <div className="pt-4 border-t border-purple-400/20 px-2 pb-2">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-red-300 hover:bg-red-500/10 text-xs font-bold transition-colors cursor-pointer"
          >
            <span>تسجيل الخروج</span>
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );

  return (
    <div className="min-h-screen bg-[#f7f5fd] font-arabic flex flex-col" dir="rtl">
      
      {/* ── Top Header ── */}
      <header className="h-20 bg-white border-b border-purple-100/60 px-4 md:px-8 flex items-center justify-between sticky top-0 z-30 shadow-xs">
        
        {/* Right side: Logo & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-purple-900 hover:text-purple-700 lg:hidden"
            aria-label="القائمة"
          >
            <Menu size={24} />
          </button>

          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex flex-col text-right">
              <span className="text-2xl font-black text-[#2e1d68] tracking-tight group-hover:opacity-90">
                Masari
              </span>
              <span className="text-[10px] text-purple-600 font-bold -mt-1">
                مقاييس . دعم . توجيه أفضل
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-purple-100/80 flex items-center justify-center text-purple-700 font-black text-xl shadow-xs">
              🎓
            </div>
          </Link>
        </div>

        {/* Center: Search pill with purple border */}
        <div className="hidden sm:flex items-center justify-between bg-white border border-purple-200/80 rounded-full px-5 py-2.5 w-72 md:w-96 shadow-xs hover:border-purple-300 transition-colors">
          <input
            type="text"
            placeholder="البحث عن مقياس ..."
            className="bg-transparent text-sm text-[#2e1d68] placeholder:text-gray-400 outline-none flex-1 text-right font-medium"
          />
          <Search size={18} className="text-purple-700 mr-2 shrink-0" />
        </div>

        {/* Left side: Avatar + Notifications (matching Image 1) */}
        <div className="flex items-center gap-4">
          
          {/* Bell with red badge '1' */}
          <button className="relative p-2 text-gray-600 hover:text-purple-700 transition-colors">
            <Bell size={21} />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-black rounded-full flex items-center justify-center">
              1
            </span>
          </button>

          <div className="h-6 w-[1px] bg-gray-200 hidden sm:block"></div>

          {/* User profile dropdown - click to view profile/settings */}
          <div 
            onClick={() => setActiveTab('settings')}
            className="flex items-center gap-2.5 cursor-pointer hover:opacity-85 transition-opacity"
            title="إعدادات الحساب والملف الشخصي"
          >
            <ChevronDown size={14} className="text-gray-500" />
            <div className="text-right hidden sm:block">
              <p className="text-xs font-black text-[#2e1d68] leading-tight">
                {currentUser?.name || 'مرحبا بك'}
              </p>
              <p className="text-[11px] text-purple-600 font-bold">
                {currentUser?.title || 'طالبة'}
              </p>
            </div>
            {/* Student Girl Avatar */}
            <div className="w-10 h-10 rounded-full bg-[#eadeff] border-2 border-purple-300 overflow-hidden flex items-center justify-center shadow-xs">
              <span className="text-lg">{currentUser?.avatar || '👧'}</span>
            </div>
          </div>

        </div>
      </header>

      {/* ── Main Layout (Sidebar on Right, Content on Left in RTL) ── */}
      <div className="flex-1 flex px-4 md:px-8 py-6 gap-6 max-w-[1550px] mx-auto w-full">
        
        {/* Main Content Area (Left) */}
        <main className="flex-1 min-w-0">
          {activeTab === 'home' && <StudentHome onNavigate={navigate} />}
          {activeTab === 'library' && <StudentHome onNavigate={navigate} />}
          {activeTab === 'results' && (
            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm">
              <TestResults
                userHolland={userHolland}
                userAbilities={userAbilities}
                userPersonality={userPersonality}
              />
            </div>
          )}
          {activeTab === 'profile' && (
            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm">
              <StudentProfile />
            </div>
          )}
          {activeTab === 'strengths' && (
            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm">
              <StrengthsAnalysis />
            </div>
          )}
          {activeTab === 'analytics' && (
            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm">
              <StudentVisualAnalytics
                userHolland={userHolland}
                userAbilities={userAbilities}
                userPersonality={userPersonality}
              />
            </div>
          )}
          {activeTab === 'recommendations' && (
            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm">
              <RecommendationsView
                userHolland={userHolland}
                userAbilities={userAbilities}
                userPersonality={userPersonality}
              />
            </div>
          )}
          {activeTab === 'comparison' && (
            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm">
              <ComparisonTool userHolland={userHolland} userAbilities={userAbilities} />
            </div>
          )}
          {activeTab === 'skill-plan' && (
            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm">
              <SkillDevelopmentPlan />
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-sm">
              <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
                  {currentUser?.avatar || '👧'}
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#2e1d68]">{currentUser?.name}</h3>
                  <p className="text-sm font-bold text-purple-600">{currentUser?.title} • {currentUser?.email}</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold text-gray-500">حالة الحساب</span>
                    <span className="text-sm font-black text-emerald-700">نشط ومعتمد ✓</span>
                  </div>
                  <ShieldCheck className="text-emerald-600" />
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                  <span className="block text-xs font-bold text-gray-500">المؤسسة التعليمية</span>
                  <span className="text-sm font-black text-[#2e1d68]">{currentUser?.school || 'ثانوية الرياضيات بالقبة'}</span>
                </div>
                <div className="pt-4 flex gap-3">
                  <button
                    onClick={() => setActiveTab('home')}
                    className="bg-[#38266f] text-white px-6 py-2.5 rounded-full font-bold text-sm cursor-pointer"
                  >
                    العودة لمكتبة المقاييس
                  </button>
                  <button
                    onClick={handleLogout}
                    className="bg-red-50 hover:bg-red-100 text-red-600 px-6 py-2.5 rounded-full font-bold text-sm cursor-pointer"
                  >
                    تسجيل الخروج
                  </button>
                </div>
              </div>
            </div>
          )}
          {(['favorites', 'history', 'guide'] as StudentTab[]).includes(activeTab) && (
            <div className="bg-white rounded-3xl p-12 border border-purple-100 text-center shadow-sm">
              <h3 className="text-xl font-bold text-[#2e1d68] mb-2">
                {NAV_ITEMS.find((i) => i.id === activeTab)?.label}
              </h3>
              <p className="text-gray-500 font-bold">هذا القسم خاص ببروفايلك الطلابي وقيد التحديث المستمر.</p>
              <button
                onClick={() => setActiveTab('home')}
                className="mt-6 bg-[#38266f] text-white px-6 py-2 rounded-full font-bold text-sm"
              >
                العودة للرئيسية
              </button>
            </div>
          )}
        </main>

        {/* Desktop Sidebar (Right) */}
        <Sidebar />

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <Sidebar mobile />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
