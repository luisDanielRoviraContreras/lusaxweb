#!/usr/bin/env sh

# abort on errors
# set -e

# remove folders

rm -rf {dist,.nuxt}
rm -rf functions/.nuxt

# build nuxt

npm run build

cp -R .nuxt functions

# copy folder - files

mkdir -p dist/{server,client}



shopt -s extglob

cd functions

cp -R !(node_modules) ../dist/server

cd -


cp -R .nuxt dist/server

cp -R app/static/* dist/client

# cp -R app/static/ dist/client

cp -R .nuxt/dist dist/client/assets

# deploy Firebase

firebase deploy
