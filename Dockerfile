FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/theislamicnation /usr/share/nginx/html
# ### STAGE 1: Build ###
# FROM node:16.15.1-alpine AS build
# WORKDIR /app
# COPY . .
# RUN npm install && npm run build
# ### STAGE 2: Run ###
# FROM nginx:1.17.1-alpine
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /app/dist/theislamicnation /usr/share/nginx/html
EXPOSE 4200
