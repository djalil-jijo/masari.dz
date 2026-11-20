"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Home,
  BookOpen,
  Users,
  BarChart3,
  Video,
  Mail,
  Settings,
  LogOut,
  Bell,
  Menu,
  X,
  Search,
  ChevronDown,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';
import CounselorHome from '@/components/dashboard/CounselorHome';
import StudentList from '@/components/dashboard/StudentList';
import ResultAnalysis from '@/components/dashboard/ResultAnalysis';
import CounselorProfile from '@/components/dashboard/CounselorProfile';
import CounselorSessions from '@/components/dashboard/CounselorSessions';
import StudentFilesView from '@/components/dashboard/StudentFilesView';
import MessagesView from '@/components/dashboard/MessagesView';
import CounselorSettings from '@/components/dashboard/CounselorSettings';
import CounselorMonitoring from '@/components/dashboard/CounselorMonitoring';
import { getCurrentUser, clearSession } from '@/lib/auth';
import { UserData } from '@/lib/data/mockUsers';

type CounselorTab =
  | 'home'
  | 'scales-bank'
  | 'beneficiaries'
  | 'reports'
  | 'remote-consult'
  | 'messages'
  | 'settings'
  | 'profile'
  | 'sessions'
  | 'student-files';

const NAV_ITEMS: { id: CounselorTab; label: string; icon: React.ReactNode }[] = [
  { id: 'home',           label: 'الرئيسية',              icon: <Home size={18} /> },
  { id: 'scales-bank',    label: 'بنك المقاييس',           icon: <BookOpen size={18} /> },
  { id: 'beneficiaries',  label: 'إدارة المستفيدين',      icon: <Users size={18} /> },
  { id: 'reports',        label: 'تقارير ونتائج',          icon: <BarChart3 size={18} /> },
  { id: 'remote-consult', label: 'الاستشارات عن بعد',     icon: <Video size={18} /> },
  { id: 'messages',       label: 'الرسائل والإشعارات',    icon: <Mail size={18} /> },
  { id: 'settings',       label: 'الإعدادات',              icon: <Settings size={18} /> },
];

