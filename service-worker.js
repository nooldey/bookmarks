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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2a231323a1bc45b66364500a562bf222"
  },
  {
    "url": "assets/css/styles.540942fc.css",
    "revision": "218017156ae7603fd9e0a1c6f34cb417"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.a7dd77da.js",
    "revision": "5f51a9af9d6175e46cef6531830693f0"
  },
  {
    "url": "assets/js/2.26a5f988.js",
    "revision": "8745db45a97147b224dcc789240cf34a"
  },
  {
    "url": "assets/js/3.118529f2.js",
    "revision": "372d03a71b13c577258682a5eb234fb1"
  },
  {
    "url": "assets/js/4.99946bbe.js",
    "revision": "80f278c29621af3f7dc6d75fb6095dc6"
  },
  {
    "url": "assets/js/5.164b657b.js",
    "revision": "693f2d027ab48c617a195b92cb84f274"
  },
  {
    "url": "assets/js/6.800c7a26.js",
    "revision": "29a79ae385006263d705aa18a1a1cfb1"
  },
  {
    "url": "assets/js/7.d46da369.js",
    "revision": "51c2063bb40b68298b96d31b5b492430"
  },
  {
    "url": "assets/js/8.8226169e.js",
    "revision": "95221b8ad4d9b3173404e79255846f78"
  },
  {
    "url": "assets/js/9.67364dfd.js",
    "revision": "5368afb514844a58953a5bcf12f0b123"
  },
  {
    "url": "assets/js/app.540942fc.js",
    "revision": "8cce7322b43d569fa15e0750b617a701"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "ff5f667e93406fe2413b9e726f63748c"
  },
  {
    "url": "developer/index.html",
    "revision": "c845064ba03900687b6ca7ba5b22a087"
  },
  {
    "url": "developer/vps.html",
    "revision": "2e48cdbf0170809a0148201221afd85b"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "f31b70743dd70e36a8cbaf350207c432"
  },
  {
    "url": "geren/index.html",
    "revision": "75fd0ed14e3beef968bf0eee43336c12"
  },
  {
    "url": "index.html",
    "revision": "3622faa0f0dec0c051e324ad3caac4a5"
  },
  {
    "url": "qianduanjichu-ganhuo/index.html",
    "revision": "187c37ca44a81e6466ff7036228faa65"
  },
  {
    "url": "shiyonggongju/index.html",
    "revision": "899a33a7dbcc86d8fccb0f4d765ef4a0"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "c33e2abf849245be8816b70f4d4dcb0d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
