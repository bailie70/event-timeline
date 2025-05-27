# Romantic Timeline

A beautiful, interactive timeline to showcase your journey together. This modern web application allows you to create an engaging visual story with images and descriptions of your special moments.

## Getting Started

1. First, install the dependencies:
```bash
npm install
# or
yarn install
```

2. Create an `images` directory in the `public` folder:
```bash
mkdir -p public/images
```

3. Add your images to the `public/images` directory. Name them appropriately (e.g., `first-date.jpg`, `first-trip.jpg`, etc.).

4. Customize your timeline events in `app/page.tsx`. Edit the `sampleEvents` array to add your own moments:
```typescript
const sampleEvents: TimelineEvent[] = [
  {
    id: 1,
    date: 'Your Date',
    title: 'Your Title',
    description: 'Your Description',
    imageUrl: '/images/your-image.jpg',
  },
  // Add more events...
];
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your timeline!

## Customization

### Adding New Events
- Add new images to `public/images/`
- Add new event objects to the `sampleEvents` array in `app/page.tsx`

### Styling
- Modify `Timeline.module.css` to customize the timeline appearance
- Modify `page.module.css` to customize the page layout and header

## Features

- ✨ Modern, responsive design
- 🖼️ Full-screen image display
- 🎯 Interactive navigation
- 💫 Smooth transitions and animations
- 📱 Mobile-friendly layout

## Tips for Great Images

- Use high-quality images (recommended size: 1200x800 pixels)
- Keep file sizes reasonable (compress if needed)
- Use consistent aspect ratios for a uniform look
- Consider using a consistent filter or editing style across all images 