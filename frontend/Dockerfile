# Stage 1

FROM node:alpine AS build
 
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci 
 
COPY . .

RUN npm run build

# Stage 2

FROM nginx:alpine

RUN mkdir -p /var/cache/nginx/client_temp && \
    chown -R nginx:nginx /var/cache/nginx /var/run /var/log/nginx

WORKDIR /usr/share/nginx/html  
 
COPY --from=build --chown=nginx:nginx /app/dist .

COPY nginx/frontend-nginx.config /etc/nginx/conf.d/default.conf 

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]  
