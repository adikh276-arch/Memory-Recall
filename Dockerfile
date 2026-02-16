# Stage 1: Build the Vite app
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the application and build
COPY . .
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Use custom nginx config
COPY vite-nginx.conf /etc/nginx/nginx.conf

# Copy build output to the subpath directory
RUN mkdir -p /usr/share/nginx/html/memory-recall
COPY --from=build /app/dist /usr/share/nginx/html/memory-recall

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
