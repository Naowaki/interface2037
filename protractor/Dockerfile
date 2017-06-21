FROM caltha/protractor

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app/


#add x rights after copying files
RUN chmod -R +x /usr/src/app/

# Get all the code needed to run the app
COPY . /usr/src/app/

# Install dependecies
# RUN npm install

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

CMD ["protractor", "protractor.conf.js"]
