# banners-client
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./src ./src
COPY ./public ./public
COPY index.html ./
COPY tsconfig.json ./
COPY ./tsconfig.node.json ./
COPY vite.config.ts ./
ENV VITE_BASE_URL=http://ae73adf0061dc4d49ab515bf812150d9-1090975536.eu-central-1.elb.amazonaws.com/banners/api
RUN npm run build
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./src/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



