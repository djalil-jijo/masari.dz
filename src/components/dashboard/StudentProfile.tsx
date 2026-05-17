"use client";

import React, { useState } from 'react';
import { User, Mail, GraduationCap, MapPin, Edit3, Save, Camera, Target, Star, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "أحمد بوعلام",
    email: "ahmed@student.com",
    grade: "السنة الثالثة ثانوي - علمي",
    school: "ثانوية الرياضيات الوطنية بالقبة",
    goal: "هندسة البرمجيات أو الذكاء الاصطناعي",
    location: "الجزائر العاصمة، الجزائر"
  });

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between gap-4 border-b border-slate-100  pb-6">
        <div>
          <h2 className="text-3xl font-bold text-primary-950  mb-2">الملف الشخصي</h2>
          <p className="text-slate-700  font-medium">إدارة معلوماتك الأكاديمية وطموحاتك المستقبلية</p>
        </div>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg
            ${isEditing ? 'bg-green-600 text-white shadow-green-600/20' : 'bg-slate-100  text-slate-900  shadow-slate-100/20'}`}
        >
          {isEditing ? <Save size={18} /> : <Edit3 size={18} />}
          <span>{isEditing ? 'حفظ التعديلات' : 'تعديل الملف'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-morphism rounded-3xl p-8 border border-white/40 shadow-sm text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="relative w-32 h-32 mx-auto mb-6 group">
                <div className="w-full h-full bg-slate-200  rounded-full flex items-center justify-center text-4xl font-bold text-slate-500 shadow-inner">
                  {profile.name[0]}
                </div>
                <button className="absolute bottom-0 right-0 p-2 bg-primary-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform opacity-0 group-hover:opacity-100">
                  <Camera size={16} />
                </button>
              </div>
              <h3 className="text-2xl font-bold text-primary-950  mb-1">{profile.name}</h3>
              <p className="text-slate-700  font-bold text-sm mb-6">{profile.grade}</p>
              
              <div className="flex justify-center gap-4 py-4 border-y border-indigo-100/10">
                <div className="text-center px-4 border-l border-indigo-100/10 last:border-0">
                  <div className="text-lg font-bold text-primary-600">3</div>
                  <div className="text-[10px] text-slate-600 uppercase tracking-wider font-bold">مقاييس</div>
                </div>
                <div className="text-center px-4 border-l border-indigo-100/10 last:border-0">
                  <div className="text-lg font-bold text-primary-600">12</div>
                  <div className="text-[10px] text-slate-600 uppercase tracking-wider font-bold">نقاط قوة</div>
                </div>
                <div className="text-center px-4 border-l border-indigo-100/10 last:border-0">
                  <div className="text-lg font-bold text-primary-600">85٪</div>
                  <div className="text-[10px] text-slate-600 uppercase tracking-wider font-bold">اكتمال</div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary-600/5 to-transparent"></div>
          </div>

          <div className="glass-morphism rounded-3xl p-6 border border-white/40 shadow-sm">
            <h4 className="font-bold text-primary-950  mb-4 flex items-center gap-2">
              <Award className="text-primary-600" size={18} />
              الأوسمة المحصلة
            </h4>
            <div className="flex flex-wrap gap-3">
              <div title="مكتشف ذاته" className="w-10 h-10 bg-blue-100  text-blue-600 rounded-xl flex items-center justify-center">
                <Star size={18} />
              </div>
              <div title="قادر على التحليل" className="w-10 h-10 bg-green-100  text-green-600 rounded-xl flex items-center justify-center">
                <Target size={18} />
              </div>
              <div title="متفاعل بإيجابية" className="w-10 h-10 bg-purple-100  text-purple-600 rounded-xl flex items-center justify-center">
                <Star size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Info Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-morphism rounded-3xl p-8 border border-white/40 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { label: "الأسم الكامل", value: profile.name, icon: <User size={18} />, key: "name" },
                { label: "البريد الإلكتروني", value: profile.email, icon: <Mail size={18} />, key: "email" },
                { label: "المدرسة / المؤسسة", value: profile.school, icon: <GraduationCap size={18} />, key: "school" },
                { label: "المرحلة الدراسية", value: profile.grade, icon: <Target size={18} />, key: "grade" },
                { label: "الموقع الجغرافي", value: profile.location, icon: <MapPin size={18} />, key: "location" },
                { label: "الهدف المهني المخطط له", value: profile.goal, icon: <Star size={18} />, key: "goal" },
              ].map((field, i) => (
                <div key={i} className="space-y-2">
                  <label className="text-xs font-bold text-slate-700  flex items-center gap-2">
                    <span className="text-primary-600">{field.icon}</span>
                    {field.label}
                  </label>
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={field.value} 
                      onChange={(e) => setProfile({...profile, [field.key]: e.target.value})}
                      className="w-full bg-slate-50  px-4 py-3 rounded-xl border border-slate-200  outline-none focus:border-primary-600 transition-all font-bold text-slate-700 "
                    />
                  ) : (
                    <div className="text-lg font-bold text-primary-950  px-1">
                      {field.value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50  rounded-3xl p-6 border border-amber-100  flex items-start gap-4">
            <div className="w-10 h-10 bg-amber-100  text-amber-600 rounded-xl flex items-center justify-center shrink-0">
              <Award size={20} />
            </div>
            <div>
              <h5 className="font-bold text-amber-900  mb-1">تذكير هام</h5>
              <p className="text-sm text-amber-800  leading-relaxed font-medium">
                بياناتك وتفضيلاتك المهنية يتم تحليلها دورياً لتحديث خطة تطوير المهارات المخصصة لك. يرجى التأكد من دقة المعلومات المدخلة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
