
FROM ubuntu:16.04
MAINTAINER Islam Wazery <wazery@ubuntu.com>

# Update the repository
RUN apt-get update && \
    apt-get install -y wget sudo dialog net-tools git build-essential nodejs npm ruby nginx && \
    apt-get clean &&  rm -rf /var/lib/apt/lists/*

RUN gem install sass && mkdir -p /home/draft-app-markup

COPY package.json /home/draft-app-markup
COPY bower.json /home/draft-app-markup

WORKDIR /home/draft-app-markup

RUN ln -s /usr/bin/nodejs /usr/bin/node && \
    npm install fs-extra && \
    mv /home/draft-app-markup/node_modules/fs-extra /home/draft-app-markup/node_modules/.fs-extra-DELETE

# Install Prerequisites
RUN npm install
RUN sudo npm install -g bower gulp-cli

RUN bower install --allow-root --force-latest

ADD . /home/draft-app-markup

RUN gulp

COPY nginx.conf /etc/nginx/nginx.conf

RUN cp -r /home/draft-app-markup/dist/* /var/www/html/

EXPOSE 80

CMD service nginx start
