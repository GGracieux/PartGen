# Image source
FROM nginx:latest

# Info image
MAINTAINER ggracieux@gmail.com

# Ajout de la conf nginx 
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Ajout du front
COPY dist /public