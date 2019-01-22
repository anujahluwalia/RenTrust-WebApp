FROM node:8

WORKDIR /webapp
COPY ./RenTrust_Client /webapp
COPY ./public /webapp/public

RUN npm install

