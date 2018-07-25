/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5ec087e630f83766e7889539872c7b67"
  },
  {
    "url": "assets/css/11.styles.e6c6433b.css",
    "revision": "24eaea6d5e6d82ea9e22100e49519c08"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.061e7b85.js",
    "revision": "d548cdcf284b0ac32087dbc4860e1dc7"
  },
  {
    "url": "assets/js/1.b0e6a26b.js",
    "revision": "59fa077f8284f47ed33b030822379e37"
  },
  {
    "url": "assets/js/10.11f76bff.js",
    "revision": "4ae918355c720df6218c7ec89623a374"
  },
  {
    "url": "assets/js/2.ee6fde87.js",
    "revision": "9df5753bbd25bf04f1a0cf47e4e09e83"
  },
  {
    "url": "assets/js/3.d19d9557.js",
    "revision": "892c9a2926f4eb3520f0ed616a2e4d92"
  },
  {
    "url": "assets/js/4.761c89d9.js",
    "revision": "0558eeed35573d05bc0714b6dfa5bee8"
  },
  {
    "url": "assets/js/5.e7f4082b.js",
    "revision": "0ee9cfdae16850701f8f3e55712ace5a"
  },
  {
    "url": "assets/js/6.173df758.js",
    "revision": "7d5996e096668d79772b8edddcc2b9da"
  },
  {
    "url": "assets/js/7.b7283216.js",
    "revision": "d166dcec59d6b1e1e4e6adc2ddc6dd57"
  },
  {
    "url": "assets/js/8.506e4caf.js",
    "revision": "2f340e18de7a5cebd455df3ce1995f9a"
  },
  {
    "url": "assets/js/9.cc6e8d8c.js",
    "revision": "822e4c227d730e15620c51ed4874247e"
  },
  {
    "url": "assets/js/app.0d7b9b7c.js",
    "revision": "599059cc485bb2d4748537ec386318b4"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "64c5a4e8c03d05f9d4ea0e7832abe043"
  },
  {
    "url": "developer/index.html",
    "revision": "c7d683ba7efec849a5a03e93b5a8876e"
  },
  {
    "url": "developer/vps.html",
    "revision": "d7fa3bd0972d44525c6a320ed6989616"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "3d1167179ffe253f1ad1944cbb24a2b3"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "ecd569c54d4969f39dd94892f4a28d12"
  },
  {
    "url": "friends/accounts.html",
    "revision": "3375063c38379368e7d3b91494f56505"
  },
  {
    "url": "friends/index.html",
    "revision": "e66c48e86075fa600cf6e7b8a64a5496"
  },
  {
    "url": "index.html",
    "revision": "1a7a79fcdb5740928067fbb0dd4694c0"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "157f2235320d17965aac0cfefabdee37"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "cc48ff10c39b82e41ba1abd63fa98152"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "a4442e410ba1f4697d0ad85ac40c3e57"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
