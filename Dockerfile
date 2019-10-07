FROM library/node:8-alpine as dependencies

COPY package.json ./
RUN npm config set progress=false && npm config set depth 0 \
    && npm install \
    && mkdir /opt/app \
    && cp -R ./node_modules /opt/app

FROM dependencies as builder

WORKDIR /opt/app
COPY . .
RUN npm run build

FROM library/nginx:1.13.12-alpine as runtime

ENV API_ENDPOINT='https://gateway.marvel.com/v1/public/'

COPY nginx.tmpl /etc/nginx/conf.d/default.tmpl
RUN rm -r /usr/share/nginx/html/*
COPY --from=builder /opt/app/dist/ /usr/share/nginx/html/

EXPOSE 80
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/conf.d/default.tmpl > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]
#docker run -it --rm --name marvel -p 8080:80 magnobiet/marvel-app:1.0.0