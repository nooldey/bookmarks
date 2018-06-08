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
    "revision": "8f320408c7972a98580aac8f4493ec0e"
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
    "url": "assets/js/6.5228658f.js",
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
    "url": "assets/js/app.9e09d1ab.js",
    "revision": "2b0cfff1ad1819436957f5b96ecb3a85"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "2d12d1700d982ba8b276ac8226d2fe50"
  },
  {
    "url": "developer/index.html",
    "revision": "b790306b27b03935a7adbec4779a4436"
  },
  {
    "url": "developer/vps-promo.html",
    "revision": "2878c741507849d9a5c7ab3a2321f36c"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "1b01e2f71aa626410a0701ecd85f0422"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "e7ae32c049113b9c7bf1589a5f1dc9f4"
  },
  {
    "url": "friends/index.html",
    "revision": "137bb6fea73a15c6626460b8e6a9a449"
  },
  {
    "url": "index.html",
    "revision": "28e03a5df108dcb1ef53821e1f42cffa"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "230d7f10451bf73abd1002021bb89f71"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "c15574a3c3ce65f079d68a4e30e74ce8"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "5bb2cb0237e12e4120226dd84629fd2b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
