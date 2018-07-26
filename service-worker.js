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
    "revision": "4a46aa1e497f49a4876217d6f02164de"
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
    "url": "assets/js/app.2d8f65ef.js",
    "revision": "57403d8cf3e691bff83fb19ac47e45c9"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "04732d215d71cc7464db2d1706695e41"
  },
  {
    "url": "developer/index.html",
    "revision": "45b4b22cab7e058646099d65231b1237"
  },
  {
    "url": "developer/vps.html",
    "revision": "dfce190c4654b553098b00c04afda85e"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "e4855f5eaf24f43672fb08140a7ff5d4"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "d9e306a06c69538c6db2f6c617a9acc4"
  },
  {
    "url": "friends/accounts.html",
    "revision": "15aa8aff6e3363bad9775f902fd01c07"
  },
  {
    "url": "friends/index.html",
    "revision": "94a89cbaf5474eb737f54dbc3ecec90f"
  },
  {
    "url": "index.html",
    "revision": "05be24a005c148ddc726dae6efae196f"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "aa74532e07da7b0455743105bf2f4637"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "fb3356424d89c0845eaf93670f495dad"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "928e3c79726377e18d39e334b3a630eb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
