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
    "revision": "2cda5d1b8109a283c7eb4710a067c9b8"
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
    "url": "assets/js/10.cbf5268d.js",
    "revision": "d5fd4ec2858f219e250fbf282240a580"
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
    "url": "assets/js/app.eca568a5.js",
    "revision": "662db72e4d969f8a15aa1e6d9637b923"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "23ba6b1f4dc89f5c23712bdef0c51566"
  },
  {
    "url": "developer/index.html",
    "revision": "3b08496548e0077dc3ce0356a14ceab1"
  },
  {
    "url": "developer/vps.html",
    "revision": "0f164ab3a8f3e4454bcb5de34fb64233"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "eee7b262c04bf7f3c594e3f1b735a2aa"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "f3bca8763c4a0baf3c200e5a80973a1d"
  },
  {
    "url": "friends/accounts.html",
    "revision": "d9ea143111f9500edbee39c13bab9ccb"
  },
  {
    "url": "friends/index.html",
    "revision": "2917f5c1f31a050733dd10b41e337d37"
  },
  {
    "url": "index.html",
    "revision": "aac4aebb3e495810440e0d5b86cedf67"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "47797f595d9cd8cff8c6ce5e2377ad25"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "df2dcd8c1116fa35df1cc3ab3e3a6eea"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "cdc9fb9dd42e05ea3b3acdf888e41b3d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
