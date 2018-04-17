#!/usr/bin/env bash

docker build -t k8s-secrets-test .
docker tag k8s-secrets-test repos.azurecr.io/k8s-secrets-test
docker push repos.azurecr.io/k8s-secrets-test
