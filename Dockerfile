FROM node:11-alpine

ARG GIT_HEAD
RUN GIT_HEAD=$GIT_HEAD

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN npm install -g yarn

COPY ./ /app

RUN yarn start
