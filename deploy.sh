#!/usr/bin/env sh

# @Author: nooldey
# @Date:   2018-04-26 17:48:46
# @Last Modified by:   nooldey
# @Last Modified time: 2018-04-26 19:13:29

set -e

yarn build

cd ./public

# echo 'zhuweisheng.com.cn' > CNAME

git init
git remote add origin https://github.com/nooldey/bookmarks.git
git add -A
git commit -m 'auto deploy'
git push --set-upstream origin gh-pages
git push -f https://github.com/nooldey/bookmarks.git master:gh-pages

cd -