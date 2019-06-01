# docker build -t buccaneerai/service-name .
FROM node:10
# RUN npm install -g -s --no-progress yarn

# Expose port 8080
EXPOSE 8080

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY ./ /usr/src/app/
RUN yarn install

# Command to run the app
CMD ["yarn", "start-container"]