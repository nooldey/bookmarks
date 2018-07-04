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
    "revision": "0caf3a5f8ca3c3bf168c658788c1613c"
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
    "url": "assets/js/4.1bed3a81.js",
    "revision": "084b46c4507d21407793a8de022604e3"
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
    "url": "assets/js/app.21b82c99.js",
    "revision": "5c6f638a7510841783d019e949cff7de"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "9da73d10bbf2c673ae0c0409329293d7"
  },
  {
    "url": "developer/index.html",
    "revision": "3f655dcca8d3827c3dfb99f7fc03ca8c"
  },
  {
    "url": "developer/vps.html",
    "revision": "a9e76eae954929dcf7630e3b214f5daa"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "c625fda3a3c984046a0bd1c9ec455972"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "f3395d0d00fe15f4dabb5ada4cadbe1d"
  },
  {
    "url": "friends/accounts.html",
    "revision": "6c7a798eceba208482591007ba002db4"
  },
  {
    "url": "friends/index.html",
    "revision": "ccfbdffc64e94dd6aa4f0d0eca2cf7a3"
  },
  {
    "url": "index.html",
    "revision": "b82ccd87afcf5f87e65f7f3b64d46de1"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "e21735825d300eca2540240e2b2e9188"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "55776b50168c4cce68b6ae87f1a7afea"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "79cf2d2cc07c47ce439050f40e723c3d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
