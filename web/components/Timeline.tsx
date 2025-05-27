import { useState } from 'react';
import Image from 'next/image';
import styles from './Timeline.module.css';

export interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  const [activeEvent, setActiveEvent] = useState<number>(0);

  const handleNext = () => {
    setActiveEvent((prev) => (prev < events.length - 1 ? prev + 1 : prev));
  };

  const handlePrevious = () => {
    setActiveEvent((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timeline}>
        <button 
          onClick={handlePrevious} 
          className={styles.navButton}
          disabled={activeEvent === 0}
        >
          ←
        </button>
        
        <div className={styles.eventContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src={events[activeEvent].imageUrl}
              alt={events[activeEvent].title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          
          <div className={styles.eventContent}>
            <span className={styles.date}>{events[activeEvent].date}</span>
            <h2 className={styles.title}>{events[activeEvent].title}</h2>
            <p className={styles.description}>{events[activeEvent].description}</p>
          </div>
        </div>

        <button 
          onClick={handleNext} 
          className={styles.navButton}
          disabled={activeEvent === events.length - 1}
        >
          →
        </button>
      </div>
      
      <div className={styles.progress}>
        {events.map((_, index) => (
          <div
            key={index}
            className={`${styles.progressDot} ${
              index === activeEvent ? styles.active : ''
            }`}
            onClick={() => setActiveEvent(index)}
          />
        ))}
      </div>
    </div>
  );
} 