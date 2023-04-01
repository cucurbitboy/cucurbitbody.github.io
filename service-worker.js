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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2e2cf2859b572c00d6d748edf01bb1c6"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.9fb2b061.js",
    "revision": "e664de0f8bc3f8391a54bd4e597ab105"
  },
  {
    "url": "assets/js/10.a11da1b9.js",
    "revision": "76f842db331ce825ceb3561084f1869f"
  },
  {
    "url": "assets/js/11.2643825f.js",
    "revision": "c1bd680774acbbe9a01123dab9f8565b"
  },
  {
    "url": "assets/js/12.cc17d045.js",
    "revision": "5403e94e1671a8ad3322cae496b67a55"
  },
  {
    "url": "assets/js/13.ec9bb9ab.js",
    "revision": "f5714afc3cb3a2225934b98f7bab6be4"
  },
  {
    "url": "assets/js/14.987c67de.js",
    "revision": "aff7cd2557c0e3e53f6a20bad4e48981"
  },
  {
    "url": "assets/js/15.80f9112b.js",
    "revision": "cfd09aafc25677f9162f3a08af11fd4b"
  },
  {
    "url": "assets/js/16.9b1b2020.js",
    "revision": "4f001832c1dcab7779e16712ad73048c"
  },
  {
    "url": "assets/js/17.f2f01119.js",
    "revision": "4276b515de26a1b7125bc6ab9819fdbe"
  },
  {
    "url": "assets/js/18.b2058909.js",
    "revision": "6622710524b8b26aa7c18c3843fbd06f"
  },
  {
    "url": "assets/js/4.3de6246a.js",
    "revision": "61ef2d3d66ccdc7eaf6a87f4cc8d90f8"
  },
  {
    "url": "assets/js/5.e4c00abf.js",
    "revision": "88ecf28e9dba665b9065d8b1e984ad89"
  },
  {
    "url": "assets/js/6.748537c5.js",
    "revision": "a98ef0a7b1afa840cee8471597e115eb"
  },
  {
    "url": "assets/js/7.dc411f38.js",
    "revision": "0aa1af3b00e01ce7401bfab3fff47332"
  },
  {
    "url": "assets/js/8.6b15f8f6.js",
    "revision": "d9924a3c0ce4b0cd7f4943c7fd61037f"
  },
  {
    "url": "assets/js/9.71494bfb.js",
    "revision": "702619421fee8ee3882a0ba35663ea75"
  },
  {
    "url": "assets/js/app.ac8b2827.js",
    "revision": "56c412deab49af63413526967b2b3413"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.11704b07.js",
    "revision": "5fceae3fc1fd5ef9881a984c0ccc8710"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "dd48078c68857fabe9ef9392b6334fb6"
  },
  {
    "url": "categories/java/index.html",
    "revision": "27938d6daa73a824357320f75f0696e7"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "004d2376e4842f48509c41ab272ae16b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4a82a6413a36d85ce6c555b8cea85598"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "2f2fa37b84037c49b2efc39151d931fe"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "2fc5885f3ccb599050424f8d33c7c11b"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "b8efe4a6e00706e7e0f72c421a3f86f9"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "9bc8d1a54c2ca2ae65eb28046cd59070"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "336565eb4e408c71024bae3e66e43ec8"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "cbad7a5e1956be27283d41b75035017d"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "2522edcc9fa99552ecbc8f4a635da93f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "634cb4705220aa9111f398253951c600"
  },
  {
    "url": "tags/js/index.html",
    "revision": "daf59bd683ae2107aeee7dc89be9080d"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "07b955590cb067224b8f60b48f312410"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "703bdd0baee43a4ee15322c3933c8d28"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "fdf2039f7eb31139a66696d3e2c5e45b"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "6835e97f3291c2fe38256bcb451e9f75"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "75109454a8fced9e9907ba869b0a3700"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "4c223cca8f382a20c53ce2458db4740a"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "72e416b3a9a9c50e46bc35251232a860"
  },
  {
    "url": "timeline/index.html",
    "revision": "f5a571f8a5778ce7d7f5c3af7480aa9e"
  },
  {
    "url": "技术文章/index.html",
    "revision": "671cada285ceaed232a9ffe1390559c1"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "2d9e6c51765f3a140540b71b43d229f4"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "4edf0f33a416c5c1271a3655308e9cc6"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a456d34c99f7138d55f338e467bda687"
  },
  {
    "url": "生活分享/life.html",
    "revision": "2cbbd88317b83ac3e2bd5fbaec1211cb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
