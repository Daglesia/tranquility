#!/bin/bash

echo "$(date --utc +%FT%TZ) // Fetching repository"
git fetch

UPSTREAM=${1:-'@{u}'}
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse "$UPSTREAM")
BASE=$(git merge-base @ "$UPSTREAM")

if [ $LOCAL = $REMOTE ]; then
    echo "$(date --utc +%FT%TZ) // No changes in master"
elif [ $LOCAL = $BASE ]; then
    BUILD_VERSION=$(git rev-parse HEAD)
    echo "$(date --utc +%FT%TZ) // Changes detected, deploying $BUILD_VERSION"
    ./scripts/deploy.sh
elif [ $REMOTE = $BASE ]; then
    echo "$(date --utc +%FT%TZ) // Local changes, stashing"
    git stash
    ./scripts/deploy.sh
else
    echo "$(date --utc +%FT%TZ) // Git diverged, error"
fi
