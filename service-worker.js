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
    "revision": "b7f7f36e84dab8d6d700c33413eec7ae"
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
    "url": "assets/js/5.eca8d33b.js",
    "revision": "9ad4d00ac76307f47b04ab415608dc44"
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
    "url": "assets/js/app.8336bd40.js",
    "revision": "c6e4ba97a2b488f8feb1776dc9ac5037"
  },
  {
    "url": "Authine/index.html",
    "revision": "ca11d1443517c1fc82b71622be556117"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "a98af458ecc5dc992e1c42a75273d164"
  },
  {
    "url": "developer/index.html",
    "revision": "ccbbad2d5d7c9d624e065bad4232179d"
  },
  {
    "url": "developer/vps.html",
    "revision": "7751facf210b29911d415c2f679432db"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "08a9fd7028ae753e9a9ecbe202e42aea"
  },
  {
    "url": "dingding/index.html",
    "revision": "81a893b47062ddcc398e8892b1744525"
  },
  {
    "url": "friends/index.html",
    "revision": "0d41e977397698a296f3d63d6cebbab0"
  },
  {
    "url": "index.html",
    "revision": "fb19bb25d4c212b5985a8fa88cf5d1d6"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "4184ec779fa95809f33c81cf2deb04b9"
  },
  {
    "url": "shiyonggongju/index.html",
    "revision": "3312ebae120f6277a41ad0991b49b9f0"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "307844e1566979ca460cc4c03741541d"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "0e2b94609b1a0c0aeba84e579b062b55"
  },
  {
    "url": "xiangmu/index.html",
    "revision": "cae178e9594c6c7072e52d30449ed0c1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
