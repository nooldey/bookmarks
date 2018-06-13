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
    "revision": "0384b20330d838c96b99fc1f51f31f9c"
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
    "url": "assets/js/0.061e7b85.js",
    "revision": "d548cdcf284b0ac32087dbc4860e1dc7"
  },
  {
    "url": "assets/js/1.443a1213.js",
    "revision": "c3f1b0d9c9ea2f27ea98dacb57bca11e"
  },
  {
    "url": "assets/js/10.11f76bff.js",
    "revision": "4ae918355c720df6218c7ec89623a374"
  },
  {
    "url": "assets/js/2.ee6fde87.js",
    "revision": "9df5753bbd25bf04f1a0cf47e4e09e83"
  },
  {
    "url": "assets/js/3.bfc8c3ca.js",
    "revision": "65e8b88adef54199cc44389fd52c4552"
  },
  {
    "url": "assets/js/4.1bed3a81.js",
    "revision": "084b46c4507d21407793a8de022604e3"
  },
  {
    "url": "assets/js/5.e7f4082b.js",
    "revision": "0ee9cfdae16850701f8f3e55712ace5a"
  },
  {
    "url": "assets/js/6.173df758.js",
    "revision": "7d5996e096668d79772b8edddcc2b9da"
  },
  {
    "url": "assets/js/7.b7283216.js",
    "revision": "d166dcec59d6b1e1e4e6adc2ddc6dd57"
  },
  {
    "url": "assets/js/8.b0bd694f.js",
    "revision": "28c174de5475c5ac447c64b5cf676aff"
  },
  {
    "url": "assets/js/9.cc6e8d8c.js",
    "revision": "822e4c227d730e15620c51ed4874247e"
  },
  {
    "url": "assets/js/app.01805ef1.js",
    "revision": "48cb1a2cc4b255030c472eb011d25a01"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "a787fcedee6f27505bac6c3601f40f4e"
  },
  {
    "url": "developer/index.html",
    "revision": "aa2abfdb8a03e8c177f271791378b5c5"
  },
  {
    "url": "developer/vps.html",
    "revision": "e953995d4ee0f1d1ca0e0293d738b79f"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "4784945a7da02a002455eb1d03169869"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "8adc20f0e2173a7aeafd6d618a6f5152"
  },
  {
    "url": "friends/accounts.html",
    "revision": "5191e9ec7e3e85d1fa832148369da0c2"
  },
  {
    "url": "friends/index.html",
    "revision": "8d0cfc54bed720a8f607cc5f45e19765"
  },
  {
    "url": "index.html",
    "revision": "488ea5b993cbf3356f4a92251391a1dd"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "b5611305c8027ec8ef03d51a1f517590"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "0693e9b01571f8ced032d7d72baa5227"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "75a5cb308b836f415b35d861cef6780b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
