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
    "revision": "e59f963fcb9cc768895a4930d76df7cd"
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
    "url": "assets/js/4.09614c5e.js",
    "revision": "a88b44ad68c7a595641578e663818660"
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
    "url": "assets/js/app.ddb30daf.js",
    "revision": "3e82a2e39693a8c7708f7e58aa7e81d5"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "603cda53f59776fd75d0a945c3c6fca1"
  },
  {
    "url": "developer/index.html",
    "revision": "70bfc055c277e32a521790fa6b518b82"
  },
  {
    "url": "developer/vps.html",
    "revision": "b9abf8dcef033b24c455ba07396c18d9"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "b202d6c03538296cc3003b7af078f482"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "44733c560c11d52584319d2a071779f3"
  },
  {
    "url": "friends/accounts.html",
    "revision": "d2fe7d2bb60e75c410e5649fd15911eb"
  },
  {
    "url": "friends/index.html",
    "revision": "3bebee2f899868a8815d5b22a60d6519"
  },
  {
    "url": "index.html",
    "revision": "329ae772365d566f87f9c65ecb0f215a"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "ae7c00c43a4403f77c90d9ad77d5d429"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "3709fcc839a75e70ed9484d83be20cee"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "6943dfd70a3bed2822248153a0af09bb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
