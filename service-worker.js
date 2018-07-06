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
    "revision": "10947b288f61cee9da8e782731c98b72"
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
    "url": "assets/js/app.68efad30.js",
    "revision": "fd2365daa9201a9dba7abf1f187376f7"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "a58292e2bbd1fa7285257ea1f157208f"
  },
  {
    "url": "developer/index.html",
    "revision": "d58b3cde07f11118afb479ecae1973b2"
  },
  {
    "url": "developer/vps.html",
    "revision": "3d3f7f361a749418f03ce9b573012fe1"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "62d1922690e966d276e869945ea741ba"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "4d157d77942e899aacd8c0cb8a514863"
  },
  {
    "url": "friends/accounts.html",
    "revision": "289d0e4bd930a5715f37a1fc6bbba9a1"
  },
  {
    "url": "friends/index.html",
    "revision": "5be26d8649586a2bd0b5eb656ae05a5e"
  },
  {
    "url": "index.html",
    "revision": "880e46b555edc80a335966d7d6a50a9d"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "19672cb10fe71e1c7ed0c8378df3e54f"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "803ca04618da12b5f9f23b97e3e38ab8"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "b7e83e494b0c9f7c0a4f04dfd207623e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
