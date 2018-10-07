FROM node:9.11.1-alpine

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies 
RUN npm install

# copy all content 
COPY . .

EXPOSE 8080
CMD [ "npm", "run", "dev:docker"]

