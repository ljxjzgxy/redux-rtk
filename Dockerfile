FROM node:18-alpine3.15

WORKDIR /app

ENV NODE_VERSION 16.13.0

COPY package.json ./
RUN npm i

COPY . .

CMD ["npm","start"]