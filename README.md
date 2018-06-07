# 说明

这是一个基于vuepress静态网站生成器搭建起来的网址收藏夹。

[![Build Status](https://travis-ci.org/nooldey/bookmarks.svg?branch=master)](https://travis-ci.org/nooldey/bookmarks)

[在线演示](https://nooldey.github.io/bookmarks/)

## 开发来由

一直在不同的电脑之间同步我的谷歌书签，因为众所周知的原因，同步经常不成功，导致我在使用的时候，书签经常需要重新整理，非常浪费时间。

于是借用github，搭建一个可随处访问和维护的书签夹，为了初始化的方便，借助bookmark2md这个小工具把谷歌导出的书签文件转换为md文件。

同时小改了一下，一键转换并输出到vuepress自定义的文档文件夹，并按照自定义的文件夹格式输出。

非常方便！

之后的更新，就只需要进行git对照和检查即可。

## 食用方法

在谷歌Chrome导出书签到本项目根路径下的`generater/bookmark/bookmarks.html`

`yarn chrome`: 自动批量转换chrome导出的书签并生成md文档

`yarn dev`: 本地运行测试

`yarn build`: 生成生产版本，可以各种方式部署在线，比如github.

## 感谢

[bookmark2md](https://github.com/OXOYO/bookmark2md)

[Vuepress](https://vuepress.vuejs.org/zh/)