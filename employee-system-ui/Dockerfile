FROM node:17-alpine3.14
RUN mkdir -p /myfrontendapp
WORKDIR /myfrontendapp/
COPY package.json .
RUN yarn install
COPY . .
CMD ["yarn", "start"]