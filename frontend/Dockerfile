FROM node:18.17-alpine3.17

WORKDIR app/frontend

COPY package.json .
COPY package-lock.json .

COPY . .

RUN tsc
RUN npm install
RUN npm run build
RUN npm install -g serve



CMD ["serve", "-s", "build"]
