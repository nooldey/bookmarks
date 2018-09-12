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
    "revision": "c8817448599d9fb466897a1aa9849d1d"
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
    "url": "assets/js/app.0c67db57.js",
    "revision": "6be4cc71fafd7c7ffc328230a98a035b"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "bc28c380a9e824c546fe6fc9e441b9f6"
  },
  {
    "url": "developer/index.html",
    "revision": "69c3fd2211908e55b178d76c05074ad2"
  },
  {
    "url": "developer/vps.html",
    "revision": "5eb54bd2ccbe2343988001395293e4d1"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "0a7a60585300b55622ce30205101a94b"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "40041fdf3380d5b8cb5dcc885a14b62d"
  },
  {
    "url": "friends/accounts.html",
    "revision": "101e3b94950b99b4dbcc6b00fc7e799e"
  },
  {
    "url": "friends/index.html",
    "revision": "11487ea99d5b083a6cd4e969943e34b8"
  },
  {
    "url": "index.html",
    "revision": "fd527204e8671e3617cd6b8090be1e0c"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "f5c929a867afba45ac9a9804350877a3"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "6e93c6ecf440616a41eb1bbc7f4632e4"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "29eda43d0904d9840986ccb5d95b2fab"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
