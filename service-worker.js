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
    "revision": "d5b12c9993a7eaac44900c964ad7c840"
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
    "url": "assets/js/3.bfd5c848.js",
    "revision": "1a395462d251bef8ea3db525fd377000"
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
    "url": "assets/js/6.7d8143c5.js",
    "revision": "e4a6fe2a7b17f330e6eac2d5d2c4e2e0"
  },
  {
    "url": "assets/js/7.17c17eb1.js",
    "revision": "50e09c1eede6e231e0043ddd76ffdcfb"
  },
  {
    "url": "assets/js/8.d49a0e63.js",
    "revision": "50e704c62e1d9aeece5d80bccb72ca68"
  },
  {
    "url": "assets/js/9.91d61d23.js",
    "revision": "a6ee0e56e05c366f8582d23bbbebd446"
  },
  {
    "url": "assets/js/app.7be9b91e.js",
    "revision": "7a745c220643e9d2474fc3095b572b35"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "639053fc19712d0d9aed0a372703864f"
  },
  {
    "url": "developer/index.html",
    "revision": "ea798e3edb6808b82797b7ea338b38ac"
  },
  {
    "url": "developer/vps.html",
    "revision": "950cfa28a55c638297c1a7a76eb76f10"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "17466b573c36b63d0e2f8607eb30a8d9"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "69e9e7ae3c14df2b28b3954861dc5466"
  },
  {
    "url": "friends/index.html",
    "revision": "aee23f90f71a05ddca5d13ec7cbae3b4"
  },
  {
    "url": "index.html",
    "revision": "11c846e598dff8f1a34ce027f4c86596"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "da323e4fa8b75f0e1b1f5b066ca0efac"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "5a355ca7e7031211f636dc101fb024e1"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "76ebf131b3632e031b021ccd25357877"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
