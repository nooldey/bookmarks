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
    "revision": "8ebce794e30ecb1849e48616778a5c20"
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
    "url": "assets/js/1.443a1213.js",
    "revision": "c3f1b0d9c9ea2f27ea98dacb57bca11e"
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
    "url": "assets/js/8.b0bd694f.js",
    "revision": "28c174de5475c5ac447c64b5cf676aff"
  },
  {
    "url": "assets/js/9.cc6e8d8c.js",
    "revision": "822e4c227d730e15620c51ed4874247e"
  },
  {
    "url": "assets/js/app.e14fd199.js",
    "revision": "c0b24cc4275ab573b041c185e60fba5f"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "b8874a5a636a9b9e821d10033fc7f2dd"
  },
  {
    "url": "developer/index.html",
    "revision": "445827231bd915eef7c8455628f4ccfa"
  },
  {
    "url": "developer/vps.html",
    "revision": "cbeb3e60c12e7f7d02a21d8f25551cb0"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "02a49d9ef09d581f90e569a3e27967e3"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "f3ee110b149bab9c5df87ae40acb87d6"
  },
  {
    "url": "friends/accounts.html",
    "revision": "d847e507b7f35e6d9e26cc26b3953e7d"
  },
  {
    "url": "friends/index.html",
    "revision": "ea2e2778a5e9aa8d4dc1a2ff6b487bbf"
  },
  {
    "url": "index.html",
    "revision": "283d8c043a63489d7422d27f20b8f5ed"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "44a8ba63e49ca35ab122b888fc5586f8"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "4ac2f5f07badd3540f245fc53b039ee4"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "39ed5a0b9779ffbffde375719e28f59b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
