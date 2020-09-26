FROM node:14.4.0-alpine3.10
USER root
WORKDIR /frontend
COPY . /frontend
ARG API_URL
ENV REACT_APP_API_URL $API_URL
RUN npm install
RUN npm run deploy