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
    "revision": "1db9a45c6cbd05d25b0bd2438efad14a"
  },
  {
    "url": "assets/css/14.styles.9b70008f.css",
    "revision": "24eaea6d5e6d82ea9e22100e49519c08"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.68ceff9d.js",
    "revision": "d243af269dda6751bc0e89bab6bd10d8"
  },
  {
    "url": "assets/js/1.aa216eab.js",
    "revision": "5e7510a0516a28090f32696ab0d90abe"
  },
  {
    "url": "assets/js/10.b503061e.js",
    "revision": "fdf8b1a43371732dd18902d12d1cd906"
  },
  {
    "url": "assets/js/11.264aacae.js",
    "revision": "d628b2e064ed7f76bd0937523c073654"
  },
  {
    "url": "assets/js/12.4d570e0d.js",
    "revision": "6b25c7867783dd5fb7b75bc90a87655f"
  },
  {
    "url": "assets/js/13.fae0870d.js",
    "revision": "2390ea14080e8a5270a60185724beae6"
  },
  {
    "url": "assets/js/2.02d97f9a.js",
    "revision": "ef2ddf910e0a29f831355287c32b27f9"
  },
  {
    "url": "assets/js/3.be3cef93.js",
    "revision": "ba8010f6dc4b2dc4aa4e6ea4b6e6a563"
  },
  {
    "url": "assets/js/4.ae2ba6e9.js",
    "revision": "c4b94484add72bef7111dcf31be3a9e3"
  },
  {
    "url": "assets/js/5.f7eb2bcf.js",
    "revision": "a9aa1b7628d1a01b178e9476a464d00f"
  },
  {
    "url": "assets/js/6.92d80e7a.js",
    "revision": "699e63e914a45be6c59cc3cf95b0c14f"
  },
  {
    "url": "assets/js/7.f0eb7cba.js",
    "revision": "8bd9be121d50d3ec30e96599e9897746"
  },
  {
    "url": "assets/js/8.a388d043.js",
    "revision": "13dbce8c9af033c807c7d820b50a283c"
  },
  {
    "url": "assets/js/9.804d1f7d.js",
    "revision": "d88ee01a84497938fae93038ca4c5071"
  },
  {
    "url": "assets/js/app.4ca7ebef.js",
    "revision": "de96864b9feb140833844acb1bd11d89"
  },
  {
    "url": "Authine/index.html",
    "revision": "3c53d8e187473747ca1ab92d3c02094c"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "5e6d64bf7af3460dc75675fa4ad0899c"
  },
  {
    "url": "developer/index.html",
    "revision": "1e7a5bc86b495c32dc49542b62b1df8a"
  },
  {
    "url": "developer/vps.html",
    "revision": "81525e003348bed42eebdc70f3b10c3a"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "c106301f9317f286f260c92540f43087"
  },
  {
    "url": "dingding/index.html",
    "revision": "6d9aef7b59dfefd8671da68d1c57463e"
  },
  {
    "url": "friends/index.html",
    "revision": "68b48a72a3094a7fd0231de19bebd020"
  },
  {
    "url": "geren/index.html",
    "revision": "d50c4822aa724c6d6e10e4a074659d6c"
  },
  {
    "url": "index.html",
    "revision": "a339cf7a4aa53ecf99a614a7718782d6"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "e92b4a094b7aacc92ec1c91bcd7b7520"
  },
  {
    "url": "shiyonggongju/index.html",
    "revision": "75787f4b28146422d225da7d27959fd0"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "1c1a6241b0c11fcade4bd46a7f0ac364"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "5095972bdf0ce4b14cdfd1644a39a0a9"
  },
  {
    "url": "xiangmu/index.html",
    "revision": "219ab35eced9e89d3bedd044deb99f8f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
