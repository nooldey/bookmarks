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
    "revision": "352d3fd7c788c05f7fac4ad0ac6de5e0"
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
    "url": "assets/js/0.4b1b9b2c.js",
    "revision": "c31e5e73e73d9b13b1f71d5e0fd93683"
  },
  {
    "url": "assets/js/1.2598e0b4.js",
    "revision": "14cd8a2c08a0324cd1ac221de9da578c"
  },
  {
    "url": "assets/js/10.11f76bff.js",
    "revision": "4ae918355c720df6218c7ec89623a374"
  },
  {
    "url": "assets/js/2.5706b484.js",
    "revision": "f6b8fb8a83707d609f8f5ab50a7d460c"
  },
  {
    "url": "assets/js/3.55904a10.js",
    "revision": "b836c91ddd48229bb368dc93381db965"
  },
  {
    "url": "assets/js/4.71845105.js",
    "revision": "df185fc655124ed8ae58c3be5f5c48bb"
  },
  {
    "url": "assets/js/5.58c5ac02.js",
    "revision": "e8e6401de7cf73642e7d3ce8ba1a1e98"
  },
  {
    "url": "assets/js/6.87e4681c.js",
    "revision": "f60a9e933a4cf5444494d56748a0c81e"
  },
  {
    "url": "assets/js/7.014782ce.js",
    "revision": "97f2e54dd9de5a3af250ce33b01c7a23"
  },
  {
    "url": "assets/js/8.a59823e3.js",
    "revision": "1a425c1548eb268f5c4eeb0c25bfa554"
  },
  {
    "url": "assets/js/9.ca0c966c.js",
    "revision": "6464c90e95a2c7e40b1eebf9e0a850b1"
  },
  {
    "url": "assets/js/app.fbfc0433.js",
    "revision": "f14aeb885099059ab51999b8ec3a55b5"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "83a54a0e54ab13a9ae3e713b8c540d85"
  },
  {
    "url": "developer/index.html",
    "revision": "b24e60c17b794a08e02187a0ace69c75"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "25d9d32489e504b4c24ba95e7ffacb44"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "0638332a2d773f252484f450d014c152"
  },
  {
    "url": "friends/index.html",
    "revision": "63e426eff8d1853818218f55a9b57e33"
  },
  {
    "url": "geren/index.html",
    "revision": "e142a3fd29ed86e76c9b7d75ea3de4bc"
  },
  {
    "url": "index.html",
    "revision": "4c6a4ca0064569dcc9aee3988a60fc54"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "5e15df3f7bb6b81317c3ca2d07cd0524"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "2daaad54935084ff1f3e17eb0bd9939a"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "e0aa3128307041e4ba3b93f5893330f4"
  },
  {
    "url": "xiangmu/index.html",
    "revision": "83f67c4627b326c679026cd88efe3f65"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
