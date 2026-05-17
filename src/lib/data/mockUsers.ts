import { fakerAR as faker } from '@faker-js/faker';

export type Role = 'ADMIN' | 'COUNSELOR' | 'STUDENT';
export type Status = 'ACTIVE' | 'SUSPENDED';

export interface UserData {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: Status;
  joinDate: string;
  school?: string;
}

export const generateMockUsers = (count: number = 100): UserData[] => {
  const users: UserData[] = [
    // Ensure we have some fixed users for testing
    { id: '1', name: 'أحمد بوعلام', email: 'ahmed@student.com', role: 'STUDENT', status: 'ACTIVE', joinDate: '2023-09-01', school: 'ثانوية الرياضيات الوطنية بالقبة' },
    { id: '2', name: 'أمين مدني', email: 'jaber@student.com', role: 'STUDENT', status: 'ACTIVE', joinDate: '2023-09-15', school: 'ثانوية الرياضيات الوطنية بالقبة' },
    { id: '3', name: 'المستشار التربوي', email: 'counselor@masari.com', role: 'COUNSELOR', status: 'ACTIVE', joinDate: '2023-08-10' },
    { id: '4', name: 'سارة خالد', email: 'sara@counselor.com', role: 'COUNSELOR', status: 'SUSPENDED', joinDate: '2023-08-12' },
    { id: '5', name: 'مدير النظام', email: 'admin@masari.com', role: 'ADMIN', status: 'ACTIVE', joinDate: '2023-01-01' },
  ];

  for (let i = 0; i < count; i++) {
    const role = faker.helpers.arrayElement(['STUDENT', 'STUDENT', 'STUDENT', 'COUNSELOR', 'ADMIN'] as Role[]);
    users.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      role: role,
      status: faker.helpers.arrayElement(['ACTIVE', 'ACTIVE', 'ACTIVE', 'SUSPENDED'] as Status[]),
      joinDate: faker.date.past({ years: 2 }).toISOString().split('T')[0],
      school: role === 'STUDENT' ? `ثانوية ${faker.location.city()}` : undefined,
    });
  }

  return users;
};

export const mockUsers = generateMockUsers(100);
