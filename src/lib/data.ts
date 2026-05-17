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
  fixedCompatibility?: number;
}

export const majors: Major[] = [
  {
    id: "scientific",
    name: "ملمح علمي",
    hollandTypes: ["I", "R"],
    requiredAbilities: ["M", "L"],
    description: "يهتم بالمواد العلمية والبحث والتحليل.",
    careers: ["طبيب", "باحث", "أستاذ علوم", "مهندس"],
    fixedCompatibility: 100
  },
  {
    id: "vocational",
    name: "تكوين مهني",
    hollandTypes: ["R", "E"],
    requiredAbilities: ["S"],
    description: "يعتمد على تعلم مهنة بشكل مباشر.",
    careers: ["الحلاقة", "الطبخ", "الإعلام الآلي", "الخياطة", "الكهرباء", "التبريد", "الميكانيك"],
    fixedCompatibility: 85
  },
  {
    id: "literary",
    name: "ملمح أدبي",
    hollandTypes: ["A", "S"],
    requiredAbilities: ["L", "S"],
    description: "يهتم بالفكر والكتابة و العلوم الإنسانية.",
    careers: ["كاتب", "صحفي", "أستاذ لغة أو تاريخ", "مترجم"],
    fixedCompatibility: 79
  },
  {
    id: "technical",
    name: "ملمح تقني",
    hollandTypes: ["R", "I"],
    requiredAbilities: ["M", "S"],
    description: "يركز على التطبيق العملي واستعمال التكنولوجيا و الأجهزة.",
    careers: ["تقني إعلام آلي", "مبرمج", "تقني صيانة", "مصمم جرافيك"],
    fixedCompatibility: 79
  }
];

export function calculateCompatibility(
  userHolland: string[], 
  userAbilities: string[], 
  major: Major,
  userPersonality?: { extroversion: number, control: number, openness: number }
): number {
  if (major.fixedCompatibility !== undefined) {
    return major.fixedCompatibility;
  }

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
