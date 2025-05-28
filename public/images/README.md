# Image Organization

This directory contains all the images used in the romantic timeline project.

## Directory Structure

- `/events/` - Contains images for each timeline event
  - Naming convention: `event-name.jpg` (e.g., `first-meeting.jpg`, `first-date.jpg`)
  - Recommended size: 800x600px or 4:3 aspect ratio
  - Format: JPG or PNG

- `/profile/` - Contains profile/couple photos
  - Naming convention: `profile-name.jpg` (e.g., `profile1.jpg`, `couple-photo.jpg`)
  - Recommended size: 400x400px for profile photos
  - Format: JPG or PNG

- `/backgrounds/` - Contains background images
  - Naming convention: `background-name.jpg` (e.g., `hero-bg.jpg`)
  - Recommended size: 1920x1080px or higher for backgrounds
  - Format: JPG or PNG

## Image Guidelines

1. Use descriptive filenames in lowercase with hyphens
2. Optimize images before adding them to reduce file size
3. Keep aspect ratios consistent within each category
4. Use JPG for photos and PNG for images with transparency

## Adding New Images

1. Place your image in the appropriate directory
2. Update the image metadata in `app/data/images.ts`
3. Use the Next.js Image component for optimal performance 