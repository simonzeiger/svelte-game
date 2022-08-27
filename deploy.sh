#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f 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@github.com:simonzeiger/simonzeiger.github.io/svelte-game.git deploy:gh-pages

cd -