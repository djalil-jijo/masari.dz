"use client";

import React from "react";
import {
  TrendingUp,
  Users,
  Calendar,
  CheckSquare,
  Zap,
  CalendarPlus,
  UserPlus,
  ClipboardList,
  BarChart3,
  Clock,
  BookOpen,
  Brain,
  FileText,
  ChevronLeft,
} from "lucide-react";

interface SpecialistHomeProps {
  onNavigate: (tab: string) => void;
  specialistName?: string;
}

export default function SpecialistHome({
  onNavigate,
  specialistName = "الأخصائي",
}: SpecialistHomeProps) {
  return (
    <div dir="rtl" className="space-y-6 p-4 md:p-6 w-full max-w-7xl mx-auto font-arabic">
      
      {/* ── 1. Hero Banner ── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#e8dcff] via-[#f0e8ff] to-[#f7f2ff] border border-purple-200/50 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-sm">
        
        {/* Botanical watermark */}
        <div className="absolute top-2 right-2 w-24 h-24 text-purple-200/40 pointer-events-none select-none">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C60 30 90 40 100 50 C70 60 60 90 50 100 C40 70 10 60 0 50 C30 40 40 10 50 0 Z" opacity="0.3"/>
          </svg>
        </div>

        {/* Text Section (Right in RTL) */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-right gap-2 max-w-xl">
          <h1 className="text-2xl sm:text-3xl font-black text-[#2e1d68] leading-tight">
            مرحباً بك في منصة مساري
          </h1>
          <h2 className="text-xl sm:text-2xl font-black text-[#4b2787]">
            الأخصائي النفسي في القطاع الخاص
          </h2>
          <p className="text-[#513689] text-sm sm:text-base font-bold leading-relaxed mt-1">
            أداة متكاملة لإدارة عملائك، وتطبيق المقاييس النفسية والمهنية
            <br className="hidden sm:inline" />
            مع الحصول على تقارير دقيقة وموثوقة
          </p>

          <button
            onClick={() => onNavigate("sessions")}
            className="mt-3 inline-flex items-center gap-2 bg-[#3f2079] hover:bg-[#2d1558] text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <span>♥</span>
            <span>معاً . من أجل صحة نفسية أفضل</span>
          </button>
        </div>

        {/* Clinic & Therapy Illustration (Left in RTL) */}
        <div className="relative z-10 mt-6 md:mt-0 flex-shrink-0 flex items-center justify-center">
          <div className="relative w-64 sm:w-72 h-44 flex items-end justify-center">
            
            {/* Bookshelf with plant */}
            <div className="absolute top-1 left-2 w-20 h-28 bg-[#f5effe] rounded-xl border border-purple-200/60 p-1.5 flex flex-col justify-between">
              <div className="flex gap-1 h-8 items-end border-b border-purple-200 pb-1">
                <span className="w-2.5 h-6 bg-purple-400 rounded-sm"></span>
                <span className="w-2 h-7 bg-amber-300 rounded-sm"></span>
                <span className="w-3 h-5 bg-teal-400 rounded-sm"></span>
              </div>
              <div className="flex gap-1 h-8 items-end">
                <span className="w-2 h-6 bg-purple-300 rounded-sm"></span>
                <span className="w-3 h-7 bg-indigo-400 rounded-sm"></span>
              </div>
            </div>

            {/* Potted Indoor Plant */}
            <div className="absolute bottom-2 left-24 flex flex-col items-center">
              <div className="flex -space-x-1 mb-0.5">
                <div className="w-3 h-8 bg-emerald-600 rounded-full rotate-[-20deg]"></div>
                <div className="w-3.5 h-11 bg-emerald-700 rounded-full"></div>
                <div className="w-3 h-8 bg-emerald-600 rounded-full rotate-[20deg]"></div>
              </div>
              <div className="w-6 h-6 bg-[#eedec8] border border-amber-300 rounded-b-md"></div>
            </div>

            {/* Cozy Armchair */}
            <div className="relative z-10 mr-12 mb-1 flex flex-col items-center">
              <div className="w-24 h-18 bg-[#e8decb] rounded-t-3xl border-2 border-[#d5c3aa] relative shadow-md">
                {/* Cushion tufting */}
                <div className="absolute inset-x-3 top-4 h-8 bg-[#dfd2be] rounded-2xl"></div>
                {/* Armrests */}
                <div className="absolute -left-2 top-4 w-4 h-12 bg-[#d5c3aa] rounded-full"></div>
                <div className="absolute -right-2 top-4 w-4 h-12 bg-[#d5c3aa] rounded-full"></div>
              </div>
              {/* Legs */}
              <div className="flex justify-between w-20 px-2 mt-0.5">
                <div className="w-1.5 h-4 bg-[#7d5029] rotate-[-15deg]"></div>
                <div className="w-1.5 h-4 bg-[#7d5029] rotate-[15deg]"></div>
              </div>
            </div>

            {/* Clipboard with Head Profile + Heart in Brain */}
            <div className="relative z-20 -ml-4 mb-2">
              <div className="w-22 h-28 bg-white rounded-xl border-2 border-purple-300 shadow-xl p-2 flex flex-col items-center justify-center transform rotate-6">
                <div className="w-8 h-2 bg-slate-400 rounded-t-sm -mt-3 mb-2 shadow-sm"></div>
                {/* Head silhouette */}
                <div className="w-12 h-14 bg-[#4a2688] rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Heart in brain */}
                  <div className="text-white text-base font-black">♥</div>
                </div>
              </div>
            </div>

            {/* Floor line */}
            <div className="absolute bottom-0 w-full h-1 bg-purple-200/80 rounded-full"></div>
          </div>
        </div>

      </div>

      {/* ── 2. Statistics Row (4 Cards) ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Card 1: 12 مقياس مطبق (Right) */}
        <div className="bg-white rounded-2xl border border-purple-100/80 p-4 sm:p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="text-right">
            <span className="text-2xl sm:text-3xl font-black text-[#2f1b62] block leading-none">
              12
            </span>
            <span className="text-xs sm:text-sm font-bold text-gray-600 mt-1 block">
              مقياس مطبق
            </span>
          </div>
          <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
            <CheckSquare className="w-6 h-6" />
          </div>
        </div>

        {/* Card 2: 32 عميل مسجل */}
        <div className="bg-white rounded-2xl border border-purple-100/80 p-4 sm:p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="text-right">
            <span className="text-2xl sm:text-3xl font-black text-[#2f1b62] block leading-none">
              32
            </span>
            <span className="text-xs sm:text-sm font-bold text-gray-600 mt-1 block">
              عميل مسجل
            </span>
          </div>
          <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
        </div>

        {/* Card 3: 7 جلسة قادمة */}
        <div className="bg-white rounded-2xl border border-purple-100/80 p-4 sm:p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="text-right">
            <span className="text-2xl sm:text-3xl font-black text-[#2f1b62] block leading-none">
              7
            </span>
            <span className="text-xs sm:text-sm font-bold text-gray-600 mt-1 block">
              جلسة قادمة
            </span>
          </div>
          <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
            <Calendar className="w-6 h-6" />
          </div>
        </div>

        {/* Card 4: 18 تقرير منجز (Left) */}
        <div className="bg-white rounded-2xl border border-purple-100/80 p-4 sm:p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="text-right">
            <span className="text-2xl sm:text-3xl font-black text-[#2f1b62] block leading-none">
              18
            </span>
            <span className="text-xs sm:text-sm font-bold text-gray-600 mt-1 block">
              تقرير مُنجز
            </span>
          </div>
          <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>

      </div>

      {/* ── 3. Main Grid (Two Columns) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ── Column 1 (Right): مواعيد الجلسات + البنك العلمي ── */}
        <div className="flex flex-col gap-6">
          
          {/* Card: مواعيد الجلسات */}
          <div className="bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-[#38266f] px-5 py-3.5 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-300" />
                <h3 className="font-bold text-sm sm:text-base">مواعيد الجلسات</h3>
              </div>
              <button
                onClick={() => onNavigate("sessions")}
                className="text-xs text-purple-200 hover:text-white flex items-center gap-1 font-bold"
              >
                <span>عرض الكل</span>
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Sessions List */}
            <div className="p-4 space-y-3">
              {[
                {
                  day: "السبت",
                  date: "15 نوفمبر 2026",
                  title: "مراجعة نتائج المقاييس",
                  client: "س. م",
                  time: "10:00 صباحاً",
                },
                {
                  day: "الأحد",
                  date: "16 نوفمبر 2026",
                  title: "جلسة استشارية",
                  client: "ر. ب",
                  time: "14:30 مساءً",
                },
                {
                  day: "الاثنين",
                  date: "17 نوفمبر 2026",
                  title: "متابعة الحالة",
                  client: "ن. ع",
                  time: "11:00 صباحاً",
                },
              ].map((session, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-2xl bg-purple-50/50 hover:bg-purple-50 border border-purple-100/60 transition-colors"
                >
                  {/* Date Badge (Right) */}
                  <div className="text-right w-24">
                    <span className="block text-xs font-black text-[#2d1a60]">
                      {session.day}
                    </span>
                    <span className="block text-[11px] font-bold text-gray-500">
                      {session.date}
                    </span>
                  </div>

                  {/* Details (Center) */}
                  <div className="flex-1 px-3 text-right">
                    <h4 className="text-xs sm:text-sm font-black text-[#2e1d68]">
                      {session.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[11px] text-gray-500 font-bold mt-0.5">
                      <span>العميل: {session.client}</span>
                      <span>•</span>
                      <span>{session.time}</span>
                    </div>
                  </div>

                  {/* Status Pill (Left) */}
                  <span className="text-[11px] font-black text-purple-700 bg-purple-100/80 px-3 py-1 rounded-full border border-purple-200">
                    قادم
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card: البنك العلمي للمقاييس */}
          <div className="bg-white rounded-3xl border border-purple-100 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-700" />
                <h3 className="font-bold text-sm sm:text-base text-[#2e1d68]">
                  البنك العلمي للمقاييس
                </h3>
              </div>
              <button
                onClick={() => onNavigate("scales-bank")}
                className="text-xs text-purple-600 hover:text-purple-800 flex items-center gap-1 font-bold"
              >
                <span>عرض الكل</span>
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "أدلة التطبيق والتصحيح", icon: FileText, tab: "scales-bank" },
                { label: "مقاييس نفسية", icon: Brain, tab: "scales-bank" },
                { label: "اختبارات واستبيانات", icon: ClipboardList, tab: "scales-bank" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => onNavigate(item.tab)}
                    className="p-3.5 rounded-2xl bg-purple-50/70 hover:bg-purple-100/70 border border-purple-100 flex flex-col items-center justify-center gap-2 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-purple-700 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#351e6d] text-center leading-tight">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* ── Column 2 (Left): أدوات سريعة + آخر النشاطات ── */}
        <div className="flex flex-col gap-6">

          {/* Card: أدوات سريعة */}
          <div className="bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-[#38266f] px-5 py-3.5 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-300" />
                <h3 className="font-bold text-sm sm:text-base">أدوات سريعة</h3>
              </div>
            </div>

            {/* Quick Actions 4 buttons in row */}
            <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "عرض الإحصائيات", icon: BarChart3, tab: "stats" },
                { label: "تطبيق مقياس جديد", icon: ClipboardList, tab: "scale-analysis" },
                { label: "إضافة عميل", icon: UserPlus, tab: "clients" },
                { label: "حجز جلسة", icon: CalendarPlus, tab: "sessions" },
              ].map((tool, idx) => {
                const Icon = tool.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => onNavigate(tool.tab)}
                    className="p-3.5 rounded-2xl bg-purple-50/60 hover:bg-purple-100 border border-purple-100 flex flex-col items-center justify-center gap-2 transition-all group active:scale-95"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-purple-700 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#2e1d68] text-center leading-tight">
                      {tool.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card: آخر النشاطات */}
          <div className="bg-white rounded-3xl border border-purple-100 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-700" />
                <h3 className="font-bold text-sm sm:text-base text-[#2e1d68]">
                  آخر النشاطات
                </h3>
              </div>
              <button
                onClick={() => onNavigate("sessions")}
                className="text-xs text-purple-600 hover:text-purple-800 flex items-center gap-1 font-bold"
              >
                <span>عرض الكل</span>
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3.5">
              {[
                {
                  dot: "bg-purple-600",
                  text: "تم إضافة مقياس جديد: مقياس القلق العام",
                  time: "اليوم • 09:15",
                },
                {
                  dot: "bg-emerald-500",
                  text: "تم تحديث ملف العميل: س. م",
                  time: "أمس • 16:20",
                },
                {
                  dot: "bg-sky-500",
                  text: "تم إصدار تقرير نفسي للعميل: ر. ب",
                  time: "08/11/2026 • 11:30",
                },
              ].map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-2xl bg-purple-50/40 hover:bg-purple-50/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${activity.dot} shrink-0`}></span>
                    <span className="text-xs sm:text-sm font-bold text-[#2f1b62]">
                      {activity.text}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-gray-500 shrink-0 mr-2" dir="ltr">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
