import React from 'react';
import { Compass, Brain, ArrowLeft, Clock, BarChart, ChevronLeft, User } from 'lucide-react';
import Link from 'next/link';

export default function AssessmentCenter() {
  const tests = [
    {
      id: "holland",
      title: "مقياس هولاند للميول المهنية",
      desc: "اكتشف بيئات العمل التي تناسب شخصيتك ونوع الميول المهنية الغالب عليك (واقعي، بحثي، فني، اجتماعي، مبادر، تقليدي).",
      icon: <Compass className="text-primary-600" size={32} />,
      time: "10-15 دقيقة",
      questions: 30,
      color: "bg-primary-50",
      href: "/assessments/holland"
    },
    {
      id: "mental-ability",
      title: "اختبار القدرات العقلية العامة",
      desc: "قياس مهاراتك في الجوانب اللغوية، المنطقية الرياضية، المكانية، وقوة الذاكرة لتحديد نقاط قوتك الذهنية.",
      icon: <Brain className="text-blue-600" size={32} />,
      time: "15-20 دقيقة",
      questions: 12,
      color: "bg-blue-50",
      href: "/assessments/mental-ability"
    },
    {
      id: "personality",
      title: "مقياس السمات الشخصية",
      desc: "تحليل لنمطك السلوكي (الانبساط، الانضباط، الاستقرار الانفعالي، الانفتاح) وتأثيره على توافقك المهني.",
      icon: <User className="text-indigo-600" size={32} />,
      time: "5-8 دقائق",
      questions: 16,
      color: "bg-indigo-50",
      href: "/assessments/personality"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent font-arabic py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12 glass-morphism p-8 rounded-[2.5rem] border border-white/40 shadow-xl">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-900  font-black hover:text-primary-600 transition-colors mb-6 group">
            <ArrowLeft size={18} className="group-hover:translate-x-1 transition-transform" />
            <span>العودة للرئيسية</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-primary-950  mb-4">مركز المقاييس والاختبارات</h1>
          <p className="text-slate-900  text-lg font-bold">
            نقدم لك مجموعة من المقاييس العلمية المقننة لمساعدتك في فهم ذاتك وتحديد مسارك المهني والأكاديمي بدقة.
          </p>
        </div>

        {/* Tests Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {tests.map((test) => (
            <div key={test.id} className="glass-morphism p-8 border border-white/40 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between rounded-[2.5rem]">
              <div>
                <div className={`w-16 h-16 ${test.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/5`}>
                  {test.icon}
                </div>
                <h3 className="text-2xl font-black text-primary-950  mb-4">{test.title}</h3>
                <p className="text-slate-900  text-sm leading-relaxed mb-6 font-bold">
                  {test.desc}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-6 text-sm font-black text-slate-900 ">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{test.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart size={16} />
                    <span>{test.questions} سؤالاً</span>
                  </div>
                </div>
                
                <button 
                  disabled
                  className="block w-full text-center py-4 bg-slate-200 text-slate-400 dark:bg-slate-800 dark:text-slate-600 font-bold rounded-2xl cursor-not-allowed flex items-center justify-center gap-2"
                >
                  ابدأ المقياس الآن
                  <ChevronLeft size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Card */}
        <div className="max-w-4xl mx-auto mt-12 p-8 bg-primary-600 rounded-3xl text-white relative overflow-hidden shadow-xl shadow-primary-600/20">
          <div className="relative z-10">
            <h4 className="text-xl font-bold mb-3">لماذا هذه المقاييس مهمة؟</h4>
            <p className="text-primary-100 leading-relaxed max-w-2xl">
              تساعدك هذه الاختبارات على تجنب التخبط في اختيار التخصص الجامعي، وتوفر لك رؤية واضحة حول المهن التي تتوافق مع قدراتك الذهنية وميولك الشخصية، مما يزيد من فرص نجاحك وتميزك في المستقبل.
            </p>
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary-400/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
