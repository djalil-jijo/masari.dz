"use client";

import React, { useState } from 'react';
import { 
  Users, 
  BarChart3, 
  LayoutDashboard, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Bell, 
  Menu, 
  X, 
  Compass, 
  Search,
  Filter,
  TrendingUp,
  Activity,
  User,
  ClipboardList,
  Calendar,
  FileText
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AdminDashboard from '@/components/dashboard/AdminDashboard';
import AdminUserManagement from '@/components/dashboard/AdminUserManagement';
import AdminAssessments from '@/components/dashboard/AdminAssessments';
import SystemReports from '@/components/dashboard/SystemReports';
import AdminSystemSettings from '@/components/dashboard/AdminSystemSettings';
import AdminContentManagement from '@/components/dashboard/AdminContentManagement';
import DataAnalytics from '@/components/dashboard/DataAnalytics';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'monitoring' | 'users' | 'assessments' | 'content' | 'reports' | 'settings' | 'analytics'>('monitoring');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent font-arabic flex">
      <aside className={`fixed inset-y-0 right-0 z-50 w-72 glass-morphism border-l border-white/20 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 border-b border-slate-100  flex items-center justify-between">
           <Link href="/" className="flex items-center gap-3">
             <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-600/30">
               <Compass size={24} />
             </div>
             <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900">مساري</span>
                <span className="text-[10px] text-primary-600 font-bold uppercase tracking-wider">لوحة الإدارة</span>
             </div>
           </Link>
           <button onClick={() => setIsSidebarOpen(false)} className="p-2 text-slate-500 hover:text-red-500 lg:hidden focus:ring-2 focus:ring-red-500/20 rounded-lg outline-none">
             <X size={20} />
           </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto mt-4">
           {[
             { id: 'monitoring', label: 'لوحة المراقبة والإحصاء', icon: <BarChart3 size={18} /> },
             { id: 'analytics', label: 'تحليلات بيانات الطلبة', icon: <TrendingUp size={18} /> },
             { id: 'users', label: 'إدارة المستخدمين والمهام', icon: <Users size={18} /> },
             { id: 'assessments', label: 'إدارة المقاييس', icon: <ClipboardList size={18} /> },
             { id: 'content', label: 'إدارة المحتوى والإعلانات', icon: <FileText size={18} /> },
             { id: 'reports', label: 'التقارير والسجلات', icon: <Activity size={18} /> },
             { id: 'settings', label: 'إعدادات النظام', icon: <Settings size={18} /> },
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

        <div className="p-4 border-t border-slate-200">
            <div className="p-4 rounded-2xl bg-white/60 flex items-center gap-3 border border-indigo-100/30 shadow-sm">
               <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center font-bold text-primary-600">م</div>
              <div className="flex-1 overflow-hidden">
                 <div className="text-xs font-bold text-slate-900 truncate">مدير النظام</div>
                 <div className="text-[10px] text-slate-600 font-medium truncate">admin@masari.com</div>
              </div>
              <Link href="/login" onClick={() => localStorage.removeItem('userRole')} title="تسجيل الخروج">
                 <LogOut size={16} className="text-slate-500 cursor-pointer hover:text-red-500 transition-colors" />
              </Link>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="h-16 glass-morphism border-b border-indigo-100/30 px-4 md:px-8 flex items-center justify-between z-40 bg-white/60">
           <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 text-slate-500 hover:text-indigo-600 lg:hidden"
              >
                <Menu size={24} />
              </button>
              <h2 className="text-sm md:text-lg font-bold text-slate-900">
                {activeTab === 'monitoring' && "لوحة المراقبة والإحصاء"}
                {activeTab === 'analytics' && "تحليلات بيانات الطلبة"}
                {activeTab === 'users' && "إدارة المستخدمين والمهام"}
                {activeTab === 'assessments' && "إدارة المقاييس والتخصصات"}
                {activeTab === 'content' && "إدارة المحتوى والمقالات"}
                {activeTab === 'reports' && "سجلات النظام والأنشطة"}
                {activeTab === 'settings' && "إعدادات النظام العامة"}
              </h2>
           </div>
           
           <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200 text-[10px] font-bold text-slate-600 shadow-sm">
                 <Activity size={12} className="text-emerald-600" />
                 النظام مستقر
              </div>
              <button className="p-2 text-slate-500 hover:text-indigo-600 relative transition-colors">
                 <Bell size={20} />
                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
              </button>
              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 hidden lg:block overflow-hidden shadow-sm">
                <div className="w-full h-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-xs">م</div>
              </div>
           </div>
        </header>

         <div className="flex-1 overflow-y-auto bg-transparent p-4 md:p-8">
            {activeTab === 'monitoring' && <AdminDashboard setActiveTab={setActiveTab as any} />}
            {activeTab === 'analytics' && <DataAnalytics />}
            {activeTab === 'users' && <AdminUserManagement />}
            {activeTab === 'assessments' && <AdminAssessments />}
            {activeTab === 'content' && <AdminContentManagement />}
            {activeTab === 'reports' && <SystemReports />}
            {activeTab === 'settings' && <AdminSystemSettings />}
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
