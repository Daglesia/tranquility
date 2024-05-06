#!/usr/bin/env bash

LOCK_FILE="$(pwd)/tranquility.lock"
flock -n $LOCK_FILE = ./deploy-when-changed.sh