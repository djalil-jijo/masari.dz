import { fakerAR as faker } from '@faker-js/faker';

export type LogType = 'USER' | 'ASSESSMENT' | 'SESSION' | 'SYSTEM';

export interface AuditLog {
  id: string;
  action: string;
  type: LogType;
  user: string;
  role: 'ADMIN' | 'COUNSELOR' | 'STUDENT';
  timestamp: string;
}

const generateMockLogs = (count: number = 200): AuditLog[] => {
  const logs: AuditLog[] = [
    { id: '1', action: 'أكمل مقياس هولاند للميول المهنية', type: 'ASSESSMENT', user: 'أحمد بوعلام', role: 'STUDENT', timestamp: 'منذ 5 دقائق' },
    { id: '2', action: 'أضاف جلسة إرشادية جديدة مع محمد', type: 'SESSION', user: 'المستشار التربوي', role: 'COUNSELOR', timestamp: 'منذ ساعتين' },
    { id: '3', action: 'أنشأ حساب مستشار جديد (سارة خالد)', type: 'USER', user: 'مدير النظام', role: 'ADMIN', timestamp: 'منذ 5 ساعات' },
    { id: '4', action: 'قام بتحديث إعدادات خادم البريد', type: 'SYSTEM', user: 'مدير النظام', role: 'ADMIN', timestamp: 'بالأمس' },
    { id: '5', action: 'سجل الدخول للنظام', type: 'USER', user: 'أمين مدني', role: 'STUDENT', timestamp: 'بالأمس' },
  ];

  const actions = {
    USER: ['سجل الدخول للنظام', 'قام بتحديث الملف الشخصي', 'غير كلمة المرور', 'تم إيقاف حسابه', 'أنشأ حساباً جديداً'],
    ASSESSMENT: ['أكمل مقياس هولاند للميول المهنية', 'بدأ مقياس القدرات العقلية', 'استعرض نتائج اختبار السمات', 'أعاد اختبار تحديد المسار'],
    SESSION: ['حجز جلسة إرشادية', 'ألغى موعد الجلسة', 'أضاف ملاحظات للجلسة', 'حضر الجلسة المجدولة'],
    SYSTEM: ['تم تحديث إعدادات النظام', 'نسخ احتياطي لقاعدة البيانات', 'تغيير صلاحيات مجموعة مستخدمين']
  };

  for (let i = 0; i < count; i++) {
    const type = faker.helpers.arrayElement(['USER', 'ASSESSMENT', 'SESSION', 'SYSTEM'] as LogType[]);
    let role: 'ADMIN' | 'COUNSELOR' | 'STUDENT' = 'STUDENT';
    
    if (type === 'SYSTEM') role = 'ADMIN';
    else if (type === 'SESSION') role = faker.helpers.arrayElement(['STUDENT', 'COUNSELOR']);
    else role = faker.helpers.arrayElement(['STUDENT', 'COUNSELOR', 'ADMIN']);

    logs.push({
      id: faker.string.uuid(),
      action: faker.helpers.arrayElement(actions[type]),
      type: type,
      user: faker.person.fullName(),
      role: role,
      timestamp: faker.date.recent({ days: 30 }).toLocaleString('ar-SA'),
    });
  }

  // Sort by most recent
  return logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
};

export const mockLogs = generateMockLogs(200);
