"use client";

import React from "react";
import {
  BookOpen,
  Search,
  Users,
  BarChart3,
  Brain,
  Briefcase,
  TrendingUp,
  Compass,
  Settings,
  ChevronLeft,
  ChevronRight,
  Clock,
  Star,
  Headphones,
  Video,
  Award,
  User,
  Smile,
  FileText,
  HelpCircle,
  Tv,
} from "lucide-react";

interface CounselorHomeProps {
  onNavigate: (tab: string) => void;
  counselorName?: string;
}

export default function CounselorHome({
  onNavigate,
  counselorName,
}: CounselorHomeProps) {
  return (
    <div dir="rtl" className="space-y-6 p-4 md:p-6 w-full max-w-7xl mx-auto font-arabic">

      {/* ── 1. Hero Banner ── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#e8dcff] via-[#f0e8ff] to-[#f7f2ff] border border-purple-200/50 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-sm">
        
        {/* Decorative sparkles */}
        <div className="absolute top-6 right-6 text-purple-400 font-bold text-lg select-none">✦</div>
        <div className="absolute bottom-6 right-20 text-purple-300 font-bold text-sm select-none">✦</div>

        {/* Text Section (Right in RTL) */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-right gap-2 max-w-xl">
          <h1 className="text-2xl sm:text-3xl font-black text-[#2e1d68] leading-tight">
            مرحباً بك في منصة مساري
          </h1>
          <p className="text-[#482885] text-base sm:text-lg font-black leading-snug">
            بنك شامل للمقاييس النفسية والمهنية
            <br />
            لخدمة التوجيه والدعم النفسي للطلبة
          </p>

          <button
            onClick={() => onNavigate("scales-bank")}
            className="mt-3 inline-flex items-center gap-2 bg-[#3f2079] hover:bg-[#2d1558] text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <span>♥</span>
            <span>معاً.. من أجل مستقبل أفضل</span>
          </button>
        </div>

        {/* Students & Clipboard Illustration (Left in RTL) */}
        <div className="relative z-10 mt-6 md:mt-0 flex-shrink-0 flex items-center justify-center">
          <div className="relative w-72 h-44 flex items-end justify-center">
            
            {/* Clipboard with checkmarks & brain */}
            <div className="absolute top-1 left-2 w-20 h-28 bg-white rounded-xl border-2 border-purple-300 shadow-lg p-2 flex flex-col justify-between transform -rotate-6">
              <div className="w-8 h-2 bg-slate-400 rounded-t-sm -mt-3 self-center shadow-sm"></div>
              <div className="space-y-1.5 mt-2">
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-sm border border-purple-500 bg-purple-100 flex items-center justify-center text-[7px] text-purple-700">✓</div>
                  <div className="w-9 h-1 bg-purple-200 rounded"></div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-sm border border-purple-500 bg-purple-100 flex items-center justify-center text-[7px] text-purple-700">✓</div>
                  <div className="w-10 h-1 bg-purple-200 rounded"></div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-sm border border-purple-500 bg-purple-100 flex items-center justify-center text-[7px] text-purple-700">✓</div>
                  <div className="w-8 h-1 bg-purple-200 rounded"></div>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-purple-100 self-center flex items-center justify-center text-purple-700 text-xs">
                🧠
              </div>
            </div>

            {/* Student 1 (Boy with blue backpack) */}
            <div className="relative z-10 mr-2 flex flex-col items-center">
              {/* Head */}
              <div className="w-10 h-10 bg-[#3d271d] rounded-full overflow-hidden relative shadow-sm">
                <div className="absolute bottom-0 left-1 w-8 h-7 bg-[#fcd5b8] rounded-full"></div>
              </div>
              {/* Blue school jacket */}
              <div className="w-12 h-14 bg-[#2b4c7e] rounded-t-xl relative shadow-md mt-0.5">
                {/* Backpack strap */}
                <div className="absolute top-1 left-1.5 w-1.5 h-8 bg-[#1f3559] rounded-full"></div>
                <div className="absolute top-1 right-1.5 w-1.5 h-8 bg-[#1f3559] rounded-full"></div>
              </div>
            </div>

            {/* Student 2 (Center Girl with School Uniform & Tie) */}
            <div className="relative z-20 flex flex-col items-center">
              {/* Head & Hair */}
              <div className="w-11 h-11 bg-[#54301d] rounded-full overflow-hidden relative shadow-sm">
                <div className="absolute bottom-0 left-1 w-9 h-8 bg-[#fcd5b8] rounded-full"></div>
                <div className="absolute top-0 left-1 w-9 h-3.5 bg-[#54301d] rounded-b-lg"></div>
              </div>
              {/* White collar + navy bow/tie + blue uniform */}
              <div className="w-13 h-14 bg-[#39588f] rounded-t-xl relative shadow-md mt-0.5 flex flex-col items-center">
                <div className="w-6 h-3 bg-white rounded-b-md flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#21375e] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Student 3 (Boy with glasses holding books) */}
            <div className="relative z-10 ml-2 flex flex-col items-center">
              {/* Head with glasses */}
              <div className="w-10 h-10 bg-[#352219] rounded-full overflow-hidden relative shadow-sm">
                <div className="absolute bottom-0 left-1 w-8 h-7 bg-[#fcd5b8] rounded-full"></div>
                {/* Round glasses */}
                <div className="absolute top-4 left-2 w-3.5 h-3.5 border-2 border-slate-700 rounded-full"></div>
                <div className="absolute top-4 right-2 w-3.5 h-3.5 border-2 border-slate-700 rounded-full"></div>
              </div>
              {/* Blue sweater */}
              <div className="w-12 h-14 bg-[#2c4e82] rounded-t-xl relative shadow-md mt-0.5 flex items-center justify-center">
                {/* Book held */}
                <div className="w-7 h-5 bg-amber-400 border border-amber-600 rounded-sm shadow-sm mt-3"></div>
              </div>
            </div>

            {/* Floor line */}
            <div className="absolute bottom-0 w-full h-1 bg-purple-200/80 rounded-full"></div>
          </div>
        </div>

      </div>

      {/* ── 2. Quick Action Buttons Row (4 Elongated Cards) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          {
            label: "عرض التقارير والنتائج",
            icon: BarChart3,
            tab: "reports",
          },
          {
            label: "إدارة المستفيدين (طلبة / أولياء / مهنيين)",
            icon: Users,
            tab: "beneficiaries",
          },
          {
            label: "البحث في المقاييس",
            icon: Search,
            tab: "scales-bank",
          },
          {
            label: "استعراض بنك المقاييس",
            icon: BookOpen,
            tab: "scales-bank",
          },
        ].map((action, idx) => {
          const Icon = action.icon;
          return (
            <button
              key={idx}
              onClick={() => onNavigate(action.tab)}
              className="bg-white rounded-2xl border border-purple-100 p-3.5 flex items-center justify-between shadow-sm hover:shadow-md transition-all active:scale-95 group"
            >
              <div className="w-7 h-7 rounded-full bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center text-purple-700">
                <ChevronLeft className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#2e1d68] text-right flex-1 px-3">
                {action.label}
              </span>
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-700 flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
            </button>
          );
        })}
      </div>

      {/* ── 3. "مكتبة المقاييس" Section ── */}
      <div className="space-y-4">
        {/* Section title banner */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-700" />
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#2e1d68]">
                مكتبة المقاييس
              </h2>
              <p className="text-xs text-gray-500 font-bold">
                مجموعة متنوعة من المقاييس النفسية والمهنية المعتمدة
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate("scales-bank")}
            className="text-xs sm:text-sm text-purple-700 hover:text-purple-900 font-bold flex items-center gap-1"
          >
            <span>عرض الكل</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Two parallel category boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Box 1 (Right): المقاييس النفسية */}
          <div className="bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-sm">
            {/* Dark purple header */}
            <div className="bg-[#38266f] px-5 py-3 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-300" />
                <h3 className="font-bold text-sm sm:text-base">المقاييس النفسية</h3>
              </div>
            </div>

            {/* 3 cards with navigation arrows */}
            <div className="p-4 relative">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { title: "مقياس تقدير الذات", icon: Award },
                  { title: "مقياس الشخصية", icon: User },
                  { title: "مقياس القلق والتوتر", icon: Smile },
                ].map((scale, idx) => {
                  const Icon = scale.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-[#faf7ff] border border-purple-100/80 flex flex-col items-center justify-between text-center min-h-[140px] hover:shadow-sm transition-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 mb-2">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-black text-[#2e1d68] leading-tight">
                        {scale.title}
                      </h4>
                      <span className="mt-2 text-[10px] font-black text-[#854d0e] bg-[#fef3c7] px-3 py-0.5 rounded-full">
                        نفسي
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Navigation arrows */}
              <button className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md border border-purple-100 flex items-center justify-center text-purple-700 hover:bg-purple-50">
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md border border-purple-100 flex items-center justify-center text-purple-700 hover:bg-purple-50">
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Box 2 (Left): المقاييس المهنية */}
          <div className="bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-sm">
            {/* Dark purple header */}
            <div className="bg-[#38266f] px-5 py-3 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-purple-300" />
                <h3 className="font-bold text-sm sm:text-base">المقاييس المهنية</h3>
              </div>
            </div>

            {/* 3 cards with navigation arrows */}
            <div className="p-4 relative">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { title: "مقياس التوجيه المهني", icon: Compass },
                  { title: "مقياس الكفاءات المهنية", icon: Settings },
                  { title: "مقياس الميول المهنية", icon: TrendingUp },
                ].map((scale, idx) => {
                  const Icon = scale.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-[#fefcf8] border border-amber-100/80 flex flex-col items-center justify-between text-center min-h-[140px] hover:shadow-sm transition-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 mb-2">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-black text-[#522c10] leading-tight">
                        {scale.title}
                      </h4>
                      <span className="mt-2 text-[10px] font-black text-[#854d0e] bg-[#fef3c7] px-3 py-0.5 rounded-full">
                        مهنية
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Navigation arrows */}
              <button className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md border border-purple-100 flex items-center justify-center text-purple-700 hover:bg-purple-50">
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md border border-purple-100 flex items-center justify-center text-purple-700 hover:bg-purple-50">
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ── 4. Bottom Row (أحدث المضافات + خدمات إضافية) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* Right Box: أحدث المضافات */}
        <div className="bg-white rounded-3xl border border-purple-100 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-700" />
              <h3 className="font-bold text-sm sm:text-base text-[#2e1d68]">
                أحدث المضافات
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

          <div className="space-y-3">
            {[
              { title: "مقياس الذكاء العاطفي", date: "10/11/2026" },
              { title: "مقياس الميول المهنية للمرحلة الثانوية", date: "08/11/2026" },
              { title: "مقياس التكيف المدرسي", date: "05/11/2026" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-2xl bg-purple-50/40 hover:bg-purple-50/80 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-purple-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-[#2e1d68]">
                    {item.title}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-gray-500 shrink-0" dir="ltr">
                  تمت الإضافة: {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Left Box: خدمات إضافية */}
        <div className="bg-white rounded-3xl border border-purple-100 p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-purple-700" />
            <h3 className="font-bold text-sm sm:text-base text-[#2e1d68]">
              خدمات إضافية
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "مساعدة ودعم", icon: HelpCircle, tab: "settings" },
              { label: "دورات وتكوين", icon: Tv, tab: "remote-consult" },
              { label: "الاستشارات عن بعد", icon: Headphones, tab: "remote-consult" },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <button
                  key={idx}
                  onClick={() => onNavigate(service.tab)}
                  className="p-3.5 rounded-2xl bg-purple-50/60 hover:bg-purple-100 border border-purple-100 flex flex-col items-center justify-center gap-2 transition-all group active:scale-95"
                >
                  <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-purple-700 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#2e1d68] text-center leading-tight">
                    {service.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
