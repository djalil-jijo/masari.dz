import { faker } from '@faker-js/faker/locale/ar';
import { calculateCompatibility, majors } from '../data';

// Function to generate a random student with assessment results
export const generateMockStudentsAnalytics = (count: number = 100) => {
  const students = [];
  const hollandTypes = ['R', 'I', 'A', 'S', 'E', 'C'];
  const abilities = ['L', 'M', 'S', 'Mem'];

  for (let i = 0; i < count; i++) {
    // Generate 3 random distinct holland types
    const shuffledHolland = [...hollandTypes].sort(() => 0.5 - Math.random());
    const studentHolland = shuffledHolland.slice(0, 3);

    // Generate 2 or 3 random distinct abilities
    const numAbilities = Math.floor(Math.random() * 2) + 2; // 2 or 3
    const shuffledAbilities = [...abilities].sort(() => 0.5 - Math.random());
    const studentAbilities = shuffledAbilities.slice(0, numAbilities);

    // Generate personality traits
    const personality = {
      extroversion: faker.number.int({ min: 10, max: 95 }),
      control: faker.number.int({ min: 10, max: 95 }),
      openness: faker.number.int({ min: 10, max: 95 }),
    };

    // Calculate best major
    let bestMajor = majors[0];
    let highestScore = -1;

    majors.forEach(major => {
      const score = calculateCompatibility(studentHolland, studentAbilities, major, personality);
      if (score > highestScore) {
        highestScore = score;
        bestMajor = major;
      }
    });

    students.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      holland: studentHolland,
      abilities: studentAbilities,
      personality,
      bestMajorId: bestMajor.id,
      compatibilityScore: highestScore
    });
  }
  return students;
};

export const mockStudentsAnalytics = generateMockStudentsAnalytics(100);
