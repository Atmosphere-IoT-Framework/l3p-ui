FROM node:10

# Install vue
RUN npm install -g @vue/cli

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

#Remove unnecessary files
RUN apt-get autoremove -y \
    && apt-get autoclean -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

EXPOSE 8080

USER node

# Run container in server mode
CMD ["npm", "run", "serve"]
