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
    "revision": "bed9d2b037a81cd96c56e3dce1dbe7c2"
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
    "url": "assets/js/10.cbf5268d.js",
    "revision": "d5fd4ec2858f219e250fbf282240a580"
  },
  {
    "url": "assets/js/2.ee6fde87.js",
    "revision": "9df5753bbd25bf04f1a0cf47e4e09e83"
  },
  {
    "url": "assets/js/3.d19d9557.js",
    "revision": "892c9a2926f4eb3520f0ed616a2e4d92"
  },
  {
    "url": "assets/js/4.47bee34b.js",
    "revision": "92c7223938b9620eedb919df13c6f955"
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
    "url": "assets/js/7.427e9bd1.js",
    "revision": "b10df15582b5e49407dd27821fe92c5d"
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
    "url": "assets/js/app.c534f057.js",
    "revision": "ed7ce1e60d228792f371b6074576df92"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "94dd43b5e25ddc1d4d426f201536d019"
  },
  {
    "url": "developer/index.html",
    "revision": "91651fa3f5727e16a162c454b6c68bf1"
  },
  {
    "url": "developer/vps.html",
    "revision": "c3bc7f7228e0ee80a265b8b65971e5dc"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "5dd26a0eea924eb4cb68f4eb70f8889d"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "901d7686710120ae67170be747a24a7a"
  },
  {
    "url": "friends/accounts.html",
    "revision": "a2493b7b2eb53bb30820aacb1be9f41e"
  },
  {
    "url": "friends/index.html",
    "revision": "3d01b2187b83e0b1bd2dd0849c9155df"
  },
  {
    "url": "index.html",
    "revision": "b57fa2b854c3d4a82624d59fa78ad72c"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "6826617b43b8d6aa561d8a10ba6aa3c7"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "755d8c512fa4ab1d542b7e5a61779b14"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "a96e7b4ac6f7a4f0beb7bb67092b8fc1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
