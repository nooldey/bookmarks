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
    "revision": "77e9fc55a7ceb562c22ed6761d5c6a6d"
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
    "url": "assets/js/3.833c5c9f.js",
    "revision": "4c0da35618cfb97695a06b2dc9bcf25c"
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
    "url": "assets/js/app.04df14b9.js",
    "revision": "dce6a8f389b03597e575c4cef1268165"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "02878581703b70033244eb7ad8d228ae"
  },
  {
    "url": "developer/index.html",
    "revision": "32b5f617ebd52d2981ab0d4c35992f38"
  },
  {
    "url": "developer/vps.html",
    "revision": "3afe4d5f9369332023e17c58a5c178d1"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "33be0b01e39622786727032f2fdf8821"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "ff360d02fd70edd001660b96ed9d328b"
  },
  {
    "url": "friends/index.html",
    "revision": "9fb5a272ba52cfe2691ae345c70c3663"
  },
  {
    "url": "index.html",
    "revision": "a7dbec15cb4070470d4298824924cc43"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "170dcd483a3e72349b25040fcec482ee"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "af31fffb0dbb497bb407e35fd851aa19"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "71b35bd9fc6f368eb636a38a159ed5aa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
