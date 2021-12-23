FROM node:16-alpine
WORKDIR /api
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install -g npm@latest
RUN apk --no-cache add --virtual builds-deps build-base python
RUN npm install
RUN npm rebuild bcrypt --build-from-source
CMD ["npm", "run", "start"]