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
    "revision": "e30b2b566eb61c0e76ecaed1ea85f453"
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
    "url": "assets/js/4.47bee34b.js",
    "revision": "92c7223938b9620eedb919df13c6f955"
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
    "url": "assets/js/app.e5949d92.js",
    "revision": "3dc6454da8902488d9a185cd1386b0f9"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "8ecaf5bc9676804c3f3431a23263fa44"
  },
  {
    "url": "developer/index.html",
    "revision": "fa51ef006bf593db08c155488d6bc636"
  },
  {
    "url": "developer/vps.html",
    "revision": "b61a624d765e27c5a6dd7182ad6bb69a"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "22e81f37ae5d5ad9e010d2299ff9267a"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "0a52933f4cb162bccdffa5b5ecd10c3e"
  },
  {
    "url": "friends/accounts.html",
    "revision": "0ac267e4ee75bf671be75a5362d4e621"
  },
  {
    "url": "friends/index.html",
    "revision": "5eda55e6740f8f5037f78f16ba1d195d"
  },
  {
    "url": "index.html",
    "revision": "e069cc126fda9abfa1cf731ad6da795a"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "e61b4022293866bf3622b1d544a7e2ed"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "294e922bf346c10330a3c8eba450f4b5"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "f5f862080baf200bc5e11ce2d22c8ee8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
