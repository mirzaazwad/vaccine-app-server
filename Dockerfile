FROM node:18-alpine
#nodemon helps in hot reload to essentially rebuild the system on change
RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .


EXPOSE 8080

CMD ["npm","run","dev"]