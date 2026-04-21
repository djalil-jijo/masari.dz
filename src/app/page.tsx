import { 
  BarChart3, 
  BrainCircuit, 
  Compass, 
  GitCompare, 
  ArrowLeft, 
  CheckCircle2,
  Users,
  LayoutDashboard,
  Mail
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent font-arabic">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full glass-morphism border-b border-indigo-100/20">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-600/30">
              <Compass size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-primary-900 dark:text-white">مساري</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            <Link href="/" className="hover:text-primary-600 transition-colors font-bold">الرئيسية</Link>
            <Link href="#" className="hover:text-primary-600 transition-colors font-bold">عن المنصة</Link>
            <Link href="/assessments" className="hover:text-primary-600 transition-colors font-bold">المقاييس</Link>
            <Link href="#" className="hover:text-primary-600 transition-colors font-bold">تواصل معنا</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-bold text-primary-600 px-4 py-2 hover:bg-primary-50 rounded-lg transition-all">تسجيل الدخول</Link>
            <Link href="/assessments" className="bg-primary-600 text-white text-sm font-bold px-6 py-2.5 rounded-lg shadow-lg shadow-primary-600/30 hover:bg-primary-700 transition-all flex items-center gap-2 group">
              ابدأ الآن
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 dark:opacity-10 pointer-events-none">
            <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-secondary-400 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-primary-300 rounded-full blur-[100px]"></div>
          </div>

          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-primary-600 animate-pulse"></span>
              مستقبلك يبدأ من هنا
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-950 dark:text-white leading-[1.2] mb-8 max-w-4xl mx-auto">
               اكتشف <span className="text-primary-600 underline decoration-secondary-300 underline-offset-8">مسارك المهني</span> الأمثل بدقة علمية مذهلة
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              منصة متكاملة تستخدم أحدث مقاييس الميول والقدرات لتحليل شخصيتك وتوجيهك نحو التخصص الجامعي والمهني الذي يناسبك تماماً.
            </p>
            
            <div className="flex flex-col sm:row items-center justify-center gap-4">
              <Link href="/assessments" className="w-full sm:w-auto bg-primary-600 text-white text-lg font-bold px-10 py-4 rounded-xl shadow-xl shadow-primary-600/30 hover:bg-primary-700 transition-all transform hover:scale-105 flex items-center justify-center">
                ابدأ رحلة الاكتشاف
              </Link>
              <Link href="/login" className="w-full sm:w-auto bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-lg font-bold px-10 py-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                عرض نموذج للنتائج
              </Link>
            </div>
          </div>
        </section>

        {/* About Masari Section — faithful to sketch */}
        <section className="py-20 bg-transparent relative overflow-hidden" id="about">
          <div className="container mx-auto px-4 max-w-4xl">

            {/* ── Cloud logo ── */}
            <div className="flex justify-center mb-6">
              <div className="relative flex items-center justify-center">
                {/* Two small bubbles */}
                <div className="absolute -bottom-2 -left-4 w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"></div>
                <div className="absolute -bottom-4 -left-1 w-3 h-3 rounded-full border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"></div>
                {/* Cloud body */}
                <div className="relative px-10 py-3 bg-white dark:bg-slate-800 rounded-[50px] border-2 border-slate-300 dark:border-slate-600 shadow-md">
                  <span
                    className="text-2xl font-bold text-slate-700 dark:text-slate-200"
                    style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                  >
                    Masari
                  </span>
                </div>
              </div>
            </div>

            {/* ── Tagline ribbon ── */}
            <div className="relative mb-10">
              {/* Ribbon tails */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-full bg-primary-200 dark:bg-primary-800 skew-x-3 -z-10 rounded-l-sm"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-full bg-primary-200 dark:bg-primary-800 -skew-x-3 -z-10 rounded-r-sm"></div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-600 shadow-lg rounded-lg px-10 py-5 text-center">
                <p className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white leading-relaxed" dir="rtl">
                  رحلة التغلب على التحديات تبدأ بخطوة ونحن هنا لنرافقك في كل خطوة .
                </p>
              </div>
            </div>

            {/* ── "عن Masari" title ── */}
            <div className="text-left mb-6 px-1">
              <span
                className="text-2xl font-bold text-red-500"
                style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
              >
                عن Masari
              </span>
            </div>

            {/* ── Box 1: Platform description ── */}
            <div className="border-2 border-red-400 rounded-2xl p-6 mb-6 bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm shadow-md" dir="rtl">
              <p className="text-slate-700 dark:text-slate-200 text-base md:text-lg leading-loose font-medium">
                هي منصة رقمية متخصصة في{' '}
                <span className="font-bold">توزيع، تنظيم،</span>{' '}
                تحليل نتائج المقاييس النفسية والمهنية ؛
                تهدف إلى دعم مستشاري التوجيه، الأخصائيين
                النفسيين، التلاميذ، أولياء الأمور، في فهم السمات
                الشخصية والمهنية، وتقديم إرشادات عملية، و
                خطط تطوير المهارات، استشارات نفسية عن بعد .
              </p>
            </div>

            {/* ── Box 2: Researchers ── */}
            <div className="border-2 border-red-400 rounded-2xl p-6 bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm shadow-md" dir="rtl">
              <p className="text-slate-700 dark:text-slate-200 text-base md:text-lg leading-loose font-medium">
                كما تتيح للباحثين الأكاديميين الوصول إلى مقاييس
                موثوقة لإجراء الدراسات العلمية بسهولة ودقة
              </p>
            </div>

          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-950 dark:text-white mb-4">وحدات المنصة المتكاملة</h2>
              <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-medium">نعتمد على منهجية علمية رصينة تغطي كافة جوانب شخصية الطالب وقدراته</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-8 rounded-2xl glass-morphism border border-indigo-100/20 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary-950 dark:text-white mb-4">وحدة تحليل النتائج</h3>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary-600" />
                    تحليل مقاييس الميول المهنية (Holland)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary-600" />
                    قياس القدرات العقلية (لغوية، منطقية، مكانية)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary-600" />
                    مقاييس السمات الشخصية والسلوك
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="p-8 rounded-2xl glass-morphism border border-indigo-100/20 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BrainCircuit size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary-950 dark:text-white mb-4">التفسير النفسي والمهني</h3>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary-600" />
                    تفسير مفصل لشخصية الطالب
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary-600" />
                    تحديد نقاط القوة والضعف بدقة
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary-600" />
                    المجالات الوظيفية المتوافقة مع النمط
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="p-8 rounded-2xl glass-morphism border border-indigo-100/20 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <GitCompare size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary-950 dark:text-white mb-4">وحدة التوصيات الذكية</h3>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary-600" />
                    اقتراح التخصصات المناسبة بدقة 
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary-600" />
                    درجة التوافق مع كل تخصص (0-100%)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary-600" />
                    اقتراح مسارات جامعية مستقبلية
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-24 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-950 dark:text-white mb-4">كيف تعمل منصة مساري؟</h2>
              <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-medium">رحلة بسيطة وممنهجة تبدأ باكتشاف الذات وتنتهي برسم المستقبل</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-indigo-100 -z-10"></div>
              {[
                { step: "01", title: "التسجيل", desc: "أنشئ حسابك الشخصي وابدأ الرحلة" },
                { step: "02", title: "الاختبار", desc: "أكمل مقاييس الميول والقدرات والسمات" },
                { step: "03", title: "التحليل", desc: "يقوم النظام بتحليل بياناتك بمنهجية علمية" },
                { step: "04", title: "التوصيات", desc: "احصل على تقريرك المتكامل وجلسة استشارية" },
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-primary-600/30 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-primary-950 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section (Now as a Statistics Section) */}
        <section className="py-24 bg-transparent overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 text-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 text-sm font-bold mb-6">
                  <LayoutDashboard size={16} />
                  تحكم كامل للإدارة
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-primary-950 dark:text-white mb-6 leading-tight">وحدة رصد وإحصاء متكاملة للجهات الإشرافية</h2>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed font-medium">
                  نظام موجه للإدارة العليا من أجل تبويب وترتيب وتحليل البيانات المرصودة قراءة إحصائية دقيقة، مما يساعد في التخطيط المستقبلي وبناء قاعدة بيانات بحثية قوية.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl glass-morphism border border-indigo-100/20">
                    <div className="text-3xl font-bold text-primary-600 mb-1">+10,000</div>
                    <div className="text-sm font-bold text-slate-700 dark:text-slate-300">طالب مسجل</div>
                  </div>
                  <div className="p-6 rounded-2xl glass-morphism border border-indigo-100/20">
                    <div className="text-3xl font-bold text-primary-600 mb-1">98%</div>
                    <div className="text-sm font-bold text-slate-700 dark:text-slate-300">دقة التحليل</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="relative z-10 rounded-2xl shadow-2xl border border-indigo-100/30 glass-morphism overflow-hidden">
                  <div className="h-8 bg-white/20 flex items-center px-4 gap-2 border-b border-indigo-100/20">
                    <div className="w-3 h-3 rounded-full bg-red-400/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/50"></div>
                  </div>
                  <div className="p-6">
                    <div className="h-64 bg-primary-50/30 rounded-lg flex items-end justify-between p-4 gap-2 border border-indigo-100/10">
                       <div className="w-full bg-primary-200 h-[40%] rounded-t-lg transition-all hover:h-[45%]"></div>
                       <div className="w-full bg-primary-400 h-[70%] rounded-t-lg transition-all hover:h-[75%]"></div>
                       <div className="w-full bg-primary-600 h-[90%] rounded-t-lg transition-all hover:h-[95%] shadow-lg shadow-primary-600/20"></div>
                       <div className="w-full bg-primary-300 h-[55%] rounded-t-lg transition-all hover:h-[60%]"></div>
                       <div className="w-full bg-primary-500 h-[80%] rounded-t-lg transition-all hover:h-[85%] shadow-md shadow-primary-500/20"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-400/20 rounded-full blur-[80px]"></div>
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-secondary-400/20 rounded-full blur-[80px]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-950 dark:text-white mb-4">نخبة من المستشارين والخبراء</h2>
              <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-medium">نجمع بين الذكاء الاصطناعي والخبرة الإنسانية لتقديم أفضل توجيه</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "د. محمد عبدالله", role: "خبير مقاييس نفسية", info: "خبرة 15 عاماً في التوجيه المهني" },
                { name: "أ. سارة المنصور", role: "مستشارة أكاديمية", info: "متخصصة في مسارات التعليم العالي" },
                { name: "د. فهد القحطاني", role: "محلل بيانات تربوية", info: "خبير في بناء الاختبارات والقدرات" },
              ].map((member, i) => (
                <div key={i} className="glass-morphism p-8 rounded-3xl text-center border border-white/40 hover:scale-105 transition-transform">
                   <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-6 flex items-center justify-center text-primary-600 font-bold text-2xl">
                     {member.name[0]}
                   </div>
                   <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-2">{member.name}</h3>
                   <div className="text-primary-600 text-sm font-bold mb-4">{member.role}</div>
                   <p className="text-slate-600 text-xs font-medium">{member.info}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-transparent">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950 dark:text-white mb-12 text-center">الأسئلة الشائعة</h2>
            <div className="space-y-4">
              {[
                { q: "ما هي دقة نتائج المقاييس في المنصة؟", a: "تصل دقة النتائج إلى 98% بفضل استخدامنا لمقاييس عالمية معتمدة تم تكييفها مع البيئة المحلية." },
                { q: "هل يمكن للمؤسسات التعليمية استخدام المنصة؟", a: "نعم، توفر المنصة لوحات تحكم متقدمة للمدارس والجامعات لمتابعة أداء الطلاب بشكل جماعي." },
                { q: "كيف أحصل على التقرير النهائي؟", a: "يصدر التقرير فوراً بعد الانتهاء من كافة أقسام المقياس، ويمكن تحميله بصيغة PDF." },
              ].map((faq, i) => (
                <div key={i} className="glass-morphism p-6 rounded-2xl border border-white/20">
                  <h4 className="text-lg font-bold text-primary-900 dark:text-white mb-3 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary-600" />
                    {faq.q}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="glass-morphism border-t border-indigo-100/20 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1 text-right">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Compass size={24} />
                </div>
                <span className="text-2xl font-bold tracking-tight text-primary-950 dark:text-white">مساري</span>
              </div>
              <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed font-medium">نساعدك على رسم مستقبلك بخطوات واثقة ومدروسة عبر أحدث المقاييس العلمية.</p>
            </div>
            
            <div>
              <h4 className="font-bold text-primary-950 dark:text-white mb-6">روابط سريعة</h4>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
                <li><Link href="/" className="hover:text-primary-600">الرئيسية</Link></li>
                <li><Link href="#" className="hover:text-primary-600">عن المنصة</Link></li>
                <li><Link href="/assessments" className="hover:text-primary-600">المقاييس</Link></li>
                <li><Link href="#" className="hover:text-primary-600">تواصل معنا</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-primary-950 dark:text-white mb-6">الدعم</h4>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
                <li><Link href="#" className="hover:text-primary-600">الأسئلة الشائعة</Link></li>
                <li><Link href="#" className="hover:text-primary-600">سياسة الخصوصية</Link></li>
                <li><Link href="#" className="hover:text-primary-600">شروط الخدمة</Link></li>
                <li><Link href="#" className="hover:text-primary-600">مركز المساعدة</Link></li>
              </ul>
            </div>

            <div className="text-right">
              <h4 className="font-bold text-primary-950 dark:text-white mb-6">تواصل معنا</h4>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
                <li className="flex items-center justify-end gap-2">support@masari.com <Mail size={16} /></li>
                <li className="flex items-center justify-end gap-2">+966 500 000 000 <Users size={16} /></li>
                <li className="flex items-center justify-end gap-2">الرياض، المملكة العربية السعودية</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-indigo-100/10 text-center">
            <div className="text-slate-500 dark:text-slate-500 text-xs font-bold">
              © {new Date().getFullYear()} مساري - جميع الحقوق محفوظة لشركة مساري الذكية.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
