interface EventImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

interface ProfileImage {
  id: string;
  src: string;
  alt: string;
}

export const eventImages: EventImage[] = [
  {
    id: 'first-trip-ni-2',
    src: '/images/events/section1_first_trip_NI_2.JPG',
    alt: 'Northern Ireland Trip 2',
    caption: 'Adventures in Northern Ireland'
  },
  {
    id: 'first-trip-ni-1',
    src: '/images/events/section1_first_trip_NI_1.JPG',
    alt: 'Northern Ireland Trip 1',
    caption: 'More memories from Northern Ireland'
  },
  {
    id: 'first-trip-ni',
    src: '/images/events/section1_first_trip_NI.JPG',
    alt: 'Northern Ireland Trip',
    caption: 'Our journey through Northern Ireland'
  },
  {
    id: 'section1-main',
    src: '/images/events/section1.JPG',
    alt: 'The Beginning',
    caption: 'Where our story began'
  },
  {
    id: 'first-trip',
    src: '/images/events/section1_first_trip.JPG',
    alt: 'Our First Trip',
    caption: 'Our first adventure together'
  },
  {
    id: 'first-mountain',
    src: '/images/events/section1_first_mountain.JPG',
    alt: 'First Mountain Together',
    caption: 'Conquering heights together'
  }
];

export const profileImages: ProfileImage[] = [
  {
    id: 'couple-profile',
    src: '/images/profile/John_Ruth.JPG',
    alt: 'John and Ruth'
  }
];

// Helper function to get event image by ID
export function getEventImageById(id: string): EventImage | undefined {
  return eventImages.find(img => img.id === id);
}

// Helper function to get profile image by ID
export function getProfileImageById(id: string): ProfileImage | undefined {
  return profileImages.find(img => img.id === id);
} 