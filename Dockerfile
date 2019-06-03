# docker build -t buccaneerai/service-name .
FROM node:10
# RUN npm install -g -s --no-progress yarn

# Expose port 8080
EXPOSE 8080

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install packages.  This way the package layer only needs to be rebuilt when
# a packages are updated
COPY ./yarn.lock /usr/src/app/yarn.lock
COPY ./package.json /usr/src/app/package.json
RUN yarn install

# Bundle app source
COPY ./ /usr/src/app/
RUN yarn build

# Command to run the app
CMD ["yarn", "start-server"]