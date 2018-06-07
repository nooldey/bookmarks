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
    "revision": "ec460f7603fc3d9fc6149423f76c0331"
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
    "url": "assets/js/0.4b1b9b2c.js",
    "revision": "c31e5e73e73d9b13b1f71d5e0fd93683"
  },
  {
    "url": "assets/js/1.2598e0b4.js",
    "revision": "14cd8a2c08a0324cd1ac221de9da578c"
  },
  {
    "url": "assets/js/10.11f76bff.js",
    "revision": "4ae918355c720df6218c7ec89623a374"
  },
  {
    "url": "assets/js/2.5706b484.js",
    "revision": "f6b8fb8a83707d609f8f5ab50a7d460c"
  },
  {
    "url": "assets/js/3.55904a10.js",
    "revision": "b836c91ddd48229bb368dc93381db965"
  },
  {
    "url": "assets/js/4.71845105.js",
    "revision": "df185fc655124ed8ae58c3be5f5c48bb"
  },
  {
    "url": "assets/js/5.58c5ac02.js",
    "revision": "e8e6401de7cf73642e7d3ce8ba1a1e98"
  },
  {
    "url": "assets/js/6.87e4681c.js",
    "revision": "f60a9e933a4cf5444494d56748a0c81e"
  },
  {
    "url": "assets/js/7.014782ce.js",
    "revision": "97f2e54dd9de5a3af250ce33b01c7a23"
  },
  {
    "url": "assets/js/8.a59823e3.js",
    "revision": "1a425c1548eb268f5c4eeb0c25bfa554"
  },
  {
    "url": "assets/js/9.ca0c966c.js",
    "revision": "6464c90e95a2c7e40b1eebf9e0a850b1"
  },
  {
    "url": "assets/js/app.12073908.js",
    "revision": "3b763d1b12d7d8854897a4aace6b1789"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "d24caf125adcaa41b779c2358d50e29a"
  },
  {
    "url": "developer/index.html",
    "revision": "7a281190df832a7437343eb280a3109e"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "48aeb9d7d55d3f03e193ae5235d6e533"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "89bb81db2215fe795fa31f2e045413fb"
  },
  {
    "url": "friends/index.html",
    "revision": "39bb528f082f2007cf339e8e69738094"
  },
  {
    "url": "geren/index.html",
    "revision": "df7b896a7bf0dac47a5bfeddfacd14a4"
  },
  {
    "url": "index.html",
    "revision": "7f029def44a5a32c1b587cdc606e72e0"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "1a8c3da60f8f5636c0ae3b1b92c30cf9"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "4cee2cba44578c0c8dd8ab49469576cb"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "286662002c740bffe1c12ae641d14949"
  },
  {
    "url": "xiangmu/index.html",
    "revision": "eb055a723f4f5cdae29eccdba6786554"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
