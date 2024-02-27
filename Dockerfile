FROM node:latest

WORKDIR /app

COPY package.json ./
COPY server.js ./

RUN npm install 

COPY . .

EXPOSE 5000

CMD ["npm","start"]