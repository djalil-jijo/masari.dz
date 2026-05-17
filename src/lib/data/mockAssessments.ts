export type HollandType = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export interface Question {
  id: number;
  text: string;
  type: HollandType;
}

export interface AssessmentData {
  id: string;
  name: string;
  type: string;
  questionsCount: number;
  status: 'ACTIVE' | 'DISABLED';
  lastUpdated: string;
}

export const mockAssessments: AssessmentData[] = [
  { id: '1', name: 'مقياس هولاند للميول المهنية', type: 'ميول مهنية', questionsCount: 30, status: 'ACTIVE', lastUpdated: '2023-10-01' },
  { id: '2', name: 'مقياس القدرات العقلية', type: 'قدرات عقلية', questionsCount: 40, status: 'ACTIVE', lastUpdated: '2023-11-15' },
  { id: '3', name: 'اختبار السمات الشخصية', type: 'سمات شخصية', questionsCount: 60, status: 'DISABLED', lastUpdated: '2023-09-20' },
  { id: '4', name: 'مقياس تحديد مسار الجامعة', type: 'توجيه أكاديمي', questionsCount: 25, status: 'ACTIVE', lastUpdated: '2024-01-05' },
];

export const hollandQuestions: Question[] = [
  // Realistic (R)
  { id: 1, text: "أحب العمل بيداي لإصلاح الأشياء أو بنائها", type: 'R' },
  { id: 2, text: "أفضل العمل في الهواء الطلق بدلاً من المكتب", type: 'R' },
  { id: 3, text: "أستمتع بتشغيل الآلات والمعدات الميكانيكية", type: 'R' },
  { id: 4, text: "أهتم بكيفية عمل الأجهزة الإلكترونية والكهربائية", type: 'R' },
  { id: 5, text: "أفضل الأنشطة التي تتطلب جهداً بدنياً ومهارة عملية", type: 'R' },
  
  // Investigative (I)
  { id: 6, text: "أحب حل المسائل الرياضية أو الألغاز العلمية", type: 'I' },
  { id: 7, text: "أستمتع بإجراء البحوث وجمع المعلومات حول موضوع معين", type: 'I' },
  { id: 8, text: "أميل للتفكير بشكل منطقي وتحليلي عند مواجهة المشكلات", type: 'I' },
  { id: 9, text: "أحب استكشاف النظريات العلمية المعقدة", type: 'I' },
  { id: 10, text: "أفضل الوظائف التي تتطلب التفكير العميق والبحث", type: 'I' },
  
  // Artistic (A)
  { id: 11, text: "أستمتع بالرسم، الكتابة الإبداعية، أو العزف الموسيقي", type: 'A' },
  { id: 12, text: "أفضل العمل في بيئة تسمح لي بالتعبير عن إبداعي", type: 'A' },
  { id: 13, text: "أحب تصميم الأشياء وجعلها تبدو جميلة وجذابة", type: 'A' },
  { id: 14, text: "أميل لاستخدام خيالي لابتكار أفكار جديدة", type: 'A' },
  { id: 15, text: "أفضل المهام غير التقليدية التي لا تتبع قواعد صارمة", type: 'A' },
  
  // Social (S)
  { id: 16, text: "أحب مساعدة الآخرين في حل مشكلاتهم الشخصية", type: 'S' },
  { id: 17, text: "أستمتع بالتعليم، التدريب، أو نقل المعرفة للآخرين", type: 'S' },
  { id: 18, text: "أفضل العمل كجزء من فريق لخدمة المجتمع", type: 'S' },
  { id: 19, text: "أهتم بالعمل التطوعي والأنشطة الإنسانية", type: 'S' },
  { id: 20, text: "أجد متعة في الاستماع للآخرين وفهم مشاعرهم", type: 'S' },
  
  // Enterprising (E)
  { id: 21, text: "أحب إقناع الآخرين بوجهة نظري أو بمنتج ما", type: 'E' },
  { id: 22, text: "أستمتع بتولي مسؤولية قيادة المجموعات والمشاريع", type: 'E' },
  { id: 23, text: "أهتم بعالم الأعمال، التسويق، وإدارة المشاريع", type: 'E' },
  { id: 24, text: "أحب التحدي والمنافسة لتحقيق أهداف طموحة", type: 'E' },
  { id: 25, text: "أفضل الأدوار التي تمكنني من اتخاذ قرارات مؤثرة", type: 'E' },
  
  // Conventional (C)
  { id: 26, text: "أحب تنظيم الملفات، البيانات، والعمل بدقة عالية", type: 'C' },
  { id: 27, text: "أفضل العمل وفق خطة واضحة وإجراءات محددة", type: 'C' },
  { id: 28, text: "أستمتع بالعمل مع الأرقام والميزانيات والسجلات", type: 'C' },
  { id: 29, text: "أهتم بالتفاصيل الدقيقة والتأكد من مطابقة المعايير", type: 'C' },
  { id: 30, text: "أفضل المهام المكتبية المنظمة التي تتطلب التركيز", type: 'C' },
];
