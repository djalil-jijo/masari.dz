"use client";

import React, { useState } from 'react';
import PersonalityTest from '@/components/assessments/PersonalityTest';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function PersonalityPage() {
  const router = useRouter();

  const handleComplete = (results: any) => {
    // In a real app, we would save results to a global state or database
    // For now, we'll store in localStorage and redirect
    localStorage.setItem('user_personality', JSON.stringify(results));
    router.push('/dashboard/results');
  };

  return (
    <div className="min-h-screen bg-slate-50  py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="px-4 py-1.5 bg-indigo-100  text-indigo-600  rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
            مقياس السمات الشخصية
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900  mt-4">
            فهم الذات والنمط السلوكي
          </h1>
        </motion.div>

        <PersonalityTest onComplete={handleComplete} />
      </div>
    </div>
  );
}
