FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --only=production
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./dist .

EXPOSE 8080
ENTRYPOINT [ "node", "index.js" ]
CMD [""]