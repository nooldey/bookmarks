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
    "revision": "73fe05960a8307b7ff1b0d48bddf2756"
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
    "url": "assets/js/3.bfc8c3ca.js",
    "revision": "65e8b88adef54199cc44389fd52c4552"
  },
  {
    "url": "assets/js/4.7ce9f8e4.js",
    "revision": "61d4c51705124ece609e9003fe357dae"
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
    "url": "assets/js/app.66344420.js",
    "revision": "2490fd8370a3473d400962ef6b11feee"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "eddf73c74e933a981fc20bc5cf5f4869"
  },
  {
    "url": "developer/index.html",
    "revision": "3145da612c8f3cba7b041482ea882c5c"
  },
  {
    "url": "developer/vps.html",
    "revision": "1fe62fea6cf792691111617b25bb1683"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "9a47cf1ead091204ff3ce7fb6dbe0a18"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "211edb692bf69346e9ad2eb5b0763a12"
  },
  {
    "url": "friends/accounts.html",
    "revision": "a415a084aaa02999f0a1ca8d8c646890"
  },
  {
    "url": "friends/index.html",
    "revision": "9667c6824dcd500d2e733fd74d092483"
  },
  {
    "url": "index.html",
    "revision": "16132e6dcaa35896a89de9d3bd93cb37"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "bb0f89ea01ca75dad1577dd8f64ae527"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "26d62ec8909394ea77d2ce2a69a7054d"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "501735e2c5558b660cda719ec5cc553d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
