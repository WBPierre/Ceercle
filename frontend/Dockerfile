FROM node:16-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install -g npm@latest
RUN npm install -g yarn
RUN yarn install --ignore-engines
CMD ["npm", "run", "start"]