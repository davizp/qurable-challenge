FROM node:14.19.0

WORKDIR /app

ADD package.json ./

RUN npm install --production

COPY . /app

CMD npm run prod

EXPOSE 7777

ENTRYPOINT npm start
