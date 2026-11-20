"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, LogIn, Mail, Lock, User, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { REGISTERED_ACCOUNTS, setCurrentSession } from '@/lib/auth';

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [infoNotice, setInfoNotice] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check if user was redirected due to unauthorized access
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('unauthorized') === 'true') {
        setInfoNotice('عذراً، هذه الصفحة بروفايل خاص محمي. يرجى تسجيل الدخول بحساب المستخدم المصرح له للوصول إليها.');
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const account = REGISTERED_ACCOUNTS[email.trim().toLowerCase()];
    if (account && account.password === password) {
      setCurrentSession(account.user);
      router.push(account.redirectPath);
    } else {
      setError('البريد الإلكتروني أو كلمة المرور غير صحيحة. يرجى التأكد من بيانات حسابك.');
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f5fd] font-arabic flex flex-col" dir="rtl">
      {/* Header */}
      <header className="p-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="مساري" className="h-11 w-auto mix-blend-multiply" />
          <span className="text-xl font-black text-[#2e1d68]">Masari</span>
        </Link>
        <Link href="/" className="text-sm font-bold text-purple-800 hover:text-purple-600 transition-colors flex items-center gap-1">
          <ArrowRight size={16} />
          العودة للرئيسية
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-black text-[#2e1d68] mb-2">
              {isRegister ? 'إنشاء حساب مستخدم جديد' : 'تسجيل الدخول إلى حسابك'}
            </h1>
            <p className="text-gray-600 font-bold text-sm sm:text-base">
              {isRegister
                ? 'انضمي لمنصة مساري للاستفادة من المقاييس والتوجيه'
                : 'أدخل بيانات بروفايلك للوصول إلى لوحة تحكمك الخاصة'}
            </p>
          </div>

          {infoNotice && (
            <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-bold flex items-start gap-3 shadow-xs">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <span>{infoNotice}</span>
            </div>
          )}

          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-7 sm:p-9 rounded-3xl border border-purple-100 shadow-xl relative overflow-hidden"
          >
            <form onSubmit={handleLogin} className="space-y-4 relative z-10">
              {isRegister && (
                <div>
                  <label className="block text-xs font-black text-[#2e1d68] mb-1.5 flex items-center gap-2">
                    <User size={15} className="text-purple-600" />
                    الاسم الكامل
                  </label>
                  <input 
                    type="text" 
                    placeholder="أدخل اسمك"
                    className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 outline-none focus:border-purple-600 focus:bg-white transition-all text-xs sm:text-sm font-bold text-[#2e1d68]"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-xs font-black text-[#2e1d68] mb-1.5 flex items-center gap-2">
                  <Mail size={15} className="text-purple-600" />
                  البريد الإلكتروني للحساب
                </label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@masari.com"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 outline-none focus:border-purple-600 focus:bg-white transition-all text-xs sm:text-sm font-bold text-[#2e1d68] placeholder:text-gray-400"
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1.5">
                   <label className="text-xs font-black text-[#2e1d68] flex items-center gap-2">
                     <Lock size={15} className="text-purple-600" />
                     كلمة المرور
                   </label>
                   <span className="text-[11px] font-bold text-purple-600 cursor-pointer hover:underline">
                     نسيت كلمة المرور؟
                   </span>
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 outline-none focus:border-purple-600 focus:bg-white transition-all text-xs sm:text-sm font-bold text-[#2e1d68]"
                />
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-xl text-xs font-bold text-center border border-red-200">
                  {error}
                </div>
              )}

              <button 
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-black bg-[#38266f] hover:bg-[#2c1d58] text-white shadow-md hover:shadow-lg transition-all text-sm mt-3 active:scale-95 cursor-pointer"
              >
                <span>الدخول إلى البروفايل</span>
                <LogIn size={18} />
              </button>
            </form>

            <div className="mt-5 text-center">
              <button 
                onClick={() => { setIsRegister(!isRegister); setError(''); }}
                className="text-xs text-purple-700 font-black hover:underline cursor-pointer"
              >
                {isRegister ? 'لديك حساب بالفعل؟ تسجيل الدخول' : 'طلب إنشاء حساب مستخدم جديد'}
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="p-6 text-center text-gray-500 text-xs font-bold">
        © 2026 مساري Masari.dz - منصة علمية رقمية لخدمة البحث والإرشاد. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}
