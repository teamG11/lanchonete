# development

FROM node:18-alpine AS development

WORKDIR /usr/src/app

COPY package*.json .
COPY prisma ./prisma/

COPY . .

EXPOSE 3000

# build

FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

COPY --chown=node:node prisma ./prisma/

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN npm run prisma:generate

USER node

# production

FROM node:18-alpine AS production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/build ./build
COPY --chown=node:node --from=build /usr/src/app/package*.json ./
COPY --chown=node:node --from=build /usr/src/app/prisma ./prisma

CMD [ "npm", "run", "start:migrate:prod" ]