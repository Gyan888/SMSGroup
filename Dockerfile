FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY requirement.text /usr/src/app
EXPOSE 8000
RUN pip install -r requirement.text
COPY ./ /usr/src/app
RUN python manage.py migrate
RUN python manage.py loaddata --app city_info fixtures.json