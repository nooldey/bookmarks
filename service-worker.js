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
    "revision": "25d284e96b39f44816c55e55daec1548"
  },
  {
    "url": "assets/css/10.styles.60bbff25.css",
    "revision": "24eaea6d5e6d82ea9e22100e49519c08"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.aee56111.js",
    "revision": "6c8e8bd6b30db331315ff9eeb98346d0"
  },
  {
    "url": "assets/js/1.e2afe94c.js",
    "revision": "08cdabc3c5d4df526215a1701dfc2f34"
  },
  {
    "url": "assets/js/2.cff5dfb0.js",
    "revision": "377faace20d2d351e4eb9323d4d365a9"
  },
  {
    "url": "assets/js/3.a34aae99.js",
    "revision": "b000929fa7b76d878f1d76e0767a4dcd"
  },
  {
    "url": "assets/js/4.7a0df686.js",
    "revision": "e59b2c9028207d1dfada81b1ee0895d2"
  },
  {
    "url": "assets/js/5.3f9d5600.js",
    "revision": "edda90c8b5ccac8f6dcbb31af10ab165"
  },
  {
    "url": "assets/js/6.c4988b07.js",
    "revision": "95b99131adeda127f73c1cb0ecf1619a"
  },
  {
    "url": "assets/js/7.d2b868dd.js",
    "revision": "8db2b733ef20ae518d770f76b0e33b72"
  },
  {
    "url": "assets/js/8.2217a2e5.js",
    "revision": "af0f92dd9b429cf902f561f21ac7af72"
  },
  {
    "url": "assets/js/9.150502a4.js",
    "revision": "afcc79f36a17f1b60ee066ba8f864ae5"
  },
  {
    "url": "assets/js/app.595a568c.js",
    "revision": "77cd921da4285ae67e8bd2a03a798311"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "e8cdd46a284e709456e7ce65670cec1d"
  },
  {
    "url": "developer/index.html",
    "revision": "b08e6a5b73cb8576ad4ec07627c5ebba"
  },
  {
    "url": "developer/vps.html",
    "revision": "6cdf7d8bea46b1f507b89e5004455601"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "46d5e9f9534702a8c376545adc0f08b1"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "ec03752cd8d6a69e6a87e6b496ced701"
  },
  {
    "url": "friends/index.html",
    "revision": "5f320aa9987049c822f550d62468ec29"
  },
  {
    "url": "index.html",
    "revision": "be7cdbc7c3b1596f7cf1575a0fb3d6e4"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "ca124888876c6e9f195548590341bba1"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "f45ea43f56d6d20a4961bdffef849c88"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "4745fcddc36119b35d6b05772ffbf71a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
