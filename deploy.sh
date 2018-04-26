#!/usr/bin/env sh

# @Author: nooldey
# @Date:   2018-04-26 17:48:46
# @Last Modified by:   nooldey
# @Last Modified time: 2018-04-26 18:00:16

set -e

yarn build

cd ./public

# echo 'zhuweisheng.com.cn' > CNAME

git init
git remote add origin git@github.com:nooldey/bookmarks.git
git add -A
git commit -m 'auto deploy'
git push -f git@github.com:nooldey/bookmarks.git master:gh-pages

cd -