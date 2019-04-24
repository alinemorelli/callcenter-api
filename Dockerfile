FROM node:10.9

# Create internal app directory
WORKDIR /project

# Bundle app source
COPY . .

# Install dependencies
RUN rm -rf node_modules && yarn install --production

# Start server

CMD [ "yarn", "start:dev" ]
