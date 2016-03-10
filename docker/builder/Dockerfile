FROM node:4.3
MAINTAINER Josh Finnie <josh@jfin.us>

RUN npm install -g gulp@3.9.1 node-sass@3.4.2

WORKDIR /code/

ADD package.json /code/package.json
ADD run /usr/local/bin/run
RUN chmod +x /usr/local/bin/run

CMD ["/usr/local/bin/run"]
