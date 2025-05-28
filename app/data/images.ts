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
  // Example format - replace with your actual images
  {
    id: 'first-meeting',
    src: '/images/events/first-meeting.jpg', // You'll add your images here
    alt: 'Our First Meeting',
    caption: 'Where it all began'
  },
  // Add more events here
];

export const profileImages: ProfileImage[] = [
  // Example format - replace with your actual images
  {
    id: 'profile-1',
    src: '/images/profile/profile1.jpg', // You'll add your images here
    alt: 'Partner 1'
  },
  {
    id: 'profile-2',
    src: '/images/profile/profile2.jpg', // You'll add your images here
    alt: 'Partner 2'
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