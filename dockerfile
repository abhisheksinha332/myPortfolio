FROM node:18 AS builder
WORKDIR /app
COPY package.json package-lock.json ./ 
RUN npm install
COPY . .    
RUN npm run build
FROM node:18-slim
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/dist .
EXPOSE 5000
CMD ["serve", "-s", ".", "-l", "5000"] 