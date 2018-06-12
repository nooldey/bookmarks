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
    "revision": "ef943e1fc4a88a9ce5c0c39ecdb10a33"
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
    "url": "assets/js/3.78218c5c.js",
    "revision": "3179707550eaac151bb05504da87ae0d"
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
    "url": "assets/js/app.c36efdc2.js",
    "revision": "66330c6a70ee607ebe2642e41bc7529b"
  },
  {
    "url": "avatar.png",
    "revision": "1157ff4b7484871b1c3b4e5dbd142099"
  },
  {
    "url": "chengxukaifaCoder/index.html",
    "revision": "8c450052dac25b689ec4ac3fbfa4a136"
  },
  {
    "url": "developer/index.html",
    "revision": "5f97e02acc3bfb4effbb118bd99f0c70"
  },
  {
    "url": "developer/vps.html",
    "revision": "cec123ab66848c78262f356cf893c2e3"
  },
  {
    "url": "dianshangyunying/index.html",
    "revision": "3a0360930a69a12b24a1f595de633c52"
  },
  {
    "url": "dianzishu/index.html",
    "revision": "7dc35305518e7e0a3a53cd91cad354f1"
  },
  {
    "url": "friends/index.html",
    "revision": "95754acba5165b1a501d06cfee0add2b"
  },
  {
    "url": "index.html",
    "revision": "e95a7b8cf9f4c53d7226df00cc611c00"
  },
  {
    "url": "qianduanzaixiangongju/index.html",
    "revision": "cac0a115cc266ef5b84ca794934cc82f"
  },
  {
    "url": "shoucangdewenzhang/index.html",
    "revision": "9a21e98ee5a83e99bf9cc9e59ab60568"
  },
  {
    "url": "sousuoyinqing/index.html",
    "revision": "46559642672994b45938cfb062fef8ec"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
