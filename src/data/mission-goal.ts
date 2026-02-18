import { resolveImage } from '../utils/resolveImage';

export const missionGoal = {
  mission: {
    subtitle: 'Our Mission',
    title: 'Offer Reliable Services for Most Construction Systems',
    description:
      'We have a long and proud history giving emphasis to environment, social, and economic outcomes to deliver places that respond.',
    bullets: [
      'Auctor elit sed vulputate mi euismod elcom',
      'Tellus orci ac mctor augue mauris augue',
      'Feugiat scelerisque varius morbi enim noncolor'
    ],
    image: {
      src: resolveImage('/images/mission-img.png'),
      alt: 'Mission image'
    }
  },
  goal: {
    subtitle: 'Our Goal',
    title: "Provide Exceptional Construction Services That Exceed Our Customer's Expectations",
    description:
      'We have a long and proud history giving emphasis to environment, social, and economic outcomes to deliver places that respond.',
    image: {
      src: resolveImage('/images/goal.png'),
      alt: 'Goal image'
    }
  }
};

