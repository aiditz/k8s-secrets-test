#!/usr/bin/env bash

ln -s /var/secrets/local-production-config.json /app/config/local-production.json
node /app/index.js
