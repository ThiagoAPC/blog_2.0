# =============================================================================
# Stage 1: Development — hot-reload, source mounted as volume
# =============================================================================
FROM node:20-alpine AS development

WORKDIR /app

# Install deps first (layer cache — only re-runs on package.json change)
COPY package*.json ./
RUN npm install

EXPOSE 4321
CMD ["npm", "run", "dev"]


# =============================================================================
# Stage 2: Build — production static export
# =============================================================================
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


# =============================================================================
# Stage 3: Preview — serve the built site locally before deploy
# =============================================================================
FROM node:20-alpine AS preview

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY --from=build /app/dist ./dist

EXPOSE 4321
CMD ["npm", "run", "preview"]
