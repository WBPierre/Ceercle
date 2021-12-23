FROM node:16-alpine
WORKDIR /api
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install -g npm@latest
npm i
CMD ["npm", "run", "start"]