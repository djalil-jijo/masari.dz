export interface Major {
  id: string;
  name: string;
  description: string;
  category: string;
  demand: 'HIGH' | 'MEDIUM' | 'LOW';
  matchScore: number;
}

export interface University {
  id: string;
  name: string;
  location: string;
  ranking: number;
  programs: string[];
}

export const mockMajors: Major[] = [
  { id: '1', name: 'هندسة البرمجيات', description: 'تصميم وتطوير البرامج والأنظمة', category: 'تكنولوجيا المعلومات', demand: 'HIGH', matchScore: 95 },
  { id: '2', name: 'الذكاء الاصطناعي', description: 'تطوير أنظمة ذكية تحاكي القدرات البشرية', category: 'تكنولوجيا المعلومات', demand: 'HIGH', matchScore: 88 },
  { id: '3', name: 'علم النفس العيادي', description: 'تشخيص وعلاج الاضطرابات النفسية', category: 'العلوم الإنسانية', demand: 'HIGH', matchScore: 92 },
  { id: '4', name: 'التسويق الرقمي', description: 'تسويق المنتجات والخدمات عبر الإنترنت', category: 'الأعمال والإدارة', demand: 'MEDIUM', matchScore: 75 },
  { id: '5', name: 'الهندسة المعمارية', description: 'تصميم وتخطيط المباني والمنشآت', category: 'الهندسة', demand: 'MEDIUM', matchScore: 60 },
];

export const mockUniversities: University[] = [
  { id: '1', name: 'جامعة هواري بومدين للعلوم والتكنولوجيا', location: 'الجزائر العاصمة', ranking: 1, programs: ['هندسة البرمجيات', 'الهندسة المعمارية', 'الذكاء الاصطناعي'] },
  { id: '2', name: 'المدرسة الوطنية العليا للإعلام الآلي', location: 'الجزائر العاصمة', ranking: 2, programs: ['هندسة البرمجيات', 'الهندسة المعمارية'] },
  { id: '3', name: 'جامعة وهران 1', location: 'وهران', ranking: 3, programs: ['علم النفس العيادي', 'التسويق الرقمي'] },
  { id: '4', name: 'جامعة قسنطينة 2', location: 'قسنطينة', ranking: 5, programs: ['هندسة البرمجيات', 'التسويق الرقمي'] },
];
