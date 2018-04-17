#!/usr/bin/env bash

cp /var/secrets/local-production.json /app/config/local-production.json
echo "Secret config copied"

node /app/index.js
