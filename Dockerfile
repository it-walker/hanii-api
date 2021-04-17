FROM node:13.7

RUN yarn global add @nestjs/cli

WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn install --non-interactive --frozen-lockfile

COPY . .

RUN yarn build
CMD [ "yarn", "start:dev"]