# FROM nginx:1.17.1-alpine
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY /dist/theislamicnation /usr/share/nginx/html
### STAGE 1: Build ###
FROM node:16.16.0-alpine AS build
#FROM node:alpine AS build
WORKDIR /app
COPY . .
RUN npm install --force && npm run build --force
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/theislamicnation /usr/share/nginx/html
EXPOSE 4200
