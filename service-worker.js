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
    "revision": "6c813fe23fce038d13c47c5ac4c225f7"
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
    "url": "assets/js/3.4cdf2285.js",
    "revision": "a7327c16ac460dd85dd09e9f60618760"
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
    "url": "assets/js/app.77aa1013.js",
    "revision": "e1b3fd4ec3878c4e6304983d484031ec"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "7e85a840ff5c251c3d110c39e8fa501f"
  },
  {
    "url": "developer/index.html",
    "revision": "1ad2afc94aa704618e49baa3b267fcd0"
  },
  {
    "url": "developer/vps.html",
    "revision": "f450798d6c0f82b5ac334f829ef96a04"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "b2cc92f47443ae1330f5c9af3e53a550"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "e6195e201f042413b8670624ca5a9e99"
  },
  {
    "url": "friends/index.html",
    "revision": "471643ee5ffcfccc6cdb8670e425fdc2"
  },
  {
    "url": "index.html",
    "revision": "1c598f8e28880ebdcf004e5e95da8b00"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "f9489030ae48858afe6b0165ee71990b"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "4cc24cc5b6403e61dd1acad3e311b8cc"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "e778f65426be40094c4703462996d9c7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
