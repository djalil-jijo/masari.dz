export interface Major {
  id: string;
  name: string;
  hollandTypes: string[]; // e.g. ["I", "M"]
  requiredAbilities: string[]; // ["M", "S"]
  description: string;
  careers: string[];
  personalityTraits?: {
    extroversion?: number; // 0-100 (high = extrovert, low = introvert)
    control?: number;
    openness?: number;
  };
}

export const majors: Major[] = [
  {
    id: "cs",
    name: "علوم الحاسوب (Computer Science)",
    hollandTypes: ["I", "C", "R"],
    requiredAbilities: ["M", "L"],
    description: "دراسة أنظمة الحاسوب، البرمجيات، والذكاء الاصطناعي.",
    careers: ["مطور برمجيات", "محلل بيانات", "مهندس ذكاء اصطناعي"],
    personalityTraits: { extroversion: 30, control: 80, openness: 90 }
  },
  {
    id: "medicine",
    name: "الطب البشري (Medicine)",
    hollandTypes: ["I", "S", "R"],
    requiredAbilities: ["L", "Mem", "M"],
    description: "تشخيص وعلاج الأمراض وتحسين الصحة العامة.",
    careers: ["طبيب عام", "جراح", "باحث طبي"],
    personalityTraits: { extroversion: 60, control: 95, openness: 70 }
  },
  {
    id: "architecture",
    name: "الهندسة المعمارية (Architecture)",
    hollandTypes: ["A", "R", "I"],
    requiredAbilities: ["S", "M"],
    description: "تصميم المباني والمنشآت بلمسة فنية وهندسية.",
    careers: ["مهندس معماري", "مصمم داخلي", "مخطط مدن"],
    personalityTraits: { extroversion: 50, control: 75, openness: 95 }
  },
  {
    id: "business",
    name: "إدارة الأعمال (Business Administration)",
    hollandTypes: ["E", "C", "S"],
    requiredAbilities: ["L", "M"],
    description: "إدارة المؤسسات، التخطيط الاستراتيجي، والتمويل.",
    careers: ["مدير مشاريع", "محلل مالي", "رائد أعمال"],
    personalityTraits: { extroversion: 90, control: 85, openness: 80 }
  },
  {
    id: "law",
    name: "الحقوق (Law)",
    hollandTypes: ["E", "I", "S"],
    requiredAbilities: ["L", "Mem"],
    description: "دراسة الأنظمة القانونية والدفاع عن الحقوق.",
    careers: ["محامي", "قاضي", "مستشار قانوني"],
    personalityTraits: { extroversion: 80, control: 90, openness: 60 }
  },
  {
    id: "psychology",
    name: "علم النفس (Psychology)",
    hollandTypes: ["S", "I", "A"],
    requiredAbilities: ["L", "S"],
    description: "دراسة السلوك الإنساني والعمليات العقلية.",
    careers: ["أخصائي نفسي", "مرشد اجتماعي", "باحث سلوكي"],
    personalityTraits: { extroversion: 70, control: 60, openness: 85 }
  }
];

export function calculateCompatibility(
  userHolland: string[], 
  userAbilities: string[], 
  major: Major,
  userPersonality?: { extroversion: number, control: number, openness: number }
): number {
  let score = 0;
  let totalWeight = 100;
  
  // 1. Holland Match (50%)
  const hollandMatch = major.hollandTypes.filter(t => userHolland.includes(t)).length;
  score += (hollandMatch / major.hollandTypes.length) * 50;
  
  // 2. Ability Match (30%)
  const abilityMatch = major.requiredAbilities.filter(a => userAbilities.includes(a)).length;
  score += (abilityMatch / major.requiredAbilities.length) * 30;

  // 3. Personality Match (20%)
  if (userPersonality && major.personalityTraits) {
    let pScore = 0;
    let pCount = 0;
    
    if (major.personalityTraits.extroversion !== undefined) {
      pScore += 100 - Math.abs(major.personalityTraits.extroversion - userPersonality.extroversion);
      pCount++;
    }
    if (major.personalityTraits.control !== undefined) {
      pScore += 100 - Math.abs(major.personalityTraits.control - userPersonality.control);
      pCount++;
    }
    if (major.personalityTraits.openness !== undefined) {
      pScore += 100 - Math.abs(major.personalityTraits.openness - userPersonality.openness);
      pCount++;
    }
    
    if (pCount > 0) {
      score += (pScore / pCount) * 0.2;
    } else {
      // If no traits specified, distribute the 20% to others
      score = (score / 80) * 100;
    }
  } else {
    // Distribute the 20% back to others if personality not provided
    score = (score / 80) * 100;
  }
  
  return Math.min(Math.round(score), 100);
}
