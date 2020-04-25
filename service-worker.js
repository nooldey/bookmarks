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
    "revision": "39694a77f930956134daf430b2af98ca"
  },
  {
    "url": "assets/css/13.styles.ed3a3cd0.css",
    "revision": "24eaea6d5e6d82ea9e22100e49519c08"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.5b9a1876.js",
    "revision": "6b330dd7ceb3a7bf48e6f4aaec91fcf6"
  },
  {
    "url": "assets/js/1.7fc9f5ce.js",
    "revision": "a61976daefa803327cbfa459ed780065"
  },
  {
    "url": "assets/js/10.be6be6b7.js",
    "revision": "67c10fa8bd9c5020b3c275e3d716261f"
  },
  {
    "url": "assets/js/11.d28f7864.js",
    "revision": "00402643a23c1a672960fdda598f7a8c"
  },
  {
    "url": "assets/js/12.7ea0d8fd.js",
    "revision": "686091ba26533b34c07ddb11df6c0349"
  },
  {
    "url": "assets/js/2.b15f715d.js",
    "revision": "60ca5d024a2d16d4565335f601ab69ef"
  },
  {
    "url": "assets/js/3.c24937fa.js",
    "revision": "8de5d841c8b22f270ef2fd7950049b32"
  },
  {
    "url": "assets/js/4.41624d22.js",
    "revision": "620d40a4d0ca89e71ebd74b4c1c0eabb"
  },
  {
    "url": "assets/js/5.764d2fa5.js",
    "revision": "f35b147e26446e86abaa7dc313c96a80"
  },
  {
    "url": "assets/js/6.36713af4.js",
    "revision": "58336ef91a48f773ec8596d29d9e6399"
  },
  {
    "url": "assets/js/7.a652aea9.js",
    "revision": "e46f7f35f708d2c69d0e874170aa2c79"
  },
  {
    "url": "assets/js/8.bdbec642.js",
    "revision": "e8853a9f851df79b0589bdef2b3ba157"
  },
  {
    "url": "assets/js/9.1cc1e3a2.js",
    "revision": "aab715eb214e6da8a57b3703775060ea"
  },
  {
    "url": "assets/js/app.0760ce9a.js",
    "revision": "2d48186cfb1ce919e170cda6f009a936"
  },
  {
    "url": "Authine/index.html",
    "revision": "e60a26bcb42cd3b89ac68cc7f87ebb01"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "35e5db92b16149a94d85ad865b8aecc5"
  },
  {
    "url": "developer/index.html",
    "revision": "04b05146fa90bdfa6e00a8e5638d99ed"
  },
  {
    "url": "developer/vps.html",
    "revision": "d61e139cf6ca9d82aa70e229f4d3dcb0"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "42480406d4cbdea2c1930f24d767d0be"
  },
  {
    "url": "dingding/index.html",
    "revision": "6618c2d8e9761cbb31a789d4efa04c1e"
  },
  {
    "url": "friends/index.html",
    "revision": "98e0dc6364fbf01012cba096a8fb7070"
  },
  {
    "url": "index.html",
    "revision": "9662237c0e62606a64d951321b51ac81"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "d552026b3a533d2e3073666dc16c33d9"
  },
  {
    "url": "shiyonggongju/index.html",
    "revision": "dca23f3ec72d278271370fd83b318270"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "a0dbb069991791f9e489e3df1c84d7f8"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "99b6a55a2fdbd96cac95b1ab3c789cda"
  },
  {
    "url": "xiangmu/index.html",
    "revision": "7406db28294bc930c1a63f27a228a679"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
