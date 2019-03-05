FROM node:10.13-alpine

ENV NODE_ENV production

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm install -g nodemon

EXPOSE 3050

CMD [ "npm", "start" ]