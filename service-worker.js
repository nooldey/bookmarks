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
    "revision": "2662fd5eae20b4750dd3ce46e07c6d88"
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
    "url": "assets/js/1.29754c2d.js",
    "revision": "23832788f52b8ab14c22b13136ce6fbb"
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
    "url": "assets/js/4.27013098.js",
    "revision": "ad374d905a9a051603881074030cd9bf"
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
    "url": "assets/js/7.427e9bd1.js",
    "revision": "b10df15582b5e49407dd27821fe92c5d"
  },
  {
    "url": "assets/js/8.08efb72d.js",
    "revision": "d4d3feb880963f8351c45af74be8026d"
  },
  {
    "url": "assets/js/9.cc6e8d8c.js",
    "revision": "822e4c227d730e15620c51ed4874247e"
  },
  {
    "url": "assets/js/app.8b6b5e39.js",
    "revision": "21d613cc3bdb971530448c64dffb0f33"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "8c71d5f8dcc8ba36c3e677f9a520a644"
  },
  {
    "url": "developer/index.html",
    "revision": "99acc022a66f56912562ce6102e660be"
  },
  {
    "url": "developer/vps.html",
    "revision": "9be5d9fe75604189f85e88dd986dc659"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "98f98f376d0c1b0a2c352b0a8f8bfbfb"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "07ef90c67028c9f3071eb0145cc18ba5"
  },
  {
    "url": "friends/accounts.html",
    "revision": "4831b67f7c8d00f1cd682c76585c0547"
  },
  {
    "url": "friends/index.html",
    "revision": "7708baa24fd29617c56fc6e460398844"
  },
  {
    "url": "index.html",
    "revision": "0c0a6feeb9fc5119599e98843bb43fea"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "4ba35d6be12a5e18d3e6bde58a073dd9"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "a9608af81163aa83b57e0563e6fec67c"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "80c945c3e7f8fcd08a81c72f6402eb49"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
