'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './PolaroidGallery.module.css';

interface Photo {
  url: string;
  caption: string;
}

interface PolaroidGalleryProps {
  photos: Photo[];
  isOpen: boolean;
  onClose: () => void;
}

export default function PolaroidGallery({ photos, isOpen, onClose }: PolaroidGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.gallery} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.polaroidGrid}>
          {photos.map((photo, index) => (
            <div 
              key={index}
              className={`${styles.polaroid} ${index === selectedIndex ? styles.selected : ''}`}
              onClick={() => setSelectedIndex(index)}
              style={{
                transform: `rotate(${Math.random() * 20 - 10}deg)`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={photo.url}
                  alt={photo.caption}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.caption}>{photo.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 