"use client";

import React, { useState } from 'react';
import { 
  Users, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Bell, 
  Menu, 
  X, 
  Compass, 
  Activity,
  User,
  ClipboardList,
  Calendar,
  FileText,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';
import StudentList from '@/components/dashboard/StudentList';
import ResultAnalysis from '@/components/dashboard/ResultAnalysis';
import CounselorProfile from '@/components/dashboard/CounselorProfile';
import CounselorSessions from '@/components/dashboard/CounselorSessions';
import StudentFilesView from '@/components/dashboard/StudentFilesView';
import MessagesView from '@/components/dashboard/MessagesView';
import CounselorSettings from '@/components/dashboard/CounselorSettings';
import CounselorMonitoring from '@/components/dashboard/CounselorMonitoring';

export default function CounselorDashboardPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'assessments' | 'beneficiaries' | 'sessions' | 'student-files' | 'messages' | 'monitoring' | 'settings'>('profile');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent font-arabic flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 right-0 z-50 w-72 glass-morphism border-l border-white/20 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 border-b border-slate-100  flex items-center justify-between">
           <Link href="/" className="flex items-center gap-3">
             <img src="/logo.jpg" alt="مساري" className="h-10 w-auto mix-blend-multiply" />
             <div className="flex flex-col justify-center">
               <span className="text-[10px] text-indigo-500 font-bold uppercase tracking-wider mt-1">لوحة المستشار</span>
             </div>
           </Link>
           <button onClick={() => setIsSidebarOpen(false)} className="p-2 text-slate-500 hover:text-red-500 lg:hidden focus:ring-2 focus:ring-red-500/20 rounded-lg outline-none">
             <X size={20} />
           </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto mt-4">
           {[
             { id: 'profile', label: 'الملف الشخصي', icon: <User size={18} /> },
             { id: 'assessments', label: 'المقاييس النفسية والمهنية', icon: <ClipboardList size={18} /> },
             { id: 'beneficiaries', label: 'إدارة المستفيدين', icon: <Users size={18} /> },
             { id: 'sessions', label: 'الجلسات والاستشارات', icon: <Calendar size={18} /> },
             { id: 'student-files', label: 'ملفات التلاميذ', icon: <FileText size={18} /> },
             { id: 'messages', label: 'الرسائل والتواصل', icon: <MessageSquare size={18} /> },
             { id: 'monitoring', label: 'لوحة المراقبة والإحصاء', icon: <BarChart3 size={18} /> },
             { id: 'settings', label: 'الإعدادات', icon: <Settings size={18} /> },
           ].map((item) => (
             <button 
               key={item.id}
               onClick={() => { setActiveTab(item.id as any); setIsSidebarOpen(false); }}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all ${activeTab === item.id ? 'bg-primary-600 text-white shadow-md shadow-primary-600/20' : 'text-slate-500 hover:bg-white/50  hover:text-primary-600'}`}
             >
               {item.icon}
               <span className="text-xs truncate">{item.label}</span>
             </button>
           ))}
        </nav>

        <div className="p-4 border-t border-slate-100 ">
           <div className="p-4 rounded-2xl bg-white/60  flex items-center gap-3 border border-white/20">
              <div className="w-10 h-10 bg-primary-100  rounded-xl flex items-center justify-center font-bold text-primary-600">م</div>
              <div className="flex-1 overflow-hidden">
                 <div className="text-xs font-bold text-slate-900  truncate">المستشار التربوي</div>
                 <div className="text-[10px] text-slate-500 truncate">counselor@masari.com</div>
              </div>
              <Link href="/login" onClick={() => localStorage.removeItem('userRole')} title="تسجيل الخروج">
                 <LogOut size={16} className="text-slate-500 cursor-pointer hover:text-red-500 transition-colors" />
              </Link>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="h-16 glass-morphism bg-white/60 border-b border-white/20 px-4 md:px-8 flex items-center justify-between z-40">
           <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 text-slate-500 hover:text-indigo-600 lg:hidden"
              >
                <Menu size={24} />
              </button>
              <h2 className="text-sm md:text-lg font-bold text-slate-800 ">
                {activeTab === 'profile' && "الملف الشخصي"}
                {activeTab === 'assessments' && "المقاييس النفسية والمهنية"}
                {activeTab === 'beneficiaries' && "إدارة المستفيدين"}
                {activeTab === 'sessions' && "الجلسات والاستشارات"}
                {activeTab === 'student-files' && "ملفات التلاميذ"}
                {activeTab === 'messages' && "الرسائل والتواصل"}
                {activeTab === 'monitoring' && "لوحة المراقبة والإحصاء"}
                {activeTab === 'settings' && "الإعدادات"}
              </h2>
           </div>
           
           <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-50  rounded-lg border border-slate-100  text-[10px] font-bold text-slate-500">
                 <Activity size={12} className="text-green-500" />
                 النظام مستقر
              </div>
              <button className="p-2 text-slate-500 hover:text-indigo-600 relative transition-colors">
                 <Bell size={20} />
                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white "></span>
              </button>
           </div>
        </header>

         <div className="flex-1 overflow-y-auto bg-transparent p-4 md:p-8">
            {activeTab === 'profile' && <CounselorProfile />}
            {activeTab === 'assessments' && <ResultAnalysis />}
            {activeTab === 'beneficiaries' && <StudentList />}
            {activeTab === 'sessions' && <CounselorSessions />}
            {activeTab === 'student-files' && <StudentFilesView />}
            {activeTab === 'messages' && <MessagesView />}
            {activeTab === 'monitoring' && <CounselorMonitoring />}
            {activeTab === 'settings' && <CounselorSettings />}
         </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[45] lg:hidden animate-fade-in"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
