/**
 * Psychological Profiler Utility
 * Generates automated textual interpretations based on Holland, Mental Ability, and Personality results.
 */

export interface AssessmentResults {
  holland: string[]; // ["I", "S", "R"]
  abilities: Record<string, number>; // { L: 80, M: 70, ... }
  personality: {
    extroversion: number;
    stability: number;
    control: number;
    openness: number;
  };
}

export function generatePsychologicalProfile(results: AssessmentResults): string {
  const { holland, personality } = results;
  let profile = "";

  // 1. Core Identity based on Holland
  const primaryType = holland[0];
  switch (primaryType) {
    case 'R': profile += "تتميز بشخصية عملية وميول تقنية قوية. تحب التعامل مع الأدوات والآلات وتفضل المهام الملموسة. "; break;
    case 'I': profile += "أنت مفكر تحليلي بطبعك، تميل للبحث والاستقصاء وحل المشكلات المعقدة بأسلوب منطقي. "; break;
    case 'A': profile += "شخصية إبداعية تعبر عن نفسها من خلال الفن والأفكار غير التقليدية. لا تحب القيود والروتين. "; break;
    case 'S': profile += "تتمتع بشخصية اجتماعية وميول قوية للمساعدة والتعليم. تفضل العمل الذي يتضمن تفاعلاً إنسانياً. "; break;
    case 'E': profile += "أنت شخصية مبادرة، تمتلك مهارات قيادية وقدرة عالية على الإقناع والتأثير في الآخرين. "; break;
    case 'C': profile += "تتميز بالدقة والنظام، تميل للعمل المكتبي والبيئات التي تتطلب تنظيماً عالياً واتباعاً للقوانين. "; break;
    default: profile += "لديك نمط اهتمامات متنوع يمنحك مرونة في التعامل مع بيئات عمل مختلفة. "; break;
  }

  // 2. Behavioral Insights based on Personality
  if (personality.extroversion > 70) {
    profile += "سلوكك الخارجي يتسم بالانبساط العالي، مما يجعلك تنجح في الأدوار التي تتطلب علاقات عامة واسعة. ";
  } else if (personality.extroversion < 30) {
    profile += "تفضل العمل في بيئات هادئة تتيح لك التركيز الفردي العميق بعيداً عن صخب المجموعات الكبيرة. ";
  }

  if (personality.control > 70) {
    profile += "انضباطك الذاتي العالي يؤهلك للنجاح في المهام التي تتطلب دقة متناهية وإدارة وقت صارمة. ";
  }

  if (personality.openness > 75) {
    profile += "انفتاحك العقلي الكبير يجعلك دائماً سباقاً لتبني الابتكارات والأفكار الجديدة في مجالك. ";
  }

  // 3. Overall Synthesis
  profile += "\n\nبشكل عام، أنت شخص يجمع بين " + (personality.stability > 60 ? "الاستقرار الانفعالي " : "الحس المرهف ") + "والقدرة على " + (personality.control > 50 ? "التخطيط الفعال." : "التكيف السريع مع المتغيرات.");

  return profile;
}
