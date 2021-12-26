FROM node:16-alpine
WORKDIR /api
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install
CMD ["/bin/sh", "tools/entrypoint.sh"]