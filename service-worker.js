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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5d57f461e82ad73a4d579d2bf42879ff"
  },
  {
    "url": "assets/css/styles.33bea618.css",
    "revision": "218017156ae7603fd9e0a1c6f34cb417"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.a9fd8206.js",
    "revision": "480f62ff16ae744fd858d9d596fcd275"
  },
  {
    "url": "assets/js/10.310b1f11.js",
    "revision": "82d965e7e05cc90c91cf4e9f59dca393"
  },
  {
    "url": "assets/js/2.6f949262.js",
    "revision": "40fac768597707fbaec178f52f9b8a54"
  },
  {
    "url": "assets/js/3.85649f71.js",
    "revision": "58f136513345cc8e0ae6a4be90d8a232"
  },
  {
    "url": "assets/js/4.bfe4d357.js",
    "revision": "54a592ba348be2975f63b1667a6fee3d"
  },
  {
    "url": "assets/js/5.510540e9.js",
    "revision": "e737323e65aae3709d5fad288e331ec2"
  },
  {
    "url": "assets/js/6.e2711376.js",
    "revision": "721ba7708f22fa23b801d09522245e70"
  },
  {
    "url": "assets/js/7.0f945aa7.js",
    "revision": "8032f80677071679b6cd60f5e48e99b2"
  },
  {
    "url": "assets/js/8.52bae7be.js",
    "revision": "a4059b39e0ac4a5c43af3a7b90bf0cfe"
  },
  {
    "url": "assets/js/9.a3c46766.js",
    "revision": "f85b9b123046a2253fa0c98aa14a66c2"
  },
  {
    "url": "assets/js/app.33bea618.js",
    "revision": "d21d8518386cde0aa63e05dae615de15"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "e60de933163c50d6189eb0c21864a924"
  },
  {
    "url": "developer/index.html",
    "revision": "d5df4d3067a2f6040c3415a65790763c"
  },
  {
    "url": "developer/vps.html",
    "revision": "e6c266f8e066cd5e0d16fa749afd4394"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "7248ef59297d32f97e38499abd935e28"
  },
  {
    "url": "friends/index.html",
    "revision": "061b6863595d557ef73ff93d72d95ff7"
  },
  {
    "url": "geren/index.html",
    "revision": "4afe5d25a19137807be72cd15170065d"
  },
  {
    "url": "index.html",
    "revision": "52fa728a20e0c8a52ecfcc7992bcb9ce"
  },
  {
    "url": "qianduanjichu-ganhuo/index.html",
    "revision": "b45e7e448233c4d6a9f5c7da76d737c9"
  },
  {
    "url": "shiyonggongju/index.html",
    "revision": "b04e84e8a525c14a274735ce79564b8f"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "fc0812b1d0279ce0a512ac725c082d57"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
