import Timeline, { TimelineEvent } from '../components/Timeline';
import styles from './page.module.css';

const sampleEvents: TimelineEvent[] = [
  {
    id: 1,
    date: 'First Date',
    title: 'Where It All Began',
    description: 'Our first coffee date at that cute café downtown.',
    imageUrl: 'https://placekitten.com/800/600?image=1',
  },
  {
    id: 2,
    date: 'First Trip Together',
    title: 'Adventure Begins',
    description: 'That spontaneous weekend getaway to the beach.',
    imageUrl: 'https://placekitten.com/800/600?image=2',
  },
  {
    id: 3,
    date: 'Moving In',
    title: 'Our First Home',
    description: 'When we decided to share our lives under one roof.',
    imageUrl: 'https://placekitten.com/800/600?image=3',
  },
  // Add more events as needed
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Our Story</h1>
        <p>A journey of love, laughter, and countless memories</p>
      </div>
      <Timeline events={sampleEvents} />
    </main>
  );
} 