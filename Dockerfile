FROM node
WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma
COPY tsconfig.json ./

COPY . .

RUN npm ci

RUN npx prisma generate

RUN npm run build

COPY .env ./dist
WORKDIR ./dist

EXPOSE 4000
CMD node index.js
