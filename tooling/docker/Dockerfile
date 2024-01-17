FROM node:current-alpine as dev

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
COPY ./prisma ./prisma

RUN npm install

COPY . ./

CMD ["npm", "start"]
