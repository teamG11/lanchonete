FROM node:current-alpine as dev

WORKDIR /usr/src/app


COPY package*.json ./
RUN npm install
RUN npm install prisma

COPY . ./

RUN npm run build
