"use client";

import React, { useState } from 'react';
import { ArrowRight, Compass, LogIn, Mail, Lock, User } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (email === 'admin@masari.com' && password === 'admin123') {
      localStorage.setItem('userRole', 'ADMIN');
      router.push('/admin');
    } else if (email === 'counselor@masari.com' && password === 'counselor123') {
      localStorage.setItem('userRole', 'COUNSELOR');
      router.push('/counselor/dashboard');
    } else if (email === 'student@masari.com' && password === 'student123') {
      localStorage.setItem('userRole', 'STUDENT');
      router.push('/dashboard');
    } else {
      setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
    }
  };

  return (
    <div className="min-h-screen bg-transparent font-arabic flex flex-col">
      {/* Header */}
      <header className="p-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-600/30">
            <Compass size={24} />
          </div>
          <span className="text-xl font-bold text-primary-900">مساري</span>
        </Link>
        <Link href="/" className="text-sm font-bold text-primary-700 hover:text-primary-600 transition-colors flex items-center gap-1">
          <ArrowRight size={16} />
          العودة للرئيسية
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-primary-900 mb-4">
              {isRegister ? 'إنشاء حساب جديد' : 'تسجيل الدخول'}
            </h1>
            <p className="text-slate-700 font-bold text-lg">
              {isRegister ? 'انضم إلى منصة مساري لتخطيط مستقبلك' : 'مرحباً بك مجدداً في منصة مساري'}
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-morphism p-8 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <form onSubmit={handleLogin} className="space-y-5 relative z-10">
              {isRegister && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                  <label className="block text-sm font-bold text-primary-800 mb-2 flex items-center gap-2">
                    <User size={16} className="text-primary-600" />
                    الأسم الكامل
                  </label>
                  <input 
                    type="text" 
                    placeholder="أدخل اسمك"
                    className="w-full px-5 py-3.5 rounded-2xl glass-morphism border border-indigo-100/20 outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-600/5 transition-all font-bold text-primary-900 placeholder:text-slate-500"
                  />
                </motion.div>
              )}
              
              <div>
                <label className="block text-sm font-bold text-primary-800 mb-2 flex items-center gap-2">
                  <Mail size={16} className="text-primary-600" />
                  البريد الإلكتروني
                </label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@domain.com"
                  className="w-full px-5 py-3.5 rounded-2xl glass-morphism border border-indigo-100/20 outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-600/5 transition-all font-bold text-primary-900 placeholder:text-slate-500"
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                   <label className="text-sm font-bold text-primary-800 flex items-center gap-2">
                     <Lock size={16} className="text-primary-600" />
                     كلمة المرور
                   </label>
                   <Link href="#" className="text-xs font-bold text-primary-600 hover:underline">نسيت كلمة المرور؟</Link>
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-5 py-3.5 rounded-2xl glass-morphism border border-indigo-100/20 outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-600/5 transition-all font-bold text-primary-900 placeholder:text-slate-500"
                />
              </div>

              <div className="flex items-center gap-2 py-2">
                <input type="checkbox" id="remember" className="w-4 h-4 rounded border-slate-300 text-primary-600 focus:ring-primary-600" />
                <label htmlFor="remember" className="text-sm text-primary-800 font-medium cursor-pointer">تذكرني على هذا الجهاز</label>
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-medium text-center">
                  {error}
                </div>
              )}

              <button 
                type="submit"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold bg-primary-600 text-white shadow-xl shadow-primary-600/20 hover:bg-primary-700 hover:scale-[1.02] active:scale-95 transition-all mt-4"
              >
                دخول المنصة
                <LogIn size={20} />
              </button>
              
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
                <div className="relative flex justify-center text-xs uppercase"><span className="bg-white/90 px-4 text-primary-700 font-black">أو</span></div>
              </div>

              <p className="text-center text-sm text-slate-700 font-bold">
                {isRegister ? 'لديك حساب بالفعل؟' : 'ليس لديك حساب؟'}{' '}
                <button 
                  onClick={() => setIsRegister(!isRegister)}
                  className="text-primary-600 font-black cursor-pointer hover:underline"
                >
                  {isRegister ? 'تسجيل الدخول الآن' : 'أنشئ حساباً جديداً الآن'}
                </button>
              </p>

              {!isRegister && (
                <div className="pt-4 text-center border-t border-slate-200">
                  <Link href="/admin" className="text-xs font-bold text-primary-700 hover:text-primary-600 transition-colors">
                    دخول المستشارين والمديرين
                  </Link>
                </div>
              )}
            </form>
          </motion.div>
          
          <p className="text-center mt-8 text-xs text-slate-600 font-medium">
            بالتسجيل في المنصة، أنت توافق على <span className="underline cursor-pointer font-bold">شروط الاستخدام</span> و <span className="underline cursor-pointer font-bold">سياسة الخصوصية</span>.
          </p>
        </div>
      </main>

      <footer className="p-8 text-center text-slate-500 text-[10px] sm:text-xs font-bold">
        © {new Date().getFullYear()} مساري - جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}
