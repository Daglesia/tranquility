#!/usr/bin/env bash

git pull

BUILD_VERSION=$(git rev-parse HEAD)

echo "$(date --utc +%FT%TZ) // New app version: $BUILD_VERSION"

echo "$(date --utc +%FT%TZ) // Running build"

docker compose rm -f
docker compose build

echo "$(date --utc +%FT%TZ) // Running upscaled app"
OLD_CONTAINER=$(docker ps -aqf "name=app")
BUILD_VERSION=$BUILD_VERSION docker compose up -d --no-deps --scale app=2 --no-recreate app

sleep 30

echo "$(date --utc +%FT%TZ) // Downscaling app"
docker container rm -f $OLD_CONTAINER
docker compose up -d --no-deps --scale app=1 --no-recreate app

echo "$(date --utc +%FT%TZ) // Reloading caddy"
CADDY_CONTAINER=$(docker ls -aqf "name=caddy")
docker exec $CADDY_CONTAINER caddy reload -c /etc/caddy/Caddyfile