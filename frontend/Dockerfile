FROM node:26-bookworm-slim AS builder

WORKDIR /app
COPY . .
RUN npm install && npm run builder


# Dev server stage (for development with HMR)
FROM node:26-bookworm-slim

WORKDIR /app
COPY . .
RUN npm install

EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0","--port", "3000"]