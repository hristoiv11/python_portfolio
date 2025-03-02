# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock first (for caching dependencies)
COPY package.json yarn.lock ./
RUN yarn install

# Copy the entire frontend folder
COPY . .

# Expose React development server port
EXPOSE 3000

# Start React app in development mode
CMD ["yarn", "start"]
