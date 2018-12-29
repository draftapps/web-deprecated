FROM ubuntu:xenial
MAINTAINER Islam Wazery <wazery@ubuntu.com>

# Update the repository
RUN apt-get update && \
    apt-get install -y wget sudo dialog net-tools git build-essential ruby-dev gcc nginx curl && \
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - && \
    apt-get install -y nodejs && \
    apt-get clean &&  rm -rf /var/lib/apt/lists/*

RUN gem install sass && mkdir -p /home/webapp

COPY package.json /home/webapp
COPY bower.json /home/webapp

WORKDIR /home/webapp

RUN npm install fs-extra && \
    mv /home/webapp/node_modules/fs-extra /home/webapp/node_modules/.fs-extra-DELETE

# Install Prerequisites

RUN npm i yarn gulp-cli -g
RUN yarn

ADD . /home/webapp

# RUN gulp serve

# COPY nginx.conf /etc/nginx/nginx.conf

RUN cp -r /home/webapp/dist/* /var/www/html/

EXPOSE 3000

CMD gulp serve
