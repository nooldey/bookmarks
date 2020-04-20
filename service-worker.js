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
    "revision": "9d798650c428361a145858160ddb9706"
  },
  {
    "url": "assets/css/13.styles.ed3a3cd0.css",
    "revision": "24eaea6d5e6d82ea9e22100e49519c08"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.5b9a1876.js",
    "revision": "6b330dd7ceb3a7bf48e6f4aaec91fcf6"
  },
  {
    "url": "assets/js/1.7fc9f5ce.js",
    "revision": "a61976daefa803327cbfa459ed780065"
  },
  {
    "url": "assets/js/10.be6be6b7.js",
    "revision": "67c10fa8bd9c5020b3c275e3d716261f"
  },
  {
    "url": "assets/js/11.d28f7864.js",
    "revision": "00402643a23c1a672960fdda598f7a8c"
  },
  {
    "url": "assets/js/12.7ea0d8fd.js",
    "revision": "686091ba26533b34c07ddb11df6c0349"
  },
  {
    "url": "assets/js/2.b15f715d.js",
    "revision": "60ca5d024a2d16d4565335f601ab69ef"
  },
  {
    "url": "assets/js/3.c24937fa.js",
    "revision": "8de5d841c8b22f270ef2fd7950049b32"
  },
  {
    "url": "assets/js/4.41624d22.js",
    "revision": "620d40a4d0ca89e71ebd74b4c1c0eabb"
  },
  {
    "url": "assets/js/5.7099c4d9.js",
    "revision": "3800120aff14eb0ecd4e74dfdea1e232"
  },
  {
    "url": "assets/js/6.36713af4.js",
    "revision": "58336ef91a48f773ec8596d29d9e6399"
  },
  {
    "url": "assets/js/7.a652aea9.js",
    "revision": "e46f7f35f708d2c69d0e874170aa2c79"
  },
  {
    "url": "assets/js/8.bdbec642.js",
    "revision": "e8853a9f851df79b0589bdef2b3ba157"
  },
  {
    "url": "assets/js/9.1cc1e3a2.js",
    "revision": "aab715eb214e6da8a57b3703775060ea"
  },
  {
    "url": "assets/js/app.591a994f.js",
    "revision": "22681e457e250e4319fe3ac23ffd7115"
  },
  {
    "url": "Authine/index.html",
    "revision": "baaf0c5bd5ab3d579d198e1fa7296db6"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "c29acbf4987fe74aa585b6e5dfaf64d9"
  },
  {
    "url": "developer/index.html",
    "revision": "9e967630fd51c85a0d2ea383a441d82f"
  },
  {
    "url": "developer/vps.html",
    "revision": "79c0ea37a8b1993d2c37e69e61db0160"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "6366c70b16d729009640bf68562eb875"
  },
  {
    "url": "dingding/index.html",
    "revision": "bb858813210d9896d30bd8dde4bc7a05"
  },
  {
    "url": "friends/index.html",
    "revision": "be3418a69c8289a489e856f528052860"
  },
  {
    "url": "index.html",
    "revision": "8d6a8dfa971b233f9ca4f84367dad23c"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "e88ddaf3043481bc925482f3673a22b1"
  },
  {
    "url": "shiyonggongju/index.html",
    "revision": "4eb226266bd0635b193eac2b05f6f0b8"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "375bdb7aff21c73d0a46d6e4c6800d38"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "9aad0da42eb3d000d4f365ed0fec2182"
  },
  {
    "url": "xiangmu/index.html",
    "revision": "18e84bb23d1cf7d55bb3de1b56357678"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
