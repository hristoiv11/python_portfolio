# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock first (for caching dependencies)
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy everything else into the container
COPY . .

# Expose React development server port
EXPOSE 3000

# Ensure React watches for file changes
CMD ["yarn", "start"]
