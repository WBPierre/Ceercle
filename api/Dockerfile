FROM node:16-alpine
WORKDIR /api
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN apt-get update \
    apt-get install -y build-essential \
    apt-get install -y python
RUN npm install -g npm@latest
RUN npm install -g node-gyp && \
    node-gyp clean \
    npm install bcrypt -g
RUN npm i
CMD ["npm", "run", "start"]