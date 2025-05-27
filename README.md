# Romantic Timeline

A beautiful, interactive timeline website built with Next.js to showcase important moments in a couple's journey together. The timeline features smooth animations, responsive design, and a modern UI with a focus on storytelling.

## Features

- Vertical timeline with animated transitions
- Navigation dots for quick section jumping
- Responsive design that works on all devices
- Beautiful background transitions between sections
- Modern, clean UI with blur effects and smooth animations
- Docker support for easy deployment

## Tech Stack

- Next.js 13+ with App Router
- TypeScript
- CSS Modules
- React Vertical Timeline Component
- Docker

## Getting Started

### Running with Docker

1. Clone the repository:
```bash
git clone https://github.com/bailie70/event-timeline.git
cd event-timeline
```

2. Start the Docker container:
```bash
docker-compose up
```

3. Open [http://localhost:3001](http://localhost:3001) in your browser

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/bailie70/event-timeline.git
cd event-timeline
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

The timeline content can be easily customized by modifying the data in `app/page.tsx`. Each timeline entry consists of:
- Title
- Date
- Description
- Icon
- Background color

## License

MIT License - feel free to use this project for your own timeline! 