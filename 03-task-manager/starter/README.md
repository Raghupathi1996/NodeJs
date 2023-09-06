# NodeJs

## local
docker build --target development . -t server-taskbar:${version}
docker build --target development . -t egp-wrapper

## production

docker build --target development . -t egp-wrapper-prod:0.1



MONGO_URI="mongodb://<MONGO_USERNAME>:<MONGO_PASSWORD>@localhost:<MONGO_PORT_1>/<DB_NAME>?authSource=admin"

MONGO URI EXAMPLE
MONGO_URI="mongodb://mongo-db-admin:mongo-password@localhost:27017/db?authSource=admin"

Here all the collections will be created in db

To see all the collections

docker exec -it mongo-db sh
mongo -u taskmanager-db-admin
taskmanager-password 
use db
show collections