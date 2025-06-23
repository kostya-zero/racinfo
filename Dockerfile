FROM node:24-alpine

RUN corepack enable pnpm && corepack install -g pnpm@latest

WORKDIR /app

COPY pnpm-lock.yaml package.json ./

RUN pnpm install
COPY . .
RUN pnpm build

EXPOSE 8085

CMD ["pnpm", "start", "--port", "8085"]