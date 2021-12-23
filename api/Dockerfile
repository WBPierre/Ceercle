FROM node:16-alpine
WORKDIR /api
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install -g npm@latest
RUN npm i
RUN npm install node-gyp -g
RUN npm install bcrypt -g
RUN npm install bcrypt -save
CMD ["npm", "run", "start"]