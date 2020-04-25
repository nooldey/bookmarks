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
    "revision": "56ba46fc077387f6a8f3d174c4f433fb"
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
    "url": "assets/js/5.55060cd6.js",
    "revision": "b53a83f774c63acfbe9418e6b7019677"
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
    "url": "assets/js/app.55b0480c.js",
    "revision": "b57fb9b264337a4ad4deb9bfbf4ca556"
  },
  {
    "url": "Authine/index.html",
    "revision": "45dd2c8f7fb592de0ad128aca95173c3"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "04ee47530cbabfae913d8b8c2d12ba1d"
  },
  {
    "url": "developer/index.html",
    "revision": "fb1504455b0535aa587f7767c77a3198"
  },
  {
    "url": "developer/vps.html",
    "revision": "6c3d82b1f946e311e3d78de51532a466"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "8e8e425fcbf049729964a5011b9f86db"
  },
  {
    "url": "dingding/index.html",
    "revision": "041ba2aa9090b9b640ee4b4fb284fbdf"
  },
  {
    "url": "friends/index.html",
    "revision": "f6e2fa606b79f9e1daab5c5d81140cb5"
  },
  {
    "url": "index.html",
    "revision": "571641cc1a79202feb1cdf4b7f9bebb2"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "6014624b781494fa449aa71b42a7944a"
  },
  {
    "url": "shiyonggongju/index.html",
    "revision": "297d3035e975a856bdc447c231c1cc26"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "b128e482ec3c00a0b516c972094fdadd"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "b5456857fc8cffb004127389493dc6fa"
  },
  {
    "url": "xiangmu/index.html",
    "revision": "844cdf6de2761910979328ac6239a20c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
