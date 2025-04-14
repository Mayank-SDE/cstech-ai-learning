# Optimized the manual process using my scripting knowledge
## To comment the unused environment variables
### Step 1. Listing down all the active .env variables first
```bash
# The below command will list down all the active environment variables used
$ cat .env | grep -v '^#' | cut -d '=' -f1

NODE_ENV
PORT
IP
DOMAIN

DATABASE_URL

STORAGE_PROVIDER 


MINIO_ENDPOINT_IP
MINIO_PORT
MINIO_ACCESS_KEY
MINIO_SECRET_KEY


GEOSERVER_API_URL
GEOSERVER_USERNAME
GEOSERVER_PASSWORD

RABBITMQ_HOST
RABBITMQ_USERNAME
RABBITMQ_PASSWORD

APP_BASE_URL
AI_API_URL
ABS_CONNECTION_STRING
KEYCLOAK_BASE_URL
MAILSERVER_URL
INVITE_BASE_URL

JWT_SECRET
JWT_REFRESH_SECRET
JWT_RT_SECRET
SINGLE_USE_SECRET

JWT_TOKEN_EXPIRE
REFRESH_TOKEN_EXPIRE
JWT_RT_SECRET_EXP
JWT_SECRET_EXP
SINGLE_USE_SECRET_EXP

COOKIE_SECRET
SESSION_EXPIRE

MEG_NXT_INSTALLER_NAME
ADD_SEED

IAM_CLIENT_SECRET
REALM
ENABLE_SELF_SSL


SENTRY_DSN
```
### .sh Scripting for checking is there any .env environment variables which is not used in the project 
```sh
#!/bin/bash

echo "🔍 Checking unused env variables..."

# Change this if your .env file is elsewhere
ENV_FILE=".env"
CODE_DIR="./src"

for var in $(cat "$ENV_FILE" | grep -v '^#' | cut -d '=' -f1); do
  if grep -rq "process.env.$var" "$CODE_DIR" || grep -rq "envVars.$var" "$CODE_DIR"; then
    echo "✅ USED: $var"
  else
    echo "❌ UNUSED: $var"
  fi
done

```
### .sh Scripting for checking is there any js variables initialized from .env variable which is not used in the project

```sh
#!/bin/bash

echo "🔍 Checking unused env variables and their mapped keys..."

ENV_FILE=".env"
CODE_DIR="./src"
CONFIG_FILE="./config.ts"
# Keys must be updated from time to time
declare -A MAPPED_KEYS=(
  ["PORT"]="port"
  ["ABS_CONNECTION_STRING"]="azureObjectConString"
  ["STORAGE_PROVIDER"]="storageProvider"
  ["MINIO_ENDPOINT_IP"]="minioEndpoint"
  ["MINIO_PORT"]="minioPort"
  ["MINIO_ACCESS_KEY"]="minioAccess"
  ["MINIO_SECRET_KEY"]="minioSecret"
  ["MEG_NXT_INSTALLER_NAME"]="megNxtAppname"
  ["SINGLE_USE_SECRET"]="suJwtSecret"
  ["SINGLE_USE_SECRET_EXP"]="suSecretExp"
  ["JWT_SECRET"]="accessToken"
  ["JWT_RT_SECRET"]="rtToken"
  ["JWT_SECRET_EXP"]="acExp"
  ["JWT_RT_SECRET_EXP"]="rtExp"
  ["ADD_SEED"]="useSeed"
  ["AI_API_URL"]="aiServiceUrl"
  ["DOMAIN"]="domainName"
  ["IAM_CLIENT_SECRET"]="clientSecret"
  ["GEOSERVER_API_URL"]="geoServerServiceUrl"
  ["GEOSERVER_USERNAME"]="geoServerUsername"
  ["GEOSERVER_PASSWORD"]="geoServerPassword"
  ["RABBITMQ_HOST"]="rabbitmqHost"
  ["RABBITMQ_USERNAME"]="rabbitmqUsername"
  ["RABBITMQ_PASSWORD"]="rabbitmqPassword"
  ["PROJECT_WITH_PREDEFINED_DATA"]="dummyData"
  ["REALM"]="realm"
  ["MAILSERVER_URL"]="mailServerUrl"
  ["INVITE_BASE_URL"]="inviteBaseUrl"
  ["KEYCLOAK_BASE_URL"]="keycloakBaseUrl"
  ["SENTRY_DSN"]="sentryDsn"
  ["ENABLE_SELF_SSL"]="selfSignedSSl"
)

for var in $(cat "$ENV_FILE" | grep -v '^#' | cut -d '=' -f1); do
  USED=false

  # Check process.env or envVars usage
  if grep -rq "process.env.$var" "$CODE_DIR" || grep -rq "envVars.$var" "$CODE_DIR"; then
    USED=true
  fi

  # Check mapped property usage
  if [[ -n "${MAPPED_KEYS[$var]}" ]]; then
    mappedName="${MAPPED_KEYS[$var]}"
    if grep -rq "$mappedName" "$CODE_DIR"; then
      USED=true
    fi
  fi

  if [ "$USED" = true ]; then
    echo "✅ USED: $var"
  else
    echo "❌ UNUSED: $var"
  fi
done

```
