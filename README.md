## packages

npm i @reduxjs/toolkit react-redux

npm i date-fns

npm i axios

npm i react-router-dom

npm i @fortawesome/fontawesome-svg-core
npm i @fortawesome/free-solid-svg-icons
npm i @fortawesome/react-fontawesome

## docker

docker build -t redux-rtk:v0 .

docker run -d --name redux-rtk -p 3001:3000 redux-rtk:v0

## docker compose

docker-compose up -d --build redux-rtk-deploy

## json-server

npm i json-server -g
json-server --watch data/db.json --port 3500

npx json-server -p 3500 -w data/db.json
