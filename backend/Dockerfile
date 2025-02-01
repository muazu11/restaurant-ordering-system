# Stage 1

FROM node:alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci --production 

COPY --chown=node:node . .

EXPOSE 8001

USER node

CMD ["node", "index.js"]


