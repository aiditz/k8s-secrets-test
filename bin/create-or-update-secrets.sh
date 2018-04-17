#!/usr/bin/env bash

kubectl delete secret production-config

kubectl create secret generic production-config \
  --from-file=./secrets/local-production.json
# --from-file=/path/to/public/key
# --from-file=/path/to/private/key
