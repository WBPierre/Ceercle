FROM node:16-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install -g npm@latest
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
CMD ["/bin/sh", "tools/entrypoint.sh"]