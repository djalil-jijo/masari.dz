"use client";

import React from 'react';
import { 
  BookOpen, 
  Users, 
  Lightbulb, 
  Briefcase, 
  CheckCircle2, 
  ChevronLeft,
  Search,
  Clock,
  MessageSquare,
  Zap,
  Target
} from 'lucide-react';
import { motion } from 'framer-motion';

const skillsPlan = [
  {
    id: 1,
    title: "مهارات أكاديمية وتعليمية",
    icon: <BookOpen className="text-blue-600" />,
    color: "bg-blue-50 border-blue-100",
    skills: [
"مهارات الدراسة والتنظيم الزمني",
"الفهم العميق للمحتوى",
"التحضير للامتحانات وإدارة القلق",
"مهارات البحث العلمي وجمع المعلومات"
    ]
  },
  {
    id: 2,
    title: "مهارات نفسية واجتماعية",
    icon: <Users className="text-green-600" />,
    color: "bg-green-50 border-green-100",
    skills: [
"الثقة بالنفس وتقدير الذات",
"إدارة المشاعر والضغوط النفسية",
"مهارات التواصل الفعال (استماع، تعبير، حوار)",
"العمل الجماعي"
    ]
  },
  {
    id: 3,
    title: "مهارات احترافية ومهنية",
    icon: <Briefcase className="text-indigo-600" />,
    color: "bg-indigo-50 border-indigo-100",
    skills: [
"كتابة السيرة الذاتية (CV)",
"مهارات المقابلة الشخصية",
"أخلاقيات العمل والاحترافية",
"التطوير المهني المستمر"
    ]
  },
  {
    id: 4,
    title: "مهارات إبداعية وابتكارية",
    icon: <Lightbulb className="text-amber-600" />,
    color: "bg-amber-50 border-amber-100",
    skills: [
"التفكير النقدي والإبداعي",
"الابتكار وتنمية روح المبادرة",
"التخطيط للمشاريع الصغيرة",
"حل المشكلات بطرق غير تقليدية"
    ]
  }
];

export default function SkillDevelopmentPlan() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100  pb-6">
        <div>
          <h2 className="text-3xl font-bold text-primary-950  mb-2">خطة تطوير المهارات</h2>
          <p className="text-slate-700  font-medium">خارطة طريق مخصصة لبناء قدراتك الشخصية والأكاديمية</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-primary-50  text-primary-600 rounded-xl font-bold text-sm">
          <Target size={18} />
          <span>مستوى التقدم: 35%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillsPlan.map((category, idx) => (
          <motion.div 
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`p-6 rounded-3xl glass-morphism border border-white/40 transition-all hover:shadow-xl `}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl glass-morphism border border-indigo-100/20 flex items-center justify-center shadow-sm">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-950 ">
                {category.id}. {category.title}
              </h3>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx}
                  className="flex items-center justify-between p-4 glass-morphism/40 rounded-2xl border border-white/20 hover:bg-white/60  transition-colors cursor-pointer group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white  flex items-center justify-center text-xs font-bold text-slate-600 border border-slate-100 ">
                      {sIdx + 1}
                    </div>
                    <span className="text-slate-800  font-bold text-sm md:text-base">
                      {skill}
                    </span>
                  </div>
                  <ChevronLeft size={18} className="text-primary-600 group-hover:-translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Advice Section */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 overflow-hidden relative">
        <div className="relative z-10">
          <h4 className="text-xl font-bold mb-4">نصائح مخصصة لك:</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-4 items-start bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
              <Clock className="text-blue-400 shrink-0" size={20} />
              <p className="text-sm text-slate-600">ابدأ بمهارات التنظيم الزمني فهي القاعدة الأساسية للنجاح الأكاديمي.</p>
            </div>
            <div className="flex gap-4 items-start bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
              <MessageSquare className="text-green-400 shrink-0" size={20} />
              <p className="text-sm text-slate-600">ممارسة التواصل الفعال في الأنشطة الصفية ستزيد من ثقتك بنفسك.</p>
            </div>
            <div className="flex gap-4 items-start bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
              <Zap className="text-amber-400 shrink-0" size={20} />
              <p className="text-sm text-slate-600">خصص وقت للإبداع والابتكار خارج المنهاج الدراسي لتنمية روح المبادرة.</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      </div>
    </div>
  );
}
