#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/wsypower/w-note.git
git push -f origin master

cd -