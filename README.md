

## `Prequisite`

node version=11.15 or above <br />
npm package manager <br />
python version =3.7.6

## `Project Set up`

## `pip install -r requirement.text `
install all the python requirements for python

## `python manage.py migrate`
load migrations

## `python manage.py loaddata --app city_info fixtures.json`
load data from fixtures to db

## `cd city_app_frontend`

## `npm install `
install npm dependecies

## `npm run build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## `cd ..`
come back to django project

## `python manage.py runserver 0:80`
open localhost project is ready to run

## `For Running in development mode `

#### `npm start`
from city_app_frontend directory
only development
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `python manage.py runserver 0:9000`
only development
connects the backend and frontend

