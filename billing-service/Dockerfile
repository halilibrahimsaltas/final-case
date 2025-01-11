FROM node:18-alpine

WORKDIR /app

# Bağımlılıkları kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Kaynak kodları kopyala
COPY . .

EXPOSE 3002
CMD ["npm", "start"] 