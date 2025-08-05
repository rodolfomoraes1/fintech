FROM node:20-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY pnpm-lock.yaml package.json ./
RUN pnpm install

COPY . .
RUN pnpm build

FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY --from=builder /app .

ENV NODE_ENV=production

EXPOSE 3000

CMD ["pnpm", "start"]
