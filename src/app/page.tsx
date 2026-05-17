import {
  BarChart3,
  BrainCircuit,
  Compass,
  GitCompare,
  ArrowLeft,
  CheckCircle2,
  Users,
  LayoutDashboard,
  Mail,
  BookOpen,
  MessageSquare,
  Calendar,
  UserCheck,
  GraduationCap,
  Microscope,
} from "lucide-react";
import Link from "next/link";
export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent font-arabic">
      {" "}
      {/* Navigation */}{" "}
      <header className="sticky top-0 z-50 w-full glass-morphism border-b border-indigo-100/20">
        {" "}
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {" "}
          <div className="flex items-center gap-2">
            {" "}
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-600/30">
              {" "}
              <Compass size={24} />{" "}
            </div>{" "}
            <span className="text-xl font-bold tracking-tight text-primary-900 ">
              مساري
            </span>{" "}
          </div>{" "}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-800 ">
            {" "}
            <Link
              href="/"
              className="hover:text-primary-600 transition-colors font-bold"
            >
              الرئيسية
            </Link>{" "}
            <Link
              href="#"
              className="hover:text-primary-600 transition-colors font-bold"
            >
              عن المنصة
            </Link>{" "}
            <Link
              href="/assessments"
              className="hover:text-primary-600 transition-colors font-bold"
            >
              المقاييس
            </Link>{" "}
            <Link
              href="#"
              className="hover:text-primary-600 transition-colors font-bold"
            >
              تواصل معنا
            </Link>{" "}
          </nav>{" "}
          <div className="flex items-center gap-4">
            {" "}
            <Link
              href="/login"
              className="text-sm font-bold text-primary-600 px-4 py-2 hover:bg-primary-50 rounded-lg transition-all"
            >
              تسجيل الدخول
            </Link>{" "}
            <Link
              href="/assessments"
              className="bg-primary-600 text-white text-sm font-bold px-6 py-2.5 rounded-lg shadow-lg shadow-primary-600/30 hover:bg-primary-700 transition-all flex items-center gap-2 group"
            >
              {" "}
              ابدأ الآن{" "}
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </header>{" "}
      <main className="flex-1">
        {" "}
        {/* ══════════════════════════════════════════ ABOUT MASARI — Premium Hero Implementation ══════════════════════════════════════════ */}{" "}
        <section
          className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden min-h-[90vh] flex items-center"
          id="about"
        >
          {" "}
          {/* Premium Ambient Background */}{" "}
          <div className="absolute inset-0 -z-10 bg-white/60 backdrop-blur-[1px]"></div>{" "}
          <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
            {" "}
            <div className="absolute top-[0%] left-[10%] w-[40%] h-[40%] bg-primary-400/20 rounded-full blur-[140px] mix-blend-multiply animate-pulse duration-10000" />{" "}
            <div className="absolute bottom-[0%] right-[10%] w-[35%] h-[35%] bg-secondary-400/20 rounded-full blur-[120px] mix-blend-multiply " />{" "}
            <div className="absolute top-[30%] left-[40%] w-[25%] h-[25%] bg-accent-pink/30 rounded-full blur-[100px] mix-blend-multiply " />{" "}
          </div>{" "}
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            {" "}
            {/* ── ① Premium Cloud Badge ── */}{" "}
            <div className="flex justify-center mb-10 animate-fade-in-up">
              {" "}
              <div className="relative group cursor-default">
                {" "}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 via-secondary-300 to-primary-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>{" "}
                <div className="relative flex items-center justify-center px-12 py-5 bg-white/90 backdrop-blur-xl rounded-[40px] border border-white/50 shadow-2xl">
                  {" "}
                  <div className="absolute -bottom-3 left-8 w-6 h-6 rounded-full bg-white/90 backdrop-blur-xl border border-white/50 absolute"></div>{" "}
                  <div className="absolute -bottom-6 left-12 w-3 h-3 rounded-full bg-white/90 backdrop-blur-xl border border-white/50 absolute"></div>{" "}
                  <span
                    className="text-4xl lg:text-5xl font-bold text-primary-800 tracking-wider drop-shadow-sm"
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontStyle: "italic",
                    }}
                  >
                    {" "}
                    Masari{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* ── ② Elegant Tagline Pill ── */}{" "}
            <div
              className="flex justify-center mb-16 animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              {" "}
              <div className="relative max-w-2xl text-center">
                {" "}
                <div className="absolute -inset-x-6 -inset-y-3 bg-gradient-to-r from-transparent via-primary-100/50 to-transparent rounded-2xl -z-10"></div>{" "}
                <p
                  className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight drop-shadow-sm"
                  dir="rtl"
                >
                  {" "}
                  <span className="text-primary-700 ">
                    رحلة التغلب على التحديات
                  </span>{" "}
                  تبدأ بخطوة ونحن هنا لنرافقك في كل خطوة .{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* ── ③ "عن Masari" Title ── */}{" "}
            <div
              className="flex items-center gap-4 mb-8 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              {" "}
              <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-rose-400/50"></div>{" "}
              <span
                className="text-xl md:text-2xl font-bold text-rose-600 tracking-wider"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontStyle: "italic",
                }}
              >
                {" "}
                عن &nbsp;Masari{" "}
              </span>{" "}
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-rose-400/50"></div>{" "}
            </div>{" "}
            {/* ── ④ Advanced Glassmorphic Content Boxes ── */}{" "}
            <div
              className="grid gap-6 mb-12 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              {" "}
              {/* Box 1 – Platform description */}{" "}
              <div className="group relative p-[1.5px] rounded-3xl bg-gradient-to-br from-rose-300/60 via-primary-200/50 to-slate-300/60 hover:shadow-2xl transition-all duration-500 shadow-xl shadow-primary-900/5">
                {" "}
                <div
                  className="relative h-full bg-white/95 backdrop-blur-2xl rounded-[1.4rem] p-8 md:p-10"
                  dir="rtl"
                >
                  {" "}
                  <p className="text-slate-900 text-lg md:text-xl leading-relaxed md:leading-loose font-bold">
                    {" "}
                    هي منصة رقمية متخصصة في{" "}
                    <span className="text-primary-800 py-1 px-2 mx-1 bg-primary-100 rounded-lg whitespace-nowrap">
                      توزيع، تنظيم،
                    </span>{" "}
                    تحليل نتائج المقاييس النفسية والمهنية؛ تهدف إلى دعم{" "}
                    <span className="text-black ">مستشاري التوجيه</span>،{" "}
                    <span className="text-black ">الأخصائيين النفسيين</span>،{" "}
                    <span className="text-black ">التلاميذ</span>، و{" "}
                    <span className="text-black ">أولياء الأمور</span>، في فهم
                    السمات الشخصية والمهنية، وتقديم إرشادات عملية، وخطط تطوير
                    المهارات، مع توفير استشارات نفسية عن بعد.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              {/* Box 2 – Researchers */}{" "}
              <div className="group relative p-[1.5px] rounded-3xl bg-gradient-to-br from-slate-300/60 via-rose-300/50 to-primary-200/50 hover:shadow-2xl transition-all duration-500 shadow-xl shadow-primary-900/5">
                {" "}
                <div
                  className="relative h-full bg-white/95 backdrop-blur-2xl rounded-[1.4rem] p-8"
                  dir="rtl"
                >
                  {" "}
                  <div className="flex items-start gap-4">
                    {" "}
                    <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700 shadow-inner">
                      {" "}
                      <BrainCircuit size={24} />{" "}
                    </div>{" "}
                    <p className="text-slate-900 text-lg md:text-xl leading-relaxed md:leading-loose font-bold">
                      {" "}
                      كما تتيح{" "}
                      <span className="text-rose-700 ">
                        للباحثين الأكاديميين
                      </span>{" "}
                      الوصول إلى مقاييس موثوقة لإجراء الدراسات العلمية بسهولة
                      ودقة عالية.{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* ── ⑤ Call To Action ── */}{" "}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up"
              style={{ animationDelay: "500ms" }}
            >
              {" "}
              <Link
                href="/assessments"
                className="w-full sm:w-auto relative group overflow-hidden rounded-2xl shadow-xl shadow-primary-600/20 bg-primary-600 hover:bg-primary-700 transition"
              >
                {" "}
                <div className="relative flex items-center justify-center gap-3 px-10 py-4 text-white text-xl font-bold">
                  {" "}
                  ابدأ رحلة الاكتشاف{" "}
                  <ArrowLeft
                    size={22}
                    className="group-hover:-translate-x-2 transition-transform duration-300"
                  />{" "}
                </div>{" "}
              </Link>{" "}
              <Link
                href="/login"
                className="w-full sm:w-auto relative group rounded-2xl bg-white hover:bg-slate-50 :bg-slate-700 transition border-2 border-slate-200 "
              >
                {" "}
                <div className="relative flex items-center justify-center px-10 py-4 text-slate-900 text-xl font-bold">
                  {" "}
                  تسجيل الدخول{" "}
                </div>{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Features Section */}{" "}
        <section className="py-24 bg-transparent">
          {" "}
          <div className="container mx-auto px-4">
            {" "}
            <div className="text-center mb-16">
              {" "}
              <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                وحدات المنصة المتكاملة
              </h2>{" "}
              <p className="text-slate-900 max-w-2xl mx-auto font-medium">
                بيئة رقمية شاملة تجمع بين دقة المقاييس العلمية وتعدد خيارات التوجيه والإرشاد
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {" "}
              {[
                {
                  id: "1",
                  title: "وحدة المقاييس النفسية",
                  subtitle: "تطبيق وتفريغ المقاييس من طرف الأخصائيين والمستشارين",
                  icon: <BrainCircuit size={28} />,
                  bgColor: "bg-rose-100 text-rose-600",
                  items: ["مجموعة مقاييس جاهزة ومعتمدة", "استخدام مباشر داخل المنصة", "إدخال وتفريغ تلقائي للنتائج"]
                },
                {
                  id: "2",
                  title: "وحدة التحليل",
                  subtitle: "تحليل علمي دقيق لنتائج المقاييس",
                  icon: <BarChart3 size={28} />,
                  bgColor: "bg-blue-100 text-blue-600",
                  items: ["تحليل السمات الشخصية، القدرات، الميول", "نتائج قابلة للتفسير والاستغلال"]
                },
                {
                  id: "3",
                  title: "وحدة التفسير",
                  subtitle: "فهم شامل للنتائج بلغة واضحة للمختص والمستفيد",
                  icon: <BookOpen size={28} />,
                  bgColor: "bg-purple-100 text-purple-600",
                  items: ["تقارير تفسيرية مبسطة", "قراءة نفسية وتربوية متكاملة", "دعم اتخاذ القرار"]
                },
                {
                  id: "4",
                  title: "وحدة الإرشاد والتطوير",
                  subtitle: "تحويل النتائج إلى خطوات عملية",
                  icon: <Compass size={28} />,
                  bgColor: "bg-teal-100 text-teal-600",
                  items: ["خطط تطوير مهارات", "إرشادات نفسية وتربوية", "توجيه دراسي ومهني عند الحاجة"]
                },
                {
                  id: "5",
                  title: "وحدة التواصل",
                  subtitle: "تفاعل مباشر بين المختصين والمستفيدين",
                  icon: <MessageSquare size={28} />,
                  bgColor: "bg-orange-100 text-orange-600",
                  items: ["تواصل بين المستشار والتلميذ والأخصائي وزبائنه", "الرد على الاستفسارات ومتابعة الحالات"]
                },
                {
                  id: "6",
                  title: "وحدة الحجز",
                  subtitle: "تنظيم الاستشارات والجلسات",
                  icon: <Calendar size={28} />,
                  bgColor: "bg-red-100 text-red-600",
                  items: ["حجز مواعيد إلكتروني", "إدارة جدول المختص", "تتبع الجلسات"]
                },
                {
                  id: "7",
                  title: "فضاء المختص",
                  subtitle: "بيئة عمل متكاملة لإدارة النشاط المهني لأخصائي/مستشار",
                  icon: <UserCheck size={28} />,
                  bgColor: "bg-amber-100 text-amber-600",
                  items: ["إنشاء حساب مهني", "استخدام المقاييس وإدارة الحالات", "تقديم الاستشارات ومتابعة المستفيدين"]
                },
                {
                  id: "8",
                  title: "فضاء المستفيد",
                  subtitle: "تجربة مبسطة للتلميذ أو المستخدم",
                  icon: <GraduationCap size={28} />,
                  bgColor: "bg-emerald-100 text-emerald-600",
                  items: ["إجراء المقاييس", "الاطلاع على النتائج وطلب استشارة", "التواصل مع المختص"]
                },
                {
                  id: "9",
                  title: "وحدة البحث العلمي",
                  subtitle: "مكتبة مقاييس جاهزة للباحثين",
                  icon: <Microscope size={28} />,
                  bgColor: "bg-indigo-100 text-indigo-600",
                  items: ["مقاييس موثوقة", "سهولة جمع البيانات", "دعم الدراسات الأكاديمية"]
                }
              ].map((feature, idx) => (
                <div key={idx} className="p-8 rounded-2xl glass-morphism border border-indigo-100/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-900/10 transition-all duration-300 group flex flex-col h-full">
                  <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm`}>
                    {feature.icon}
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl font-black text-slate-600 group-hover:text-primary-200 transition-colors drop-shadow-sm">{feature.id}</span>
                    <h3 className="text-xl font-bold text-black">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-primary-700 font-bold mb-5 leading-relaxed">{feature.subtitle}</p>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-transparent mb-5 rounded-full"></div>
                  <ul className="space-y-3 text-slate-800 text-sm font-medium mt-auto">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 size={16} className="text-primary-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* How it Works Section */}{" "}
        <section className="py-24 bg-transparent">
          {" "}
          <div className="container mx-auto px-4">
            {" "}
            <div className="text-center mb-16">
              {" "}
              <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                كيف تعمل منصة مساري؟
              </h2>{" "}
              <p className="text-slate-900 max-w-2xl mx-auto font-medium">
                رحلة بسيطة وممنهجة تبدأ باكتشاف الذات وتنتهي برسم المستقبل
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {" "}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-indigo-100 -z-10"></div>{" "}
              {[
                {
                  step: "1",
                  title: "إنشاء حساب مهني أو مستخدم",
                  desc: "(أخصائي / مستشار / طالب / باحث)",
                },
                {
                  step: "2",
                  title: "تطبيق المقاييس",
                  desc: "من طرف المستشار أو الأخصائي أو المستخدم",
                },
                {
                  step: "3",
                  title: "تحليل وتفسير النتائج",
                  desc: "تقارير علمية واضحة",
                },
                {
                  step: "4",
                  title: "التوجيه والمتابعة",
                  desc: "تواصل + حجز + خطط تطوير",
                },
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  {" "}
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-primary-600/30 group-hover:scale-110 transition-transform">
                    {" "}
                    {item.step}{" "}
                  </div>{" "}
                  <h3 className="text-xl font-bold text-black mb-2">
                    {item.title}
                  </h3>{" "}
                  <p className="text-sm text-slate-800 leading-relaxed font-medium">
                    {item.desc}
                  </p>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Dashboard Preview Section (Now as a Statistics Section) */}{" "}
        <section className="py-24 bg-transparent overflow-hidden">
          {" "}
          <div className="container mx-auto px-4">
            {" "}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {" "}
              <div className="flex-1 text-right">
                {" "}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-600 text-sm font-bold mb-6">
                  {" "}
                  <LayoutDashboard size={16} /> تحكم كامل للإدارة{" "}
                </div>{" "}
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  وحدة رصد وإحصاء متكاملة للجهات الإشرافية
                </h2>{" "}
                <p className="text-lg text-slate-900 mb-8 leading-relaxed font-medium">
                  {" "}
                  نظام موجه للإدارة العليا من أجل تبويب وترتيب وتحليل البيانات
                  المرصودة قراءة إحصائية دقيقة، مما يساعد في التخطيط المستقبلي
                  وبناء قاعدة بيانات بحثية قوية.{" "}
                </p>{" "}
                <div className="grid grid-cols-2 gap-6">
                  {" "}
                  <div className="p-6 rounded-2xl glass-morphism border border-indigo-100/20">
                    {" "}
                    <div className="text-3xl font-bold text-primary-600 mb-1">
                      +10,000
                    </div>{" "}
                    <div className="text-sm font-bold text-slate-900 ">
                      طالب مسجل
                    </div>{" "}
                  </div>{" "}
                  <div className="p-6 rounded-2xl glass-morphism border border-indigo-100/20">
                    {" "}
                    <div className="text-3xl font-bold text-primary-600 mb-1">
                      98%
                    </div>{" "}
                    <div className="text-sm font-bold text-slate-900 ">
                      دقة التحليل
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex-1 relative">
                {" "}
                <div className="relative z-10 rounded-2xl shadow-2xl border border-indigo-100/30 glass-morphism overflow-hidden">
                  {" "}
                  <div className="h-8 bg-white/20 flex items-center px-4 gap-2 border-b border-indigo-100/20">
                    {" "}
                    <div className="w-3 h-3 rounded-full bg-red-400/50"></div>{" "}
                    <div className="w-3 h-3 rounded-full bg-yellow-400/50"></div>{" "}
                    <div className="w-3 h-3 rounded-full bg-green-400/50"></div>{" "}
                  </div>{" "}
                  <div className="p-6">
                    {" "}
                    <div className="h-64 bg-primary-50/30 rounded-lg flex items-end justify-between p-4 gap-2 border border-indigo-100/10">
                      {" "}
                      <div className="w-full bg-primary-200 h-[40%] rounded-t-lg transition-all hover:h-[45%]"></div>{" "}
                      <div className="w-full bg-primary-400 h-[70%] rounded-t-lg transition-all hover:h-[75%]"></div>{" "}
                      <div className="w-full bg-primary-600 h-[90%] rounded-t-lg transition-all hover:h-[95%] shadow-lg shadow-primary-600/20"></div>{" "}
                      <div className="w-full bg-primary-300 h-[55%] rounded-t-lg transition-all hover:h-[60%]"></div>{" "}
                      <div className="w-full bg-primary-500 h-[80%] rounded-t-lg transition-all hover:h-[85%] shadow-md shadow-primary-500/20"></div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-400/20 rounded-full blur-[80px]"></div>{" "}
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-secondary-400/20 rounded-full blur-[80px]"></div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Team Section */}{" "}
        <section className="py-24 bg-transparent">
          {" "}
          <div className="container mx-auto px-4">
            {" "}
            <div className="text-center mb-16">
              {" "}
              <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                نخبة من المستشارين والخبراء
              </h2>{" "}
              <p className="text-slate-900 max-w-2xl mx-auto font-medium">
                نجمع بين الذكاء الاصطناعي والخبرة الإنسانية لتقديم أفضل توجيه
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {" "}
              {[
                {
                  name: "د. محمد عبدالله",
                  role: "خبير مقاييس نفسية",
                  info: "خبرة 15 عاماً في التوجيه المهني",
                },
                {
                  name: "أ. سارة المنصور",
                  role: "مستشارة أكاديمية",
                  info: "متخصصة في مسارات التعليم العالي",
                },
                {
                  name: "د. فهد القحطاني",
                  role: "محلل بيانات تربوية",
                  info: "خبير في بناء الاختبارات والقدرات",
                },
              ].map((member, i) => (
                <div
                  key={i}
                  className="glass-morphism p-8 rounded-3xl text-center border border-white/40 hover:scale-105 transition-transform"
                >
                  {" "}
                  <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-6 flex items-center justify-center text-primary-600 font-bold text-2xl">
                    {" "}
                    {member.name[0]}{" "}
                  </div>{" "}
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    {member.name}
                  </h3>{" "}
                  <div className="text-primary-600 text-sm font-bold mb-4">
                    {member.role}
                  </div>{" "}
                  <p className="text-slate-800 text-xs font-medium">
                    {member.info}
                  </p>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* FAQ Section */}{" "}
        <section className="py-24 bg-transparent">
          {" "}
          <div className="container mx-auto px-4 max-w-3xl">
            {" "}
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
              الأسئلة الشائعة
            </h2>{" "}
            <div className="space-y-4">
              {" "}
              {[
                {
                  q: "ما هي دقة نتائج المقاييس في المنصة؟",
                  a: "تصل دقة النتائج إلى 98% بفضل استخدامنا لمقاييس عالمية معتمدة تم تكييفها مع البيئة المحلية.",
                },
                {
                  q: "هل يمكن للمؤسسات التعليمية استخدام المنصة؟",
                  a: "نعم، توفر المنصة لوحات تحكم متقدمة للمدارس والجامعات لمتابعة أداء الطلاب بشكل جماعي.",
                },
                {
                  q: "كيف أحصل على التقرير النهائي؟",
                  a: "يصدر التقرير فوراً بعد الانتهاء من كافة أقسام المقياس، ويمكن تحميله بصيغة PDF.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="glass-morphism p-6 rounded-2xl border border-white/20"
                >
                  {" "}
                  <h4 className="text-lg font-bold text-primary-900 mb-3 flex items-center gap-2">
                    {" "}
                    <CheckCircle2 size={18} className="text-primary-600" />{" "}
                    {faq.q}{" "}
                  </h4>{" "}
                  <p className="text-sm text-slate-800 font-medium leading-relaxed">
                    {faq.a}
                  </p>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </main>{" "}
      <footer className="glass-morphism border-t border-indigo-100/20 py-16">
        {" "}
        <div className="container mx-auto px-4">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {" "}
            <div className="col-span-1 md:col-span-1 text-right">
              {" "}
              <div className="flex items-center gap-2 mb-6">
                {" "}
                <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  {" "}
                  <Compass size={24} />{" "}
                </div>{" "}
                <span className="text-2xl font-bold tracking-tight text-black ">
                  مساري
                </span>{" "}
              </div>{" "}
              <p className="text-slate-900 text-sm leading-relaxed font-medium">
                نساعدك على رسم مستقبلك بخطوات واثقة ومدروسة عبر أحدث المقاييس
                العلمية.
              </p>{" "}
            </div>{" "}
            <div>
              {" "}
              <h4 className="font-bold text-black mb-6">روابط سريعة</h4>{" "}
              <ul className="space-y-4 text-sm text-slate-800 font-medium">
                {" "}
                <li>
                  <Link href="/" className="hover:text-primary-600">
                    الرئيسية
                  </Link>
                </li>{" "}
                <li>
                  <Link href="#" className="hover:text-primary-600">
                    عن المنصة
                  </Link>
                </li>{" "}
                <li>
                  <Link href="/assessments" className="hover:text-primary-600">
                    المقاييس
                  </Link>
                </li>{" "}
                <li>
                  <Link href="#" className="hover:text-primary-600">
                    تواصل معنا
                  </Link>
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            <div>
              {" "}
              <h4 className="font-bold text-black mb-6">الدعم</h4>{" "}
              <ul className="space-y-4 text-sm text-slate-800 font-medium">
                {" "}
                <li>
                  <Link href="#" className="hover:text-primary-600">
                    الأسئلة الشائعة
                  </Link>
                </li>{" "}
                <li>
                  <Link href="#" className="hover:text-primary-600">
                    سياسة الخصوصية
                  </Link>
                </li>{" "}
                <li>
                  <Link href="#" className="hover:text-primary-600">
                    شروط الخدمة
                  </Link>
                </li>{" "}
                <li>
                  <Link href="#" className="hover:text-primary-600">
                    مركز المساعدة
                  </Link>
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            <div className="text-right">
              {" "}
              <h4 className="font-bold text-black mb-6">تواصل معنا</h4>{" "}
              <ul className="space-y-4 text-sm text-slate-800 font-medium">
                {" "}
                <li className="flex items-center justify-end gap-2">
                  support@masari.com <Mail size={16} />
                </li>{" "}
                <li className="flex items-center justify-end gap-2">
                  +966 500 000 000 <Users size={16} />
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
          <div className="pt-8 border-t border-indigo-100/10 text-center">
            {" "}
            <div className="text-slate-500 text-xs font-bold">
              {" "}
              © {new Date().getFullYear()} مساري - جميع الحقوق محفوظة لشركة
              مساري الذكية.{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </footer>{" "}
    </div>
  );
}
