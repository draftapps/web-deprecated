FROM ubuntu:16.04
MAINTAINER Islam Wazery <wazery@ubuntu.com>

# Update the repository
RUN apt-get update && \
    apt-get install -y wget sudo dialog net-tools git build-essential nodejs npm ruby nginx && \
    apt-get clean &&  rm -rf /var/lib/apt/lists/*

RUN gem install sass && mkdir -p /home/webapp

COPY package.json /home/webapp
COPY bower.json /home/webapp

WORKDIR /home/webapp

RUN ln -s /usr/bin/nodejs /usr/bin/node && \
    npm install fs-extra && \
    mv /home/webapp/node_modules/fs-extra /home/webapp/node_modules/.fs-extra-DELETE

# Install Prerequisites
RUN npm install
RUN sudo npm install -g bower gulp-cli

RUN bower install --allow-root --force-latest

ADD . /home/webapp

RUN gulp serve:dist

COPY nginx.conf /etc/nginx/nginx.conf

RUN cp -r /home/webapp/dist/* /var/www/html/

EXPOSE 80

CMD service nginx start
