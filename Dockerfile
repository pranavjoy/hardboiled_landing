FROM ubuntu:16.04

RUN apt-get update -y && \
    apt-get install -y python3-pip python3-dev

RUN pip3 install flask

RUN apt-get install -y locales locales-all

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip3 install -r requirements.txt

ENV LANG C.UTF-8

ENV LC_ALL C.UTF-8

COPY . /app

CMD python3 app.py