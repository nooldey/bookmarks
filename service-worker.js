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
    "revision": "816f336e833ac5a3e667dfd4231c2291"
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
    "url": "assets/js/0.7707d958.js",
    "revision": "2237fc12707a5781dfdd729735900f3d"
  },
  {
    "url": "assets/js/1.f9175ed3.js",
    "revision": "61d04d94c9eac0e4e62bdb3d9ec3a05d"
  },
  {
    "url": "assets/js/10.11f76bff.js",
    "revision": "4ae918355c720df6218c7ec89623a374"
  },
  {
    "url": "assets/js/2.8082e709.js",
    "revision": "73d8a990fded885ae5989565b9b26d04"
  },
  {
    "url": "assets/js/3.bfc8c3ca.js",
    "revision": "65e8b88adef54199cc44389fd52c4552"
  },
  {
    "url": "assets/js/4.af51e57f.js",
    "revision": "53abf542efcb7419a296365275f99b7f"
  },
  {
    "url": "assets/js/5.91c4d265.js",
    "revision": "787c11a933b59b1150551ae087fd9068"
  },
  {
    "url": "assets/js/6.c61b626f.js",
    "revision": "f2a006152d9ae8a7302891a00b62e053"
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
    "url": "assets/js/9.0a93e728.js",
    "revision": "b4bf04e93428ae9e11e1993f94801f0a"
  },
  {
    "url": "assets/js/app.af81d1f6.js",
    "revision": "cf9f5dd0403e1f7f493d3f37162a1d98"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "27f59896bf778928bdffe240093c8155"
  },
  {
    "url": "developer/index.html",
    "revision": "7ba399797867718eee783001a7729f38"
  },
  {
    "url": "developer/vps.html",
    "revision": "e56b3f7b964a2d6e1faaa3027241e0a8"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "e171ab953115a72a7d520de914efea00"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "9a9f72f87263553ed5cf92be3f3ad981"
  },
  {
    "url": "friends/accounts.html",
    "revision": "a371e1b074f4d2ed3b7c313fa4fc168f"
  },
  {
    "url": "friends/index.html",
    "revision": "0398b3a6e4bcc1657563180a4c57b3fb"
  },
  {
    "url": "index.html",
    "revision": "734e0675cbe62c581cb3bb4656d6eb1e"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "5315b41b1e35a23cca522dbe2106dcf3"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "a5ce7afd50c76104c8e3a11bc609db2f"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "e0972f945256c15c995f8657d3acb600"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
