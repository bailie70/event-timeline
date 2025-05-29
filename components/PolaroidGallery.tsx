'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './PolaroidGallery.module.css';
import ImageModal from './ImageModal';

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
  const [showModal, setShowModal] = useState(false);

  if (!isOpen) return null;

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < photos.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.gallery} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.polaroidGrid}>
          {photos.map((photo, index) => (
            <div 
              key={index}
              className={`${styles.polaroid} ${index === selectedIndex ? styles.selected : ''}`}
              onClick={() => {
                setSelectedIndex(index);
                setShowModal(true);
              }}
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
                  sizes="(max-width: 768px) 140px, 200px"
                />
              </div>
              <div className={styles.caption}>{photo.caption}</div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <ImageModal
          photo={photos[selectedIndex]}
          onClose={() => setShowModal(false)}
          onNext={handleNext}
          onPrevious={handlePrevious}
          isFirst={selectedIndex === 0}
          isLast={selectedIndex === photos.length - 1}
        />
      )}
    </div>
  );
} 