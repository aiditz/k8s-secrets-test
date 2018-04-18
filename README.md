# k8s-secrets-test

Приложение для тестирования механизма **Kubernetes Secrets**.

Для обновления конфига всех инстансов требуется:

1. Отредактировать файл `./secrets/local-production.json`.
2. Обновить secret с помощью `./bin/create-or-update-secrets.sh`.
3. Запустить деплой с помощью `./bin/deploy-docker-image.sh TAG`, 
либо просто перезапустить pod'ы с помощью `./bin/restart-pods.sh`.

Том с секретами подключается к `/var/secrets`, а приложение при запуске копирует оттуда `local-production.json` к себе в `./config/`, откуда его подтягивает npm модуль `config`.
