FROM node
WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma
COPY tsconfig.json ./

RUN npm ci
RUN npx prisma generate

COPY . .

RUN npm run build

COPY .env ./dist
WORKDIR ./dist

EXPOSE 4000

RUN ls
CMD node index.js
