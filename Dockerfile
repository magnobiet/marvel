FROM node:9.11.1-alpine

# copy package.json and package-lock.json
COPY package*.json ./

# copy all content 
COPY . ./

# install dependencies 
RUN npm install

EXPOSE 8080
CMD [ "npm", "run", "dev:docker"]

