FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

# Vite için host ve port ayarları
ENV VITE_HOST=0.0.0.0
ENV VITE_PORT=5173

EXPOSE 5173
CMD ["npm", "run", "dev"]