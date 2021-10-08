FROM node:lts as dependencies
WORKDIR /yb-hackathon
COPY package.json package-lock.json ./
RUN npm install

FROM node:lts as builder
WORKDIR /yb-hackathon
COPY . .
COPY --from=dependencies /yb-hackathon/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /yb-hackathon
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /yb-hackathon/next.config.js ./
COPY --from=builder /yb-hackathon/public ./public
COPY --from=builder /yb-hackathon/.next ./.next
COPY --from=builder /yb-hackathon/node_modules ./node_modules
COPY --from=builder /yb-hackathon/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]


