#!/usr/bin/env bash

if [ -z "$1" ]
then
    echo "Usage: [script].sh TAG"
    echo "TAG - docker image tag. It must be different from the current tag in order to trigger automatic image deployment"
    exit 2
else
    NAME=k8s-secrets-test
    IMAGE=repos.azurecr.io/k8s-secrets-test:$1
    sudo docker build -t $NAME .
    sudo docker tag $NAME $IMAGE
    sudo docker push $IMAGE
    kubectl set image deployments/$NAME $NAME=$IMAGE
fi

