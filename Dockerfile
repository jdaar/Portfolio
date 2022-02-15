FROM node:17
COPY . /app
WORKDIR /app
RUN "npm install"
RUN "npm run build"
RUN "sudo npm install -g serve"
RUN ["serve", "-s", "build"]