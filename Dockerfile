# Get NPM packages
FROM node:20-alpine AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN apk add --update tzdata
ENV TZ=America/Bogota
ENV NEXT_PUBLIC_BACKEND=https://evolve.backend.dev.programandoweb.net/api/v1/
#RUN npm ci --only=production
RUN npm install

# Rebuild the source code only when needed
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
#RUN npm install -g npm@10.2.5
RUN npm run build

# Production image, copy all the files and run next
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001


COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env ./.env
COPY --from=builder /app/next.config.mjs ./next.config.mjs
#COPY --from=builder /app/server.js ./server.js

RUN mkdir -p /app/public
COPY public /app/public

USER nextjs
EXPOSE 3000

RUN cat .env
CMD ["npm", "start"]


#docker system prune -a
#npm run build
#sudo docker build -t programandoweb/evolve:front-ivoolve-store .
#docker push programandoweb/evolve:front-ivoolve-store
#docker run -d --name front-ivoolve-store -p6324:3000 --restart=always programandoweb/evolve:front-ivoolve-store
#sudo docker stop front-ivoolve-store
#sudo docker rm front-ivoolve-store