FROM node:16-alpine
WORKDIR /api
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
CMD ["/bin/sh", "tools/entrypoint.sh"]