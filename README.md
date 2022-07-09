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
docker image rm redux-rtk:v0
docker rmredux-rtk

docker build -t json-server:v1 -f Dockerfile.json-server .  
docker run -d --name json-server -p 3501:3501 json-server:v1

## docker compose

docker-compose up -d --build
docker compose stop

## json-server

npm i json-server -g
json-server --watch data/db.json --port 3500

npx json-server -p 3500 -w data/db.json
