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
    "revision": "fac6a07914282bcccf43ebbea65fb2f4"
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
    "url": "assets/js/0.e5711f0f.js",
    "revision": "12de52c0094e4a96a7e27b9d861c2fee"
  },
  {
    "url": "assets/js/1.91b9dd99.js",
    "revision": "c35622b435090b8511a5c6917f174409"
  },
  {
    "url": "assets/js/2.03b52323.js",
    "revision": "52d9ce93832fd570c940667a20858887"
  },
  {
    "url": "assets/js/3.bb73b757.js",
    "revision": "220acd87216dacbb97c09c4a3f4cef16"
  },
  {
    "url": "assets/js/4.8971b08a.js",
    "revision": "50145b3b5ead0b8d2d43f3ca8f220060"
  },
  {
    "url": "assets/js/5.8252a513.js",
    "revision": "026fbd8785b48f8ca8daa2560fcd888a"
  },
  {
    "url": "assets/js/6.e1f69adf.js",
    "revision": "c73c23ff6904a0e6fb76087e282fc521"
  },
  {
    "url": "assets/js/7.cc1e9fe0.js",
    "revision": "5334b06a6da32146b5501d7bd2b54c88"
  },
  {
    "url": "assets/js/8.dcdeca5d.js",
    "revision": "909039204d2584221336ead9edaaab6f"
  },
  {
    "url": "assets/js/9.91d61d23.js",
    "revision": "a6ee0e56e05c366f8582d23bbbebd446"
  },
  {
    "url": "assets/js/app.4496553d.js",
    "revision": "d1a0571102b27889b01a59ed2c66cc11"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "4b2ca85f4e4aa1a9f31150fd3f700e14"
  },
  {
    "url": "developer/index.html",
    "revision": "bb4df7f9c57daff94a0491bb083429ec"
  },
  {
    "url": "developer/vps.html",
    "revision": "c05a54d4341abfc70a62cdaa5f474d1a"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "6b20ed16a20db951080391518996db73"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "c36b417257eca323ab34d4cdd686332b"
  },
  {
    "url": "friends/index.html",
    "revision": "daa40e869604b815fc6bd8b2bb48a998"
  },
  {
    "url": "index.html",
    "revision": "ea75b6611fbf2246753efabd943e66ae"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "7fcacc860c1481fd5c1c4f850e94e585"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "5c5a1e91e1ab67268fb49c5d35a2d7c2"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "d810d418c688e31a9d89561374f276a9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