export default function CounselorDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<CounselorTab>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  // Authentication Guard: Only logged-in COUNSELOR users can access this account
  useEffect(() => {
    const user = getCurrentUser();
    const role = localStorage.getItem('userRole');

    if (!user || role !== 'COUNSELOR') {
      router.push('/login?unauthorized=true');
    } else {
      setCurrentUser(user);
      setIsLoadingAuth(false);
    }
  }, [router]);

  const handleLogout = () => {
    clearSession();
    router.push('/login');
  };

  const navigate = (tab: string) => {
    setActiveTab(tab as CounselorTab);
    setIsSidebarOpen(false);
  };

  // Loading barrier during auth verification
  if (isLoadingAuth) {
    return (
      <div className="min-h-screen bg-[#f7f5fd] flex flex-col items-center justify-center font-arabic" dir="rtl">
        <div className="w-16 h-16 rounded-full border-4 border-purple-200 border-t-[#38266f] animate-spin mb-4"></div>
        <p className="text-[#2e1d68] font-bold text-base">جاري التحقق من بيانات حساب مستشار الصحة المدرسية...</p>
        <p className="text-gray-500 text-xs mt-1">بروفايل أخصائي التوجيه والصحة المدرسية</p>
      </div>
    );
  }

  const Sidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <aside
      className={`${
        mobile
          ? 'fixed inset-y-0 right-0 z-50 w-72 shadow-2xl animate-slide-in-right p-3'
          : 'hidden lg:block w-64 flex-shrink-0'
      }`}
      dir="rtl"
    >
      <div className="bg-[#38266f] rounded-3xl p-3 flex flex-col justify-between shadow-lg h-full min-h-[640px]">
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
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all text-right cursor-pointer ${
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

          {/* Logout button in sidebar (matching Image 3) */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold text-red-300 hover:bg-red-500/10 transition-all text-right cursor-pointer mt-2"
          >
            <span>تسجيل الخروج</span>
            <LogOut size={18} />
          </button>
        </nav>

        {/* Bottom Platform Card (matching Image 3: منصة مساري للتوجيه، الدعم، والنجاح) */}
        <div className="pt-4 px-2 pb-2">
          <div className="bg-[#fef9ee] rounded-2xl p-4 text-center border border-amber-200/60 shadow-xs flex flex-col items-center justify-center">
            <div className="w-11 h-11 rounded-2xl bg-[#ede8fc] flex items-center justify-center text-purple-700 font-black text-xl mb-2 shadow-xs">
              🎓
            </div>
            <h4 className="text-xs font-black text-[#2e1d68]">منصة مساري</h4>
            <p className="text-[10px] text-gray-600 font-bold mt-0.5">للتوجيه، الدعم، والنجاح</p>
          </div>
        </div>
      </div>
    </aside>
  );

  return (
    <div className="min-h-screen bg-[#f7f5fd] font-arabic flex flex-col" dir="rtl">
      
      {/* ── Top Header ── */}
      <header className="h-20 bg-white border-b border-purple-100/60 px-4 md:px-8 flex items-center justify-between sticky top-0 z-30 shadow-xs">
        
        {/* Right side: Logo + Schoolboy mascot & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-purple-900 hover:text-purple-700 lg:hidden"
            aria-label="القائمة"
          >
            <Menu size={24} />
          </button>

          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex flex-col text-right">
              <span className="text-2xl font-black text-[#2e1d68] tracking-tight group-hover:opacity-90">
                Masari
              </span>
              <span className="text-[10px] text-purple-600 font-bold -mt-1">
                مقاييس . دعم . توجيه أفضل
              </span>
            </div>
            {/* Mascot Student Boy Icon */}
            <div className="w-10 h-10 rounded-xl bg-purple-100/80 flex items-center justify-center text-xl shadow-xs">
              🎒
            </div>
          </Link>
        </div>

        {/* Center: Search pill */}
        <div className="hidden sm:flex items-center justify-between bg-white border border-purple-200/80 rounded-full px-5 py-2.5 w-72 md:w-96 shadow-xs hover:border-purple-300 transition-colors">
          <input
            type="text"
            placeholder="... البحث عن مقياس"
            className="bg-transparent text-sm text-[#2e1d68] placeholder:text-gray-400 outline-none flex-1 text-right font-medium"
          />
          <Search size={18} className="text-purple-700 mr-2 shrink-0" />
        </div>

        {/* Left side: Avatar + Notifications (matching Image 3) */}
        <div className="flex items-center gap-4">
          
          {/* Bell with red badge '2' */}
          <button className="relative p-2 text-gray-600 hover:text-purple-700 transition-colors">
            <Bell size={21} />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-black rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          <div className="h-6 w-[1px] bg-gray-200 hidden sm:block"></div>

          {/* User profile with Dr. Avatar */}
          <div 
            onClick={() => setActiveTab('settings')}
            className="flex items-center gap-2.5 cursor-pointer hover:opacity-85 transition-opacity"
            title="إعدادات الحساب والملف الشخصي"
          >
            <ChevronDown size={14} className="text-gray-500" />
            <div className="text-right hidden sm:block">
              <p className="text-xs font-black text-[#2e1d68] leading-tight">
                {currentUser?.name || 'د. خولة بلعيد'}
              </p>
              <p className="text-[11px] text-purple-600 font-bold">
                {currentUser?.title || 'أخصائية نفسية صحة مدرسية'}
              </p>
            </div>
            {/* Doctor Avatar */}
            <div className="w-10 h-10 rounded-full bg-[#fdecd5] border-2 border-purple-300 overflow-hidden flex items-center justify-center shadow-xs">
              <span className="text-lg">{currentUser?.avatar || '🧕'}</span>
            </div>
          </div>

        </div>
      </header>

      {/* ── Main Layout (Sidebar on Right, Content on Left in RTL) ── */}
      <div className="flex-1 flex px-4 md:px-8 py-6 gap-6 max-w-[1550px] mx-auto w-full">
        
        {/* Main Content Area (Left) */}
        <main className="flex-1 min-w-0">
          {activeTab === 'home' && (
            <CounselorHome onNavigate={navigate} counselorName={currentUser?.name || 'د. خولة بلعيد'} />
          )}
          {activeTab === 'scales-bank' && (
            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm">
              <ResultAnalysis />
            </div>
          )}
          {activeTab === 'beneficiaries' && (
            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm">
              <StudentList />
            </div>
          )}
          {activeTab === 'reports' && (
            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm">
              <CounselorMonitoring />
            </div>
          )}
          {activeTab === 'messages' && (
            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm">
              <MessagesView />
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-sm">
              <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
                  {currentUser?.avatar || '🧕'}
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#2e1d68]">{currentUser?.name}</h3>
                  <p className="text-sm font-bold text-purple-600">{currentUser?.title} • {currentUser?.email}</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold text-gray-500">القطاع والاعتماد</span>
                    <span className="text-sm font-black text-emerald-700">مستشار نفسي معتمد - قطاع الصحة المدرسية والتربية ✓</span>
                  </div>
                  <ShieldCheck className="text-emerald-600" />
                </div>
                <CounselorSettings />
              </div>
            </div>
          )}
          {activeTab === 'profile' && (
            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm">
              <CounselorProfile />
            </div>
          )}
          {activeTab === 'sessions' && (
            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm">
              <CounselorSessions />
            </div>
          )}
          {activeTab === 'student-files' && (
            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm">
              <StudentFilesView />
            </div>
          )}
          {activeTab === 'remote-consult' && (
            <div className="bg-white rounded-3xl p-12 border border-purple-100 text-center shadow-sm">
              <h3 className="text-xl font-bold text-[#2e1d68] mb-2">الاستشارات عن بعد</h3>
              <p className="text-gray-500 font-bold">جلسات الدعم النفسي المدرسي عن بعد قيد التشغيل.</p>
              <button
                onClick={() => setActiveTab('home')}
                className="mt-6 bg-[#38266f] text-white px-6 py-2 rounded-full font-bold text-sm cursor-pointer"
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
