import { Role, UserData } from './data/mockUsers';

export const REGISTERED_ACCOUNTS: Record<string, { password: string; user: UserData; redirectPath: string }> = {
  'student@masari.com': {
    password: 'student123',
    redirectPath: '/dashboard',
    user: {
      id: 'usr_student_01',
      name: 'مرحبا بك',
      email: 'student@masari.com',
      role: 'STUDENT',
      title: 'طالبة',
      status: 'ACTIVE',
      joinDate: '2024-09-01',
      school: 'ثانوية الرياضيات بالقبة',
      avatar: '👧',
    },
  },
  'specialist@masari.com': {
    password: 'specialist123',
    redirectPath: '/specialist/dashboard',
    user: {
      id: 'usr_specialist_01',
      name: 'د. خولة بلعيد',
      email: 'specialist@masari.com',
      role: 'SPECIALIST',
      title: 'أخصائية نفسية خاصة',
      status: 'ACTIVE',
      joinDate: '2023-01-15',
      avatar: '🧕',
    },
  },
  'counselor@masari.com': {
    password: 'counselor123',
    redirectPath: '/counselor/dashboard',
    user: {
      id: 'usr_counselor_01',
      name: 'د. خولة بلعيد',
      email: 'counselor@masari.com',
      role: 'COUNSELOR',
      title: 'أخصائية نفسية صحة مدرسية',
      status: 'ACTIVE',
      joinDate: '2022-09-01',
      avatar: '🧕',
    },
  },
  'admin@masari.com': {
    password: 'admin123',
    redirectPath: '/admin',
    user: {
      id: 'usr_admin_01',
      name: 'مدير النظام',
      email: 'admin@masari.com',
      role: 'ADMIN',
      title: 'الإدارة العامة للمنصة',
      status: 'ACTIVE',
      joinDate: '2022-01-01',
      avatar: '👨‍💼',
    },
  },
};

export function getCurrentUser(): UserData | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem('masari_session_user');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }
  return null;
}

export function setCurrentSession(user: UserData) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('masari_session_user', JSON.stringify(user));
  localStorage.setItem('userRole', user.role);
}

export function clearSession() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('masari_session_user');
  localStorage.removeItem('userRole');
}
