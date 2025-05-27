'use client';

import { useState, useEffect, useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaHeart, FaHome, FaPlane, FaRing, FaBaby, FaMapMarkerAlt } from 'react-icons/fa';
import PolaroidGallery from '@/components/PolaroidGallery';
import styles from './page.module.css';
import Image from 'next/image';

const timelineEvents = [
  {
    date: 'The Beginning',
    title: 'When Our Story Began',
    description: 'Two paths crossed and our journey together started.',
    icon: <FaHeart />,
    iconBackground: '#e74c3c',
    photos: [
      { url: 'https://picsum.photos/400/400?random=1', caption: 'First Photo Together' },
      { url: 'https://picsum.photos/400/400?random=2', caption: 'Early Days' },
      { url: 'https://picsum.photos/400/400?random=3', caption: 'Getting to Know Each Other' },
      { url: 'https://picsum.photos/400/400?random=4', caption: 'Making Memories' },
    ],
  },
  {
    date: 'First Few Years',
    title: 'Building Our Foundation',
    description: 'Growing together through adventures, laughter, and love.',
    icon: <FaHeart />,
    iconBackground: '#e67e22',
    photos: [
      { url: 'https://picsum.photos/400/400?random=5', caption: 'Adventures Together' },
      { url: 'https://picsum.photos/400/400?random=6', caption: 'Special Moments' },
      { url: 'https://picsum.photos/400/400?random=7', caption: 'Date Nights' },
      { url: 'https://picsum.photos/400/400?random=8', caption: 'Weekend Getaways' },
    ],
  },
  {
    date: 'Moving In',
    title: 'Our First Home',
    description: 'Taking the next step and creating our shared space.',
    icon: <FaHome />,
    iconBackground: '#2ecc71',
    photos: [
      { url: 'https://picsum.photos/400/400?random=9', caption: 'Moving Day' },
      { url: 'https://picsum.photos/400/400?random=10', caption: 'Home Sweet Home' },
      { url: 'https://picsum.photos/400/400?random=11', caption: 'Making It Ours' },
      { url: 'https://picsum.photos/400/400?random=12', caption: 'First Dinner at Home' },
    ],
  },
  {
    date: 'Vancouver Bound',
    title: 'New City, New Adventures',
    description: 'Starting our journey in beautiful Vancouver.',
    icon: <FaPlane />,
    iconBackground: '#3498db',
    photos: [
      { url: 'https://picsum.photos/400/400?random=13', caption: 'Landing in Vancouver' },
      { url: 'https://picsum.photos/400/400?random=14', caption: 'City Exploration' },
      { url: 'https://picsum.photos/400/400?random=15', caption: 'Mountain Views' },
      { url: 'https://picsum.photos/400/400?random=16', caption: 'Coastal Living' },
    ],
  },
  {
    date: 'Wedding Bells',
    title: 'Tying the Knot',
    description: 'Celebrating our love and commitment.',
    icon: <FaRing />,
    iconBackground: '#9b59b6',
    photos: [
      { url: 'https://picsum.photos/400/400?random=17', caption: 'The Big Day' },
      { url: 'https://picsum.photos/400/400?random=18', caption: 'First Kiss' },
      { url: 'https://picsum.photos/400/400?random=19', caption: 'First Dance' },
      { url: 'https://picsum.photos/400/400?random=20', caption: 'Celebration' },
    ],
  },
  {
    date: 'Welcome Arlo',
    title: 'Our Family Grows',
    description: 'The joy of becoming parents to our beautiful Arlo.',
    icon: <FaBaby />,
    iconBackground: '#f1c40f',
    photos: [
      { url: 'https://picsum.photos/400/400?random=21', caption: 'Baby Arlo' },
      { url: 'https://picsum.photos/400/400?random=22', caption: 'First Smile' },
      { url: 'https://picsum.photos/400/400?random=23', caption: 'Family of Three' },
      { url: 'https://picsum.photos/400/400?random=24', caption: 'Growing Every Day' },
    ],
  },
  {
    date: 'North Vancouver',
    title: 'A New Chapter',
    description: 'Moving to North Van for our next adventure.',
    icon: <FaMapMarkerAlt />,
    iconBackground: '#27ae60',
    photos: [
      { url: 'https://picsum.photos/400/400?random=25', caption: 'North Shore Mountains' },
      { url: 'https://picsum.photos/400/400?random=26', caption: 'New Home' },
      { url: 'https://picsum.photos/400/400?random=27', caption: 'Family Walks' },
      { url: 'https://picsum.photos/400/400?random=28', caption: 'Community Life' },
    ],
  },
  {
    date: 'Double the Joy',
    title: 'Twins Join the Family',
    description: 'Our hearts grew twice as big with two new additions.',
    icon: <FaBaby />,
    iconBackground: '#e84393',
    photos: [
      { url: 'https://picsum.photos/400/400?random=29', caption: 'Twin Love' },
      { url: 'https://picsum.photos/400/400?random=30', caption: 'Double Trouble' },
      { url: 'https://picsum.photos/400/400?random=31', caption: 'Family of Five' },
      { url: 'https://picsum.photos/400/400?random=32', caption: 'Sibling Bond' },
    ],
  },
  {
    date: 'Moving Home',
    title: 'Back to Our Roots',
    description: 'Returning home with our beautiful family.',
    icon: <FaHome />,
    iconBackground: '#00cec9',
    photos: [
      { url: 'https://picsum.photos/400/400?random=33', caption: 'Homecoming' },
      { url: 'https://picsum.photos/400/400?random=34', caption: 'Family Together' },
      { url: 'https://picsum.photos/400/400?random=35', caption: 'New Beginnings' },
      { url: 'https://picsum.photos/400/400?random=36', caption: 'Home Sweet Home' },
    ],
  },
  {
    date: 'Harpenden',
    title: 'Our Latest Chapter',
    description: 'Starting fresh in Harpenden with our growing family.',
    icon: <FaMapMarkerAlt />,
    iconBackground: '#fd79a8',
    photos: [
      { url: 'https://picsum.photos/400/400?random=37', caption: 'Harpenden Life' },
      { url: 'https://picsum.photos/400/400?random=38', caption: 'Family Adventures' },
      { url: 'https://picsum.photos/400/400?random=39', caption: 'Community Spirit' },
      { url: 'https://picsum.photos/400/400?random=40', caption: 'Making Memories' },
    ],
  },
];

