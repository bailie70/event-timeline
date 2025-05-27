FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Create the app directory structure first
RUN mkdir -p app components public/images

# Copy the source files
COPY components ./components/
COPY app ./app/
COPY public ./public/
COPY next.config.js ./
COPY tsconfig.json ./

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 