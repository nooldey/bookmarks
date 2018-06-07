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
    "revision": "329c72e4e613b6375998838fdf6694f4"
  },
  {
    "url": "assets/css/9.styles.cf6af10a.css",
    "revision": "24eaea6d5e6d82ea9e22100e49519c08"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.0125d283.js",
    "revision": "fa3a03778b1f5784d600f980b450162d"
  },
  {
    "url": "assets/js/1.b610ac78.js",
    "revision": "0e93782b541d843a142f58027963ad4e"
  },
  {
    "url": "assets/js/2.52572d54.js",
    "revision": "9f2970f7f83c55b6bd2b97dbfcb6a848"
  },
  {
    "url": "assets/js/3.f2fed7a8.js",
    "revision": "d85f3b0fa820d9721dc7773ac1d68c69"
  },
  {
    "url": "assets/js/4.561efb8f.js",
    "revision": "20d04ad798d07918b9b74d4ccaf517ed"
  },
  {
    "url": "assets/js/5.f139ec9b.js",
    "revision": "791f00206634369780dbf53698de005e"
  },
  {
    "url": "assets/js/6.4372d0a9.js",
    "revision": "ad3123d6c321acf00136df183f922a69"
  },
  {
    "url": "assets/js/7.f6689e27.js",
    "revision": "7f7b965a2fc542e71d53b9a1ba1dfa2d"
  },
  {
    "url": "assets/js/8.3d1433d9.js",
    "revision": "3e4895ccc6e276b2e2f6003b86228a85"
  },
  {
    "url": "assets/js/app.552728e0.js",
    "revision": "a89654ec86189d1fc53c1b50f97763a3"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "863954f5ce1d068c99085f969f70909c"
  },
  {
    "url": "developer/index.html",
    "revision": "de549ea7f7c7bd2f3df8dbbdf1dc0d8a"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "c258073910d0a60a020c634f38d9928a"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "c7f16bdae87518d5f363b50b50fd64d7"
  },
  {
    "url": "friends/index.html",
    "revision": "a0780e46efa27f75041898baf0eae114"
  },
  {
    "url": "index.html",
    "revision": "ee72ada59793a733be62780581c5d54e"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "45ddcd3e3b9f6d01726e7d9099a678a2"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "2ea1fac9c784db0539d4a84c834f8c27"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "89898d8f525c7a0d49f882fa00bf6170"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