const backgroundColors = [
  '#f8f9fa', // Intro - Light gray
  '#e8f3ff', // Beginning - Soft blue
  '#fff5f5', // First Few Years - Soft pink
  '#f0f9ff', // Moving In - Light blue
  '#f6f5ff', // Vancouver - Soft purple
  '#fff8f0', // Wedding - Warm orange
  '#f0fff4', // Arlo - Soft green
  '#fff0f7', // North Van - Pink
  '#f3f0ff', // Twins - Lavender
  '#f0f9ff', // Moving Home - Light blue
  '#fff5f0', // Harpenden - Warm peach
];

export default function Page() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSection = (index: number) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0.1
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.main}>
      <nav className={styles.navigation}>
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`${styles.navItem} ${index === activeSection ? styles.active : ''}`}
            onClick={() => scrollToSection(index)}
          >
            <span className={styles.navTooltip}>{event.date}</span>
          </div>
        ))}
      </nav>

      <div className={styles.backgroundContainer}>
        {timelineEvents.map((_, index) => (
          <div
            key={index}
            className={`${styles.backgroundSection} ${index === activeSection ? styles.active : ''}`}
          />
        ))}
      </div>

      <div 
        className={`${styles.intro} ${styles.timelineElement}`}
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
      >
        <h1>Ruth & John</h1>
        <h2>Together since 2014</h2>
        <div className={styles.couplePhotos}>
          <div className={styles.photo}>
            <Image
              src="https://picsum.photos/400/400?random=couple1"
              alt="Partner 1"
              width={200}
              height={200}
            />
          </div>
          <div className={styles.photo}>
            <Image
              src="https://picsum.photos/400/400?random=couple2"
              alt="Partner 2"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      
      <div className={styles.timelineWrapper}>
        <VerticalTimeline>
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className={styles.timelineElement}
              ref={(el) => {
                sectionRefs.current[index + 1] = el;
              }}
            >
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={event.date}
                iconStyle={{ background: event.iconBackground, color: '#fff' }}
                icon={event.icon}
                contentStyle={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#333',
                  boxShadow: '0 3px 0 #ddd',
                  borderRadius: '15px',
                  cursor: 'pointer',
                }}
                contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.9)' }}
                onTimelineElementClick={() => setSelectedEvent(index)}
              >
                <h3 className="vertical-timeline-element-title">{event.title}</h3>
                <p>{event.description}</p>
              </VerticalTimelineElement>
            </div>
          ))}
        </VerticalTimeline>
      </div>

      {selectedEvent !== null && (
        <PolaroidGallery
          photos={timelineEvents[selectedEvent].photos}
          isOpen={true}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </main>
  );
} 