FROM node:18

WORKDIR /usr/src

COPY . .

RUN npm install -y

RUN mkdir /usr/src/app && mkdir /usr/src/app/node_modules

RUN ln -s node_modules /usr/src/app/node_modules

EXPOSE 3000

RUN apt-get update
RUN apt-get install -y wget

ENV DOCKERIZE_VERSION v0.7.0

RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*