export const programs = [
  {
    id: 'puppy-foundations',
    title: 'Puppy Foundations',
    short: 'A thoughtful plan for growing puppies.',
    description: 'Build confidence, manners and a strong bond from the very first weeks. Ideal for puppies 8–20 weeks.',
    duration: '6 weeks',
    price: 2450,
    category: 'Puppy',
    icon: '🐶',
    learn: [
      'Socialisation & confidence building',
      'Basic manners and house training support',
      'Bite inhibition and play skills',
      'Handling and husbandry',
      'Early recall foundations',
      'Preventing common problem behaviours'
    ],
    idealFor: 'New puppy owners wanting a calm, structured start.'
  },
  {
    id: 'everyday-practice',
    title: 'Everyday Practice',
    short: 'Real-life skills for everyday life with your dog.',
    description: 'Practical training that fits into daily walks, home life and outings. Focus on calm behaviour, recall and polite greetings.',
    duration: '6 weeks',
    price: 2650,
    category: 'Adult',
    icon: '🌿',
    learn: [
      'Loose-lead walking',
      'Reliable recall',
      'Settling at home and in public',
      'Polite greetings',
      'Impulse control',
      'Real-world generalisation'
    ],
    idealFor: 'Owners who want practical skills for daily life.'
  },
  {
    id: 'family-life',
    title: 'Family Life with Dogs',
    short: 'Help the whole household stay on the same page.',
    description: 'Training that works for families with children, multiple pets or busy households. Focus on calm, predictable routines.',
    duration: '5 weeks',
    price: 2350,
    category: 'Family',
    icon: '👨‍👩‍👧',
    learn: [
      'Consistent cues across family members',
      'Managing excitement around children',
      'Safe play and boundaries',
      'Door manners and greeting guests',
      'Routine and enrichment',
      'Reducing conflict between pets'
    ],
    idealFor: 'Families who want everyone speaking the same language.'
  },
  {
    id: 'confidence-first',
    title: 'Confidence First',
    short: 'For dogs who need a gentler path.',
    description: 'A low-pressure programme for shy, sensitive or previously under-socialised dogs. Build trust at the dog’s pace.',
    duration: '8 weeks',
    price: 2850,
    category: 'Support',
    icon: '💚',
    learn: [
      'Reading canine body language',
      'Desensitisation and counter-conditioning',
      'Safe exposure strategies',
      'Building resilience',
      'Handler confidence',
      'Creating a predictable environment'
    ],
    idealFor: 'Sensitive or fearful dogs and their carers.'
  },
  {
    id: 'advanced-skills',
    title: 'Advanced Skills',
    short: 'Take everyday skills to the next level.',
    description: 'For dogs and handlers ready for more refined behaviours, longer duration, and greater independence.',
    duration: '6 weeks',
    price: 2750,
    category: 'Advanced',
    icon: '⭐',
    learn: [
      'Duration and distance work',
      'Distraction proofing',
      'Advanced recall',
      'Heeling and precise positioning',
      'Problem-solving games',
      'Handler technique refinement'
    ],
    idealFor: 'Handlers who have completed Everyday Practice or equivalent.'
  },
  {
    id: 'pet-first-aid',
    title: 'Pet First Aid',
    short: 'Practical skills for everyday welfare.',
    description: 'Learn how to respond calmly and effectively to common pet emergencies and everyday health concerns.',
    duration: '1 day',
    price: 980,
    category: 'Welfare',
    icon: '🩺',
    learn: [
      'Recognising emergencies',
      'Basic wound care',
      'CPR overview for pets',
      'Choking and poisoning response',
      'When to call the vet',
      'First-aid kit essentials'
    ],
    idealFor: 'Any pet owner or carer wanting practical first-aid knowledge.'
  }
]

export function formatRand(n) {
  return 'R' + n.toLocaleString('en-ZA')
}
