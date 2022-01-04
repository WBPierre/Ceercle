FROM node:16-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install -g npm@latest
CMD ["/bin/sh", "tools/entrypoint.sh"]