FROM node:stretch as builder

RUN apt-get update
RUN apt-get install -y yarn
COPY . /exams
WORKDIR /exams
RUN yarn install
RUN yarn build

FROM nginx

COPY --from=builder /exams/build /usr/share/nginx/html
