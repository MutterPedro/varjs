FROM docker:19.03-dind

RUN apk add --update npm

COPY . .

RUN npm install --production

ENTRYPOINT ["node", "/lib/main.js"]
