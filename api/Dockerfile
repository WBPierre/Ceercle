FROM node:16
WORKDIR /api
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install -g npm@latest
RUN apk add –no-cache make gcc g++ python && \
npm install && \
npm rebuild bcrypt –build-from-source && \
apk del make gcc g++ python
CMD ["npm", "run", "start"]