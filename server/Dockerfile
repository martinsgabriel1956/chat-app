FROM node:18

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y bash

COPY package*.json ./
COPY pnpm-lock.yaml ./
COPY prisma ./prisma/

RUN pnpm install

COPY . .