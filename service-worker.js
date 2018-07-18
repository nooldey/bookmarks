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
    "revision": "943ceb6897a543dc688b3eba65beb6b4"
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
    "url": "assets/js/4.7ce9f8e4.js",
    "revision": "61d4c51705124ece609e9003fe357dae"
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
    "url": "assets/js/app.7b4d4934.js",
    "revision": "f396c7424fe569e1fcea9c4557b1b9c1"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "86ba70cf17bdd5a37f7b06a002fea5ef"
  },
  {
    "url": "developer/index.html",
    "revision": "c6b692043b18bae473ad318f4dbaee2f"
  },
  {
    "url": "developer/vps.html",
    "revision": "4ed054cbc4cbcf02027d05ebc67a39c6"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "5b6c74a5032ed4444b176ad06a8bc9f0"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "d9b30306cccdab304000b9487943a763"
  },
  {
    "url": "friends/accounts.html",
    "revision": "2dfc287cfb9b305df5e01ac085c04ba3"
  },
  {
    "url": "friends/index.html",
    "revision": "4c3a3a4beca319cf07c72d23d56ec2f4"
  },
  {
    "url": "index.html",
    "revision": "aeb4dc8fa0c6428b8de0920285019c9a"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "5a0f2ceca55410d59cee9612312fe68c"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "fda83a63b19b1f5c78c2e308a9884e4a"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "870846c031b256652dc969917395e07f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
