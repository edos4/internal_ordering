#!/bin/bash

curl -n -s -X DELETE https://api.heroku.com/apps/$1/dynos \
  -H "Content-Type: application/json" \
  -H "Accept: application/vnd.heroku+json; version=3" \
  -H "Authorization: Bearer $HEROKU_API_KEY"

sleep 10