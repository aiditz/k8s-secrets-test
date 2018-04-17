FROM node:8.9

WORKDIR /app
ADD . /app

RUN npm install --production

ENTRYPOINT ["./bin/run-app.sh"]
