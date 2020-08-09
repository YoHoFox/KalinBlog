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
    "revision": "b610b6577ebb75eee7b87ca9296ad00c"
  },
  {
    "url": "AboutMe/index.html",
    "revision": "c0bd7526d75718c4e5595ba71a6e991c"
  },
  {
    "url": "assets/css/0.styles.2537121f.css",
    "revision": "b99f43ed1e472190ae3b896629c3cce7"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.40e49907.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "assets/img/image.0e6310ea.png",
    "revision": "0e6310ea59f1709a39aef9b475c55ea0"
  },
  {
    "url": "assets/img/loading.c38bb4c9.svg",
    "revision": "c38bb4c91362836bff4e41485000be83"
  },
  {
    "url": "assets/img/pan.07613e22.png",
    "revision": "07613e229a93d4e819835f6c46a5bbc9"
  },
  {
    "url": "assets/img/ssh1.0f87c15e.png",
    "revision": "0f87c15e32a23039ed8b8b6a016265cd"
  },
  {
    "url": "assets/img/ssh2.45d5c48e.png",
    "revision": "45d5c48e0f708526b196e6a005536e1f"
  },
  {
    "url": "assets/img/ssh3.81b17e51.png",
    "revision": "81b17e51458123337153f92aacb97790"
  },
  {
    "url": "assets/img/ssh4.cb7cd06e.png",
    "revision": "cb7cd06e923eca29bb4b38a82d28c62c"
  },
  {
    "url": "assets/js/1.add7b5ae.js",
    "revision": "b7a5dc14eec49f0e2d8cbf5544fd76ea"
  },
  {
    "url": "assets/js/10.9aa5721a.js",
    "revision": "56cdf14c30e3f0ea4caa331adfb0e01f"
  },
  {
    "url": "assets/js/11.1e622690.js",
    "revision": "0d9dcf66eaf51fcc1a606d63269e3c1d"
  },
  {
    "url": "assets/js/12.2d9976db.js",
    "revision": "1aedb3a86de14bf2484373bd96b9bf6a"
  },
  {
    "url": "assets/js/13.4b2bb79d.js",
    "revision": "7c428d000ea3cb359bd511284ef90eea"
  },
  {
    "url": "assets/js/14.750f5bef.js",
    "revision": "b933eaf76b5bf4d38aae0cd0b696f057"
  },
  {
    "url": "assets/js/15.4b5d6b7a.js",
    "revision": "564f8f0b8e15c8e546a71c42bc6fff06"
  },
  {
    "url": "assets/js/16.3d5dd7f4.js",
    "revision": "fdcb64a2c48431d65bb1bdb9534d4229"
  },
  {
    "url": "assets/js/17.83b56fdc.js",
    "revision": "d67151a860517c687dccea3a14deb80f"
  },
  {
    "url": "assets/js/18.4ee5fb09.js",
    "revision": "4e8701a13041fda93ef01d15c18ffa40"
  },
  {
    "url": "assets/js/19.b86a913f.js",
    "revision": "26fd96ff1132c8dfd0809fa66beed46c"
  },
  {
    "url": "assets/js/20.e6432649.js",
    "revision": "9373e9bc24e496bd5e8c3e235f9dbbd8"
  },
  {
    "url": "assets/js/21.a1252e3b.js",
    "revision": "e3824c8b1c04c1d173268608efa7763e"
  },
  {
    "url": "assets/js/22.0b29b38b.js",
    "revision": "cdc604ba54970c51e7ea89ced570359c"
  },
  {
    "url": "assets/js/23.9d12a538.js",
    "revision": "b085d9466d8b1a44fdaf619e6350e2ed"
  },
  {
    "url": "assets/js/24.fc6e6f56.js",
    "revision": "f731dd10219de21ae3c07061df5cde12"
  },
  {
    "url": "assets/js/25.259aceca.js",
    "revision": "d5eb159971d8c95b3de9567189de5a24"
  },
  {
    "url": "assets/js/26.fb7096be.js",
    "revision": "dfb90265459f153a311e3544873a4f60"
  },
  {
    "url": "assets/js/27.0dfa42a6.js",
    "revision": "c682c905a29b32862378e073fa6fd1ce"
  },
  {
    "url": "assets/js/28.e43d6e13.js",
    "revision": "58207c999f94e094555dbbaa0b6d1d0e"
  },
  {
    "url": "assets/js/29.61502765.js",
    "revision": "48a3920f72f1a310fa88e47569105b63"
  },
  {
    "url": "assets/js/30.706910ba.js",
    "revision": "cb7befb3dfaebd63968883d7ed80ca2e"
  },
  {
    "url": "assets/js/31.9cbff8fc.js",
    "revision": "dc7c846f49f5a7a961321da39d6049f1"
  },
  {
    "url": "assets/js/32.4676bf1b.js",
    "revision": "ecd4d0183c492a5f94af7303e771c9f8"
  },
  {
    "url": "assets/js/33.997c30a6.js",
    "revision": "15d794b5bb949b582f4a7961296bd2b0"
  },
  {
    "url": "assets/js/34.d9e8d745.js",
    "revision": "da5f617aeca1381cfdae7a8df8c4999c"
  },
  {
    "url": "assets/js/35.00a04899.js",
    "revision": "fd931a479d3d7c6e34787845006e9b1a"
  },
  {
    "url": "assets/js/36.527f1db8.js",
    "revision": "9c91e31df9ac1789e03f280564001f0c"
  },
  {
    "url": "assets/js/37.ba5ebe59.js",
    "revision": "49a4ea4e3a69360df96e99a020f69dd7"
  },
  {
    "url": "assets/js/4.5a3f1195.js",
    "revision": "3ba5d823bc8a73ed6a2fa3411de6888a"
  },
  {
    "url": "assets/js/5.2558a841.js",
    "revision": "2608968d4fa606e7f22e73c36fa0da6a"
  },
  {
    "url": "assets/js/6.f07c78b4.js",
    "revision": "021202756ba3b2a1ca6d3fc72fdec5e7"
  },
  {
    "url": "assets/js/7.b52cea64.js",
    "revision": "0b966d2bd3c87fa8765385a3f4273527"
  },
  {
    "url": "assets/js/8.167d76b7.js",
    "revision": "09086eea1ba514096633e9671c328661"
  },
  {
    "url": "assets/js/9.85d30bd0.js",
    "revision": "26d241d75372570cf628e012dd95428f"
  },
  {
    "url": "assets/js/app.eb01b7a9.js",
    "revision": "cd252ff555e4c38187145619ba408a8a"
  },
  {
    "url": "assets/js/vendors~flowchart.1702a4cc.js",
    "revision": "ef0a92cea451f0bdb7d6870e080d1168"
  },
  {
    "url": "blog/BackEnd/index.html",
    "revision": "c5a203c187ecdad1a8b7a44591378df5"
  },
  {
    "url": "blog/BackEnd/LearnMongoDB.html",
    "revision": "43430aa5e0aae698d389a17b8f69c6c5"
  },
  {
    "url": "blog/Diary/index.html",
    "revision": "0f00bed181e9750b33b9fa48e4fddff0"
  },
  {
    "url": "blog/Diary/Iwantbepro.html",
    "revision": "3014fae5546fdaabd3bb909e38f1a22c"
  },
  {
    "url": "blog/Diary/LearnMarkdown.html",
    "revision": "421182c30bda2af29f3e3c969d75579a"
  },
  {
    "url": "blog/Diary/TheFirstOne.html",
    "revision": "b40e7afbbb9b3ce9fe3127977b2ca48e"
  },
  {
    "url": "blog/Diary/Togithub.html",
    "revision": "d405ac59a3d5d17caaed09a03bba33a6"
  },
  {
    "url": "blog/FrontEnd/index.html",
    "revision": "e2630917bc63a1e13988f142844ac6a3"
  },
  {
    "url": "blog/GW2Life/20200320.html",
    "revision": "46a174e85ef2d5618a08d207396ab6aa"
  },
  {
    "url": "blog/GW2Life/index.html",
    "revision": "b5209a0a2bb4fc9bf4e4faf5192d9903"
  },
  {
    "url": "blog/Hack/index.html",
    "revision": "06d54a683b3bbcb7544c97168fe15151"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "db7f76abf6f30ba5bd9b8bd6cbebd472"
  },
  {
    "url": "categories/激战2/index.html",
    "revision": "7a3ac47a86db6cefc7873a8d30356674"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "905635d5eb9bee58c0c41af088f2ccc1"
  },
  {
    "url": "categories/Diary.html",
    "revision": "4a5f3d53fb593850ca9d8be086b8cfcb"
  },
  {
    "url": "categories/GW2Life.html",
    "revision": "cf90ac481288f9f85761b959fb3c877b"
  },
  {
    "url": "categories/Hack.html",
    "revision": "80c81efbcba3ba36851b972ca96073ac"
  },
  {
    "url": "categories/index.html",
    "revision": "4cde84f8906612f712481f6be38aba63"
  },
  {
    "url": "categories/Python.html",
    "revision": "689e93677adb29c9f590d7740fc7eba8"
  },
  {
    "url": "categories/Vue.html",
    "revision": "98559e94307726c6ca972e276bf9cb5d"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "c8b00d812608bf98f806b55fa4140795"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "image/hero.png",
    "revision": "d00b9e860ec702c31f7b50ff4d1ba25d"
  },
  {
    "url": "image/hero0.png",
    "revision": "dcdcb45a1d603277b7d86e8fb8395fb7"
  },
  {
    "url": "image/hero1.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "dbf80cd2b69330824cc54f67932bd3df"
  },
  {
    "url": "love/比心.png",
    "revision": "9344734f90afd01afb5566ac14c22dec"
  },
  {
    "url": "love/love.html",
    "revision": "68de52e48f4306179d313c0604d4ef57"
  },
  {
    "url": "tag/index.html",
    "revision": "d427b82d3b7c0e7393b9c82a1d0c6ff5"
  },
  {
    "url": "tags/激战2/index.html",
    "revision": "a8de48fd08c126e2be58260409116e9c"
  },
  {
    "url": "tags/杂项/index.html",
    "revision": "25cab9fd9e0eabee7a20426704830c05"
  },
  {
    "url": "tags/index.html",
    "revision": "cbb7bf80c460771bcbcd8fb71d69a258"
  },
  {
    "url": "tags/MongoDB/index.html",
    "revision": "4fe0e680099dc2acd91113decabb6a52"
  },
  {
    "url": "timeline/index.html",
    "revision": "78eb5039ff4f8210e4a98e821ac29e61"
  },
  {
    "url": "vuepress/head-fish.jpg",
    "revision": "3cb672033db83620e4e024c9c747e13f"
  },
  {
    "url": "vuepress/noob-bird.png",
    "revision": "aac68ffa9d234410b537727716206029"
  },
  {
    "url": "vuepress/topic.png",
    "revision": "8b84efd94f9ee1856155eb95330d9a01"
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
