'use client';

import React from 'react';
import { Brain, Briefcase, BookOpen, ChevronLeft } from 'lucide-react';

interface StudentHomeProps {
  onNavigate: (tab: string) => void;
}

export default function StudentHome({ onNavigate }: StudentHomeProps) {
  return (
    <div className="flex flex-col gap-5 p-4 md:p-6 w-full max-w-7xl mx-auto" dir="rtl">

      {/* ── 1. Hero Banner ── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#e9deff] via-[#f1eaff] to-[#f7f3ff] border border-purple-100/60 p-6 sm:p-8 min-h-[220px] flex flex-col md:flex-row items-center justify-between shadow-sm">
        
        {/* Decorative sparkles */}
        <div className="absolute top-8 right-6 text-purple-400 font-bold text-lg select-none">✦</div>
        <div className="absolute bottom-10 right-16 text-purple-300 font-bold text-sm select-none">✦</div>
        <div className="absolute top-12 left-1/2 text-purple-300 font-bold text-xs select-none">✦</div>

        {/* Decorative botanical leaves background */}
        <svg className="absolute -bottom-6 -right-6 w-32 h-32 text-purple-200/50 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C60 30 90 40 100 50 C70 60 60 90 50 100 C40 70 10 60 0 50 C30 40 40 10 50 0 Z" opacity="0.3"/>
        </svg>

        {/* Text content (Right in RTL) */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-right gap-2 md:pr-4">
          <div className="flex items-center gap-2">
            <span className="text-purple-400 text-xl font-bold select-none">ˏˋ</span>
            <h1 className="text-3xl md:text-5xl font-black text-[#2e1d68] tracking-tight">
              مكتبة المقاييس
            </h1>
            <span className="text-purple-400 text-xl font-bold select-none">ˎˊ</span>
          </div>
          <p className="text-[#432c7d] text-base md:text-lg font-bold leading-relaxed max-w-md">
            للاطلاع على مقاييس نفسية ومهنية
            <br />
            في خدمة أبحاثك ومذكراتك
          </p>
        </div>

        {/* Illustration (Left in RTL): Student girl at desk with laptop and books */}
        <div className="relative z-10 mt-6 md:mt-0 flex-shrink-0 flex items-center justify-center">
          <div className="relative w-64 sm:w-72 h-44 sm:h-48 flex items-end justify-center">
            {/* Bookshelf background */}
            <div className="absolute top-2 left-3 w-28 h-28 bg-[#f5effe] rounded-xl border border-purple-200/60 p-2 flex flex-col justify-between opacity-80">
              <div className="flex gap-1 h-10 items-end border-b border-purple-200 pb-1">
                <span className="w-2.5 h-8 bg-purple-400 rounded-sm"></span>
                <span className="w-2 h-7 bg-indigo-300 rounded-sm"></span>
                <span className="w-3 h-9 bg-pink-300 rounded-sm"></span>
                <span className="w-2.5 h-6 bg-purple-300 rounded-sm"></span>
              </div>
              <div className="flex gap-1 h-10 items-end">
                <span className="w-3 h-8 bg-purple-300 rounded-sm"></span>
                <span className="w-2.5 h-7 bg-amber-300 rounded-sm"></span>
                <span className="w-3 h-9 bg-purple-400 rounded-sm"></span>
              </div>
            </div>

            {/* Potted plant */}
            <div className="absolute bottom-2 left-2 flex flex-col items-center">
              <div className="flex -space-x-1 mb-0.5">
                <div className="w-3 h-7 bg-emerald-500 rounded-full rotate-[-25deg]"></div>
                <div className="w-3.5 h-9 bg-emerald-600 rounded-full"></div>
                <div className="w-3 h-7 bg-emerald-500 rounded-full rotate-[25deg]"></div>
              </div>
              <div className="w-6 h-5 bg-amber-100 border border-amber-300 rounded-b-md"></div>
            </div>

            {/* Stack of books on desk */}
            <div className="absolute bottom-3 left-14 flex flex-col items-center">
              <div className="w-16 h-3 bg-indigo-500 rounded-sm border-b border-indigo-600"></div>
              <div className="w-18 h-3.5 bg-pink-400 rounded-sm border-b border-pink-500"></div>
              <div className="w-20 h-4 bg-amber-300 rounded-sm border-b border-amber-400"></div>
            </div>

            {/* Girl student sitting */}
            <div className="relative z-10 flex flex-col items-center mr-8">
              {/* Hair & Head */}
              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 bg-[#683921] rounded-full relative overflow-hidden shadow-sm">
                  {/* Face */}
                  <div className="absolute bottom-1 left-2 w-12 h-11 bg-[#fcd5b8] rounded-full"></div>
                  {/* Hair bangs */}
                  <div className="absolute top-0 left-1 w-14 h-6 bg-[#683921] rounded-b-xl"></div>
                  {/* Smile */}
                  <div className="absolute bottom-3 left-6 w-3 h-1.5 border-b-2 border-[#a2512f] rounded-full"></div>
                </div>
                {/* Hair flowing back */}
                <div className="absolute top-4 -right-2 w-7 h-16 bg-[#683921] rounded-r-2xl rotate-12 -z-10"></div>
              </div>

              {/* Purple Hoodie & Laptop */}
              <div className="relative -mt-2 flex flex-col items-center">
                {/* Hoodie body */}
                <div className="w-20 h-16 bg-[#6d44ba] rounded-t-2xl relative shadow-md">
                  {/* White cords */}
                  <div className="absolute top-2 left-8 w-0.5 h-5 bg-white/70"></div>
                  <div className="absolute top-2 right-8 w-0.5 h-5 bg-white/70"></div>
                </div>
                {/* Arms on laptop */}
                <div className="absolute -bottom-2 flex items-center justify-between w-24">
                  <div className="w-6 h-8 bg-[#5b35a3] rounded-full rotate-45"></div>
                  <div className="w-6 h-8 bg-[#5b35a3] rounded-full -rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Laptop with 'M' logo */}
            <div className="relative z-20 -ml-10 mb-2">
              <div className="w-24 h-16 bg-[#2d1b69] rounded-t-lg border-2 border-purple-300/40 p-1 flex items-center justify-center shadow-lg transform -rotate-2">
                <span className="text-white font-extrabold text-base tracking-widest italic font-serif">
                  M
                </span>
              </div>
              <div className="w-28 h-2 bg-slate-300 rounded-b-md shadow-md -ml-2"></div>
            </div>

            {/* Desk line */}
            <div className="absolute bottom-0 w-full h-1.5 bg-purple-200/80 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* ── 2. Two Category Cards (side by side) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Card 1: مقاييس مهنية (Right side in Arabic RTL) */}
        <div className="relative overflow-hidden rounded-3xl bg-[#fef7ee] border border-amber-200/60 p-6 sm:p-8 flex flex-col items-center justify-between min-h-[260px] text-center shadow-sm hover:shadow-md transition-all group">
          
          {/* Botanical leaf decoration */}
          <div className="absolute bottom-0 right-0 w-28 h-28 pointer-events-none opacity-40">
            <svg viewBox="0 0 100 100" fill="none" stroke="#d97706" strokeWidth="2">
              <path d="M10 90 Q40 50 90 20 M90 20 Q50 60 10 90" fill="#fef3c7" opacity="0.6"/>
              <path d="M40 58 Q60 45 70 30" />
              <path d="M25 72 Q45 60 55 45" />
            </svg>
          </div>

          {/* Icon Badge */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-[#fdecd5] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              <Briefcase className="w-10 h-10 text-[#854d0e]" strokeWidth={2.2} />
            </div>

            {/* Title & Description */}
            <h2 className="text-2xl sm:text-3xl font-black text-[#683912]">
              مقاييس مهنية
            </h2>
            <p className="text-[#8c521f] text-sm sm:text-base font-bold">
              اكتشفي مجموعة المقاييس المهنية
            </p>
          </div>

          {/* Button */}
          <button
            onClick={() => onNavigate('professional')}
            className="mt-6 inline-flex items-center justify-center gap-2 bg-[#6b3a16] hover:bg-[#522c10] text-white font-bold text-sm sm:text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <span>تصفح المقاييس</span>
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Card 2: مقاييس نفسية (Left side in Arabic RTL) */}
        <div className="relative overflow-hidden rounded-3xl bg-[#f4effe] border border-purple-200/60 p-6 sm:p-8 flex flex-col items-center justify-between min-h-[260px] text-center shadow-sm hover:shadow-md transition-all group">
          
          {/* Botanical leaf decoration */}
          <div className="absolute bottom-0 right-0 w-28 h-28 pointer-events-none opacity-40">
            <svg viewBox="0 0 100 100" fill="none" stroke="#7c3aed" strokeWidth="2">
              <path d="M10 90 Q40 50 90 20 M90 20 Q50 60 10 90" fill="#ede9fe" opacity="0.6"/>
              <path d="M40 58 Q60 45 70 30" />
              <path d="M25 72 Q45 60 55 45" />
            </svg>
          </div>

          {/* Icon Badge */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-[#e8dcfe] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              <Brain className="w-10 h-10 text-[#5c2aab]" strokeWidth={2.2} />
            </div>

            {/* Title & Description */}
            <h2 className="text-2xl sm:text-3xl font-black text-[#371b69]">
              مقاييس نفسية
            </h2>
            <p className="text-[#593198] text-sm sm:text-base font-bold">
              اكتشفي مجموعة المقاييس النفسية
            </p>
          </div>

          {/* Button */}
          <button
            onClick={() => onNavigate('psychological')}
            className="mt-6 inline-flex items-center justify-center gap-2 bg-[#42207b] hover:bg-[#32175e] text-white font-bold text-sm sm:text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <span>تصفح المقاييس</span>
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* ── 3. Bottom Info Bar (معلومات مفيدة) ── */}
      <div className="relative overflow-hidden rounded-3xl bg-[#f6f2fe] border border-purple-200/50 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        
        {/* Right side: Icon + Text */}
        <div className="flex items-center gap-4 text-right">
          <div className="w-14 h-14 rounded-2xl bg-[#e9dcfe] flex items-center justify-center flex-shrink-0 shadow-inner">
            <BookOpen className="w-7 h-7 text-[#4d2491]" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-[#2e165b]">
              معلومات مفيدة
            </h3>
            <p className="text-[#5b3896] text-xs sm:text-sm font-bold mt-0.5">
              تعرفي على المزيد من المفاهيم والإرشادات حول المقاييس والاستخدام الأمثل لها
            </p>
          </div>
        </div>

        {/* Left side: Button */}
        <button
          onClick={() => onNavigate('guide')}
          className="inline-flex items-center justify-center gap-2 bg-[#ded2fb] hover:bg-[#d0c0f8] text-[#3b1b72] font-black text-sm px-6 py-2.5 rounded-full border border-purple-300/40 shadow-sm transition-all active:scale-95 flex-shrink-0"
        >
          <span>استكشاف</span>
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* ── 4. Footer ── */}
      <footer className="mt-6 pt-4 border-t border-purple-200/50 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5f4886] font-bold gap-2 select-none">
        <div>
          منصة علمية رقمية لخدمة البحث والإرشاد
        </div>
        <div className="text-center font-black text-[#3b1b72]">
          معاً .. نحو مستقبل أكاديمي ناجح
        </div>
        <div dir="ltr">
          Masari.dz © 2026
        </div>
      </footer>

    </div>
  );
}
