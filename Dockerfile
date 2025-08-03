# Stage 1: Builder
FROM node:18-alpine AS builder

WORKDIR /app

# Copy only what's needed to install dependencies
COPY package.json package-lock.json ./

# Install all dependencies (including devDependencies)
RUN npm ci

# Copy the rest of your app
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Production Image
FROM node:18-alpine AS runner

WORKDIR /app

# Install only production dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy only what's needed for production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

# Optional: copy any needed env/schema files
# COPY --from=builder /app/.env ./.env

EXPOSE 3001

ENV NODE_ENV=production

CMD ["npm", "start"]
