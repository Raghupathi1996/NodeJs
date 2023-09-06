FROM node:16-slim as base

# Create app directory
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y vim

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# RUN base as development
FROM base as development
# Set the NODE_ENV environment variable to "development"
ENV NODE_ENV=development

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]