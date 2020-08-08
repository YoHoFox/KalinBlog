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
    "revision": "ba6cd000888badac50bf89eac96de785"
  },
  {
    "url": "AboutMe/index.html",
    "revision": "4ac0d0a211f06c3f58bd02e9e2ae7ff0"
  },
  {
    "url": "assets/css/0.styles.bff7f1f7.css",
    "revision": "24b72e705abc11d0e19a22226aefd008"
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
    "url": "assets/img/loading.c38bb4c9.svg",
    "revision": "c38bb4c91362836bff4e41485000be83"
  },
  {
    "url": "assets/img/pan.07613e22.png",
    "revision": "07613e229a93d4e819835f6c46a5bbc9"
  },
  {
    "url": "assets/js/1.add7b5ae.js",
    "revision": "b7a5dc14eec49f0e2d8cbf5544fd76ea"
  },
  {
    "url": "assets/js/10.61c8c468.js",
    "revision": "a7bbbae34c87a0cc3fecfdc01d94d720"
  },
  {
    "url": "assets/js/11.74c2a9a1.js",
    "revision": "a8c2463eb6929d4c4a64dfa33adb3684"
  },
  {
    "url": "assets/js/12.bfbe3f53.js",
    "revision": "c95ff5d17c76cd0080be2c5d1635bd27"
  },
  {
    "url": "assets/js/13.57f3318f.js",
    "revision": "6f18e7cb637bf8e94594c05d58b1b80a"
  },
  {
    "url": "assets/js/14.73455483.js",
    "revision": "eb35149bbc56547e4268cb5ce28486ca"
  },
  {
    "url": "assets/js/15.4ad2e38c.js",
    "revision": "dd5fc609c048ad8d636eefad671d538c"
  },
  {
    "url": "assets/js/16.c129ab33.js",
    "revision": "dcb104ccd1bfcdaf1e6e6594fcd27abf"
  },
  {
    "url": "assets/js/17.cc9e734b.js",
    "revision": "9e491d9c9afa11adee8932a7b4a460fe"
  },
  {
    "url": "assets/js/18.72b0a48d.js",
    "revision": "557c9d23fc135c0c80cf8311432a0d30"
  },
  {
    "url": "assets/js/19.4447ce46.js",
    "revision": "d58839fcf0f887494685760373a3641c"
  },
  {
    "url": "assets/js/20.ccdaa304.js",
    "revision": "c2b5fe6e33609e59cf3d3715149918fd"
  },
  {
    "url": "assets/js/21.915ccee2.js",
    "revision": "39cedff2a2d1148c607e996d934d216f"
  },
  {
    "url": "assets/js/22.867b41c8.js",
    "revision": "bca1d6ba261fd781812a9f5133841dcb"
  },
  {
    "url": "assets/js/23.94cc48e6.js",
    "revision": "a46d543f53d1ac19e50b45dea373bdcd"
  },
  {
    "url": "assets/js/24.9d020161.js",
    "revision": "160b9219e425cb6411a895c59f48c46b"
  },
  {
    "url": "assets/js/25.82ef75cf.js",
    "revision": "f5fa70fccaa5ec8256625c8f80ec9e1c"
  },
  {
    "url": "assets/js/26.77a1191c.js",
    "revision": "bcf681251ffdda59456e71bbd8003c0a"
  },
  {
    "url": "assets/js/27.2a6b7e84.js",
    "revision": "8ec526f37ec2a6ad353043512e3dff0b"
  },
  {
    "url": "assets/js/28.183cfe35.js",
    "revision": "782a3a21b95c0823130b84cd58aa2fbb"
  },
  {
    "url": "assets/js/29.8e09d49e.js",
    "revision": "f133a7a746663b91ab6751170872492a"
  },
  {
    "url": "assets/js/30.bbcaf058.js",
    "revision": "3e42c6563d6d66bf61eb5f09b97d7508"
  },
  {
    "url": "assets/js/31.26188843.js",
    "revision": "afe9d511806adfeef2e3ec206f1bfba6"
  },
  {
    "url": "assets/js/32.356a3c60.js",
    "revision": "7075b29fa4382e85cff1c1dd1f423bab"
  },
  {
    "url": "assets/js/33.366e17ee.js",
    "revision": "3134701b12f2fb9f42252ff262501662"
  },
  {
    "url": "assets/js/34.6e7d310b.js",
    "revision": "766af13951a5f8fbea0ea54880c31220"
  },
  {
    "url": "assets/js/35.ba42e479.js",
    "revision": "5c2c18d30301d7e271930ffd7940cddf"
  },
  {
    "url": "assets/js/36.00b948e9.js",
    "revision": "531de6a3ae1ed7fcb826041b0d9c29d6"
  },
  {
    "url": "assets/js/4.b4f21c62.js",
    "revision": "718247023a19fc52e57afbf1c2d664bc"
  },
  {
    "url": "assets/js/5.bd54e69f.js",
    "revision": "93957b6ff27d097133594f22fe8499bc"
  },
  {
    "url": "assets/js/6.d39e4b82.js",
    "revision": "bdb20f6803e6d95e0626242f9c4b6f12"
  },
  {
    "url": "assets/js/7.1004069c.js",
    "revision": "05d7490d364657e13acda1542dac776e"
  },
  {
    "url": "assets/js/8.65975006.js",
    "revision": "df6e63ab06d19c096cab96ffb539ee77"
  },
  {
    "url": "assets/js/9.d3342904.js",
    "revision": "830cb374d269f782348eb8c5fd8c3e00"
  },
  {
    "url": "assets/js/app.9c72ef30.js",
    "revision": "485c8b3c93cea43435ba0bdc55036b8e"
  },
  {
    "url": "assets/js/vendors~flowchart.805702fd.js",
    "revision": "b54a5c6a240a6069ec603b7b85ca9af5"
  },
  {
    "url": "blog/BackEnd/index.html",
    "revision": "b52fbb4454d52de0a2fbdf38b67fadd7"
  },
  {
    "url": "blog/BackEnd/LearnMongoDB.html",
    "revision": "6efc4edbc5b30f16e8e14d9e0b6d6ce5"
  },
  {
    "url": "blog/Diary/index.html",
    "revision": "01a168005959b7c138e0f0138a204b56"
  },
  {
    "url": "blog/Diary/Iwantbepro.html",
    "revision": "aa84825f742baeee233eed0ae8570e7b"
  },
  {
    "url": "blog/Diary/LearnMarkdown.html",
    "revision": "0cf2c5ddc1e8ea7921d725f20edd15c9"
  },
  {
    "url": "blog/Diary/TheFirstOne.html",
    "revision": "0761e5edd8f6d9ba5d9401fbc7a1919d"
  },
  {
    "url": "blog/FrontEnd/index.html",
    "revision": "1d8c756e73909e9aa33109adbc36ad0a"
  },
  {
    "url": "blog/GW2Life/20200320.html",
    "revision": "32f35908d685a352ab564d4aeb584238"
  },
  {
    "url": "blog/GW2Life/index.html",
    "revision": "b11df3652dff98b42be21d6abbb15c60"
  },
  {
    "url": "blog/Hack/index.html",
    "revision": "0e5a124b2fe0f365466192568490c872"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "64cc071d588f4ddb3c44c79a01b11f07"
  },
  {
    "url": "categories/激战2/index.html",
    "revision": "607256575147e99b4e5b5432886811f5"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "3912cf12331956b955af8129ba7c1818"
  },
  {
    "url": "categories/Diary.html",
    "revision": "d07ce332aecac6a44aebd262f82620a7"
  },
  {
    "url": "categories/GW2Life.html",
    "revision": "3b140f05f44847d72a2834e441db9e5f"
  },
  {
    "url": "categories/Hack.html",
    "revision": "b99bbd9616dbc55dc891e7aad16af232"
  },
  {
    "url": "categories/index.html",
    "revision": "80f899a82e53edac73a483caeccc1bea"
  },
  {
    "url": "categories/Python.html",
    "revision": "b4425ee45a2be7c726f67d77d0becc15"
  },
  {
    "url": "categories/Vue.html",
    "revision": "86b792585e5e029090b5ccdb39f9af17"
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
    "revision": "dcdcb45a1d603277b7d86e8fb8395fb7"
  },
  {
    "url": "image/hero1.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "6b473a4b6edb093d62ede6f224e4ee6a"
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
    "revision": "90a8dd310deb11a6f1f82b0ff2d0a111"
  },
  {
    "url": "tags/激战2/index.html",
    "revision": "8b1e76e35421141da3958c2e38aaa6b0"
  },
  {
    "url": "tags/杂项/index.html",
    "revision": "8d59bf3f6cb664257b60b967698b4718"
  },
  {
    "url": "tags/index.html",
    "revision": "8562117f57f7b9c9e108c1348bbc8240"
  },
  {
    "url": "tags/MongoDB/index.html",
    "revision": "6a156625edc04d670fe9515c26c2c6b7"
  },
  {
    "url": "timeline/index.html",
    "revision": "e4565af246055cbe1c5b104cb6d0744d"
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
