# syntax=docker/dockerfile:1.7

FROM node:22.11.0-alpine AS base
RUN npm i -g pnpm@10.34.5 && npm cache clean --force
ENV PNPM_HOME=/pnpm

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile --ignore-scripts --store-dir /pnpm/store

FROM base AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1 DOCKER_BUILD=1 NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

FROM node:22.11.0-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 HOSTNAME=0.0.0.0 PORT=3000
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static
COPY --from=builder --chown=node:node /app/public ./public
# Blog posts are read from process.cwd()/content at runtime.
COPY --from=builder --chown=node:node /app/content ./content
USER node
EXPOSE 3000
CMD ["node", "server.js"]
