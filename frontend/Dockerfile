FROM node:16-alpine AS development
ENV NODE_ENV development
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install -g npm@latest
CMD ["/bin/sh", "tools/entrypoint.sh"]


FROM node:16-alpine AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json ./
COPY yarn.lock .
RUN yarn install --ignore-engines --production
# Copy app files
COPY . .
RUN npm install -g npm@latest
# Build the app
RUN yarn build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Expose port
EXPOSE 80 443
# Start nginx
CMD ["nginx", "-g", "daemon off;"]