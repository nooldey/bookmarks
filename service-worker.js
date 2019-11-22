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
    "revision": "8e454fb7d37fa0252d49817b5d72be7b"
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
    "url": "assets/js/app.67d1baaa.js",
    "revision": "4ce5b73181a0051419ce98ea71354caf"
  },
  {
    "url": "Authine/index.html",
    "revision": "6f6df82ff84e829ee43a0748fefc51a1"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "60dff560523b31cedcf7b1e51597a897"
  },
  {
    "url": "developer/index.html",
    "revision": "ead710b26b03a11e29176fbba32e609e"
  },
  {
    "url": "developer/vps.html",
    "revision": "236b964ae2b46e2abec1990dc5908d53"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "eb4d94b8f524b06c47398e561ae1f665"
  },
  {
    "url": "dingding/index.html",
    "revision": "575d16c837cdfdee778f64f5b804f5fb"
  },
  {
    "url": "friends/index.html",
    "revision": "2907ea8cf61c654610743462bd3aea81"
  },
  {
    "url": "geren/index.html",
    "revision": "7d4f74669be0d14207c11e3b11933b42"
  },
  {
    "url": "index.html",
    "revision": "bf25084c6b18e85d14e00a24aef2e8ea"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "e61e260c7291a85a10898006901a2b14"
  },
  {
    "url": "shiyonggongju/index.html",
    "revision": "bb49da63736783c8851e7a7b7341d026"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "183be1df4d6d0f2d8e65d72d5fcde24e"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "6dbf9b5a7b68c937f38807c582ee755b"
  },
  {
    "url": "xiangmu/index.html",
    "revision": "fa67171476cdf69b4cef67835b4bb89a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
