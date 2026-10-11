export const courses = [
  {
    id: 'dog',
    title: 'Professional Dog Training',
    shortDesc: 'Practical skills and guided learning.',
    fullDesc: 'Learn positive training methods, communication, behaviour and practical handling.',
    price: 2500,
    duration: '6 weeks',
    category: 'DOG TRAINING',
    learn: [
      'Foundations and commands',
      'Positive reinforcement',
      'Behaviour and handling'
    ],
    featured: true
  },
  {
    id: 'firstaid',
    title: 'Pet First Aid',
    shortDesc: 'Practical skills and guided learning.',
    fullDesc: 'Essential first-aid skills for common pet emergencies and everyday care.',
    price: 1800,
    duration: '4 weeks',
    category: 'FIRST AID',
    learn: [
      'Emergency response',
      'Wound care basics',
      'When to call a vet'
    ],
    featured: false
  },
  {
    id: 'fundamentals',
    title: 'Pet Care Fundamentals',
    shortDesc: 'Practical skills and guided learning.',
    fullDesc: 'Core knowledge of nutrition, grooming, housing and daily care routines.',
    price: 2000,
    duration: '5 weeks',
    category: 'CARE',
    learn: [
      'Nutrition & feeding',
      'Grooming & hygiene',
      'Safe environments'
    ],
    featured: false
  },
  {
    id: 'sitting',
    title: 'Pet Sitting Skills',
    shortDesc: 'Practical skills and guided learning.',
    fullDesc: 'Professional pet-sitting techniques, client communication and safety protocols.',
    price: 1500,
    duration: '3 weeks',
    category: 'SITTING',
    learn: [
      'Client handovers',
      'Daily routines',
      'Emergency protocols'
    ],
    featured: false
  }
]

export function formatRand(n) {
  return 'R' + n.toLocaleString('en-ZA').replace(/,/g, ' ')
}

export function getDiscountPercent(count) {
  if (count >= 3) return 10
  if (count >= 2) return 5
  return 0
}
