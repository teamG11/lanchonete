FROM node:current-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only:production

COPY --from=dev /usr/src/app/build ./build

CMD ["node", "build/server.js"]
