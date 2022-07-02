## packages

npm i @reduxjs/toolkit react-redux

npm i date-fns

npm i axios

npm i react-router-dom

## docker

docker build -t redux-rtk:v0 .

docker run -d --name redux-rtk -p 3001:3000 redux-rtk:v0

## docker compose

docker-compose up -d --build redux-rtk-deploy
