FROM node:16-alpine
WORKDIR /api
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN apk --no-cache add --virtual builds-deps build-base python
RUN npm config set python /usr/bin/python
RUN npm install -g npm@latest
RUN npm i
RUN npm rebuild bcrypt --build-from-source
RUN apk del builds-deps
CMD ["npm", "run", "start"]