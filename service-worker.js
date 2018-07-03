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
    "revision": "458e2c35fcdf46738d6988b93799ae64"
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
    "url": "assets/js/1.b0e6a26b.js",
    "revision": "59fa077f8284f47ed33b030822379e37"
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
    "url": "assets/js/8.506e4caf.js",
    "revision": "2f340e18de7a5cebd455df3ce1995f9a"
  },
  {
    "url": "assets/js/9.cc6e8d8c.js",
    "revision": "822e4c227d730e15620c51ed4874247e"
  },
  {
    "url": "assets/js/app.615e4376.js",
    "revision": "1baced30c594a8c7d2c5877d8673461c"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "240c55f9e3d1deb059e579eeee36de79"
  },
  {
    "url": "developer/index.html",
    "revision": "ec042501156789c8dd04ec985b64506c"
  },
  {
    "url": "developer/vps.html",
    "revision": "a05a39c99c94f445e5836fe5b9c4c9f8"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "936ecc7e1cd6442f80d94a92cdeea554"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "d5815e9c8e8da8e7238a0f70aba7dd26"
  },
  {
    "url": "friends/accounts.html",
    "revision": "32933163a3c1b05a9d8ed07c26a0aa76"
  },
  {
    "url": "friends/index.html",
    "revision": "d58534ad6465c48acdb2044fe738f21d"
  },
  {
    "url": "index.html",
    "revision": "c36924e8b40b369bd733c6872ef5514a"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "6c902e69f6d10488c0475b1bc844f5d8"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "768e48cb05baf846931afded2c507831"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "2ee2c253f4f0ed6e2ebd0c9620bbfba9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
