FROM node:20-alpine AS hill-site
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build

FROM nginx:latest AS dev
EXPOSE 80
COPY --from=hill-site /app/dist /usr/share/nginx/html